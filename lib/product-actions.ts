"use server";

import { cookies } from "next/headers";
import { createProduct, getMyProducts, CreateProductPayload, ProductResponse } from "./api";

export async function createProductAction(formData: FormData): Promise<{
    success: boolean;
    data?: ProductResponse;
    error?: string;
}> {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return { success: false, error: "Silakan login terlebih dahulu." };
    }

    try {
        const imageFile = formData.get("image") as File;

        if (!imageFile || imageFile.size === 0) {
            return { success: false, error: "Foto produk wajib diupload." };
        }

        const payload: CreateProductPayload = {
            name: formData.get("name") as string,
            description: formData.get("description") as string || undefined,
            category: formData.get("category") as "Kerajinan" | "Bahan Baku",
            price: parseInt(formData.get("price") as string),
            priceUnit: formData.get("priceUnit") as "g" | "kg",
            priceUnitAmount: parseInt(formData.get("priceUnitAmount") as string),
            stock: parseInt(formData.get("stock") as string),
            stockUnit: formData.get("stockUnit") as "g" | "kg",
            image: imageFile,
        };

        const response = await createProduct(accessToken, payload);
        return { success: true, data: response.data };
    } catch (error: any) {
        return { success: false, error: error.message || "Terjadi kesalahan." };
    }
}

export async function getMyProductsAction(): Promise<{
    success: boolean;
    data?: ProductResponse[];
    error?: string;
}> {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return { success: false, error: "Silakan login terlebih dahulu." };
    }

    try {
        const response = await getMyProducts(accessToken);
        return { success: true, data: response.data };
    } catch (error: any) {
        return { success: false, error: error.message || "Terjadi kesalahan." };
    }
}
