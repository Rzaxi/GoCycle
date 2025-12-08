"use server";

import { cookies, headers } from "next/headers";
import { loginUser } from "@/lib/api";
import { redirect } from "next/navigation";

interface LoginActionResult {
    success: boolean;
    error?: string;
}

export async function loginAction(formData: FormData): Promise<LoginActionResult> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
        return { success: false, error: "Email dan password harus diisi" };
    }

    // Get browser headers to forward to backend for accurate device detection
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || undefined;
    const forwardedFor = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || undefined;

    try {
        const response = await loginUser(
            { email, password },
            { userAgent, forwardedFor }
        );
        const { tokens, user } = response.data;

        const cookieStore = await cookies();

        // Store access token in httpOnly cookie (secure, not accessible by JavaScript)
        cookieStore.set("accessToken", tokens.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            expires: new Date(tokens.accessTokenExpiresAt),
        });

        // Store refresh token in httpOnly cookie (for token renewal)
        cookieStore.set("refreshToken", tokens.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            expires: new Date(tokens.refreshTokenExpiresAt),
        });

        // Store user info in a separate cookie (readable by client for UI purposes)
        cookieStore.set("userInfo", JSON.stringify({
            id: user.id,
            email: user.email,
            fullName: user.fullName,
            accountType: user.accountType,
        }), {
            httpOnly: false, // Readable by client for UI display
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            expires: new Date(tokens.refreshTokenExpiresAt),
        });

        return { success: true };
    } catch (error) {
        if (error instanceof Error) {
            return { success: false, error: error.message };
        }
        return { success: false, error: "Terjadi kesalahan. Silakan coba lagi." };
    }
}

export async function logoutAction(): Promise<void> {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;

    // Call backend logout API if we have tokens
    if (accessToken && refreshToken) {
        try {
            const { logoutUser } = await import("@/lib/api");
            await logoutUser(accessToken, refreshToken);
        } catch (error) {
            // Continue with local logout even if API call fails
            console.error("Logout API call failed:", error);
        }
    }

    // Clear all auth cookies
    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");
    cookieStore.delete("userInfo");

    redirect("/login");
}

export async function getAccessToken(): Promise<string | null> {
    const cookieStore = await cookies();
    return cookieStore.get("accessToken")?.value || null;
}

export async function isAuthenticated(): Promise<boolean> {
    const token = await getAccessToken();
    return !!token;
}
