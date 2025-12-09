const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type AccountType = "Pembeli" | "Penjual";

interface RegisterPayload {
    fullName: string;
    email: string;
    password: string;
    passwordConfirm: string;
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

// === USER PROFILE ===
interface UserProfileResponse {
    message: string;
    data: {
        id: string;
        fullName: string;
        email: string;
        accountType: AccountType;
        createdAt: string;
    };
}

export async function getUserProfile(accessToken: string): Promise<UserProfileResponse> {
    const response = await fetch(`${API_BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error("UNAUTHORIZED");
        }
        throw new Error("Gagal mengambil data profil");
    }

    return response.json();
}

// === STORE ===
interface CreateStorePayload {
    name: string;
    description?: string;
    address: string;
}

interface StoreResponse {
    message: string;
    data: {
        id: string;
        userId: string;
        name: string;
        description?: string;
        address: string;
        createdAt: string;
    };
}

export async function createStore(
    accessToken: string,
    payload: CreateStorePayload
): Promise<StoreResponse> {
    const response = await fetch(`${API_BASE_URL}/stores`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
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
            throw new Error("Anda sudah memiliki toko.");
        }

        throw new Error("Terjadi kesalahan. Silakan coba lagi.");
    }

    return response.json();
}

export async function getMyStore(accessToken: string): Promise<StoreResponse | null> {
    const response = await fetch(`${API_BASE_URL}/stores/my-store`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        if (response.status === 404) {
            return null; // User doesn't have a store yet
        }
        throw new Error("Gagal mengambil data toko");
    }

    return response.json();
}

// Product API Types
type ProductCategory = "Kerajinan" | "Bahan Baku";
type WeightUnit = "g" | "kg";

export interface ProductResponse {
    id: string;
    userId: string;
    name: string;
    description: string | undefined;
    category: ProductCategory;
    price: number;
    priceUnit: WeightUnit;
    priceUnitAmount: number;
    stock: number;
    stockUnit: WeightUnit;
    imagePath: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
}

interface ProductListResponse {
    message: string;
    data: ProductResponse[];
}

interface CreateProductResponse {
    message: string;
    data: ProductResponse;
}

export interface CreateProductPayload {
    name: string;
    description?: string;
    category: ProductCategory;
    price: number;
    priceUnit: WeightUnit;
    priceUnitAmount: number;
    stock: number;
    stockUnit: WeightUnit;
    image: File;
}

export async function createProduct(
    accessToken: string,
    payload: CreateProductPayload
): Promise<CreateProductResponse> {
    const formData = new FormData();
    formData.append("name", payload.name);
    if (payload.description) {
        formData.append("description", payload.description);
    }
    formData.append("category", payload.category);
    formData.append("price", payload.price.toString());
    formData.append("priceUnit", payload.priceUnit);
    formData.append("priceUnitAmount", payload.priceUnitAmount.toString());
    formData.append("stock", payload.stock.toString());
    formData.append("stockUnit", payload.stockUnit);
    formData.append("image", payload.image);

    const response = await fetch(`${API_BASE_URL}/products`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
        body: formData,
    });

    if (!response.ok) {
        const errorData: ApiError = await response.json();

        if (response.status === 400 && errorData.details?.fieldErrors) {
            const fieldErrors = errorData.details.fieldErrors;
            const firstError = Object.values(fieldErrors).flat()[0];
            throw new Error(firstError || "Validasi gagal");
        }

        if (response.status === 403) {
            throw new Error("Hanya penjual yang bisa menambahkan produk.");
        }

        if (response.status === 400 && errorData.error === "IMAGE_REQUIRED") {
            throw new Error("Foto produk wajib diupload.");
        }

        if (response.status === 400 && errorData.error === "INVALID_FILE_TYPE") {
            throw new Error("Format file tidak didukung. Gunakan JPG, JPEG, PNG, atau WebP.");
        }

        if (response.status === 400 && errorData.error === "FILE_TOO_LARGE") {
            throw new Error("Ukuran file melebihi 5MB.");
        }

        throw new Error(errorData.error || "Terjadi kesalahan. Silakan coba lagi.");
    }

    return response.json();
}

export async function getMyProducts(accessToken: string): Promise<ProductListResponse> {
    const response = await fetch(`${API_BASE_URL}/products/my-products`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
    });

    if (!response.ok) {
        throw new Error("Gagal mengambil data produk");
    }

    return response.json();
}

export async function getAllProducts(): Promise<ProductListResponse> {
    const response = await fetch(`${API_BASE_URL}/products`, {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error("Gagal mengambil data produk");
    }

    return response.json();
}
