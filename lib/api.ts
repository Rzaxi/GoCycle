const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type AccountType = "Pembeli" | "Penjual";

interface RegisterPayload {
    fullName: string;
    email: string;
    password: string;
    passwordConfirm: string;
    accountType: AccountType;
}

interface RegisterResponse {
    message: string;
    data: {
        id: string;
        email: string;
        fullName: string;
        accountType: AccountType;
        createdAt: string;
    };
}

interface ApiError {
    error: string;
    details?: {
        fieldErrors?: Record<string, string[]>;
        formErrors?: string[];
    };
}

interface LoginPayload {
    email: string;
    password: string;
}

interface LoginResponse {
    message: string;
    data: {
        user: {
            id: string;
            email: string;
            fullName: string;
            accountType: AccountType;
        };
        tokens: {
            accessToken: string;
            refreshToken: string;
            accessTokenExpiresAt: string;
            refreshTokenExpiresAt: string;
        };
    };
}

export async function loginUser(
    payload: LoginPayload,
    forwardHeaders?: { userAgent?: string; forwardedFor?: string }
): Promise<LoginResponse> {
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };

    // Forward browser headers for accurate device detection
    if (forwardHeaders?.userAgent) {
        headers["User-Agent"] = forwardHeaders.userAgent;
    }
    if (forwardHeaders?.forwardedFor) {
        headers["X-Forwarded-For"] = forwardHeaders.forwardedFor;
    }

    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData: ApiError = await response.json();

        if (response.status === 400 && errorData.details?.fieldErrors) {
            const fieldErrors = errorData.details.fieldErrors;
            const firstError = Object.values(fieldErrors).flat()[0];
            throw new Error(firstError || "Validasi gagal");
        }

        if (response.status === 401) {
            throw new Error("Email atau password salah. Silakan coba lagi.");
        }

        throw new Error("Terjadi kesalahan. Silakan coba lagi.");
    }

    return response.json();
}

// === REGISTER ===
export async function registerUser(payload: RegisterPayload): Promise<RegisterResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData: ApiError = await response.json();

        if (response.status === 400 && errorData.details?.fieldErrors) {
            const fieldErrors = errorData.details.fieldErrors;
            const firstError = Object.values(fieldErrors).flat()[0];
            throw new Error(firstError || "Validasi gagal");
        }

        if (response.status === 409) {
            throw new Error("Email sudah terdaftar. Silakan gunakan email lain.");
        }

        throw new Error("Terjadi kesalahan. Silakan coba lagi.");
    }

    return response.json();
}

// === LOGOUT ===
export async function logoutUser(
    accessToken: string,
    refreshToken: string
): Promise<{ message: string }> {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
        // Even if logout fails on server, we should still clear local tokens
        console.error("Logout API failed, but continuing with local cleanup");
        return { message: "Logged out locally" };
    }

    return response.json();
}
