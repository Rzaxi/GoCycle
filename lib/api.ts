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
