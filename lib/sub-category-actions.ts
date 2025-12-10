"use server";

import { cookies } from "next/headers";
import {
    getAllSubCategories,
    getMySubCategories,
    createSubCategory,
    updateSubCategory,
    SubCategoryResponse
} from "./api";

export async function getAllSubCategoriesAction(): Promise<{
    success: boolean;
    data?: SubCategoryResponse[];
    error?: string;
}> {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    try {
        const response = await getAllSubCategories(accessToken);
        return { success: true, data: response.data };
    } catch (error: any) {
        return { success: false, error: error.message || "Terjadi kesalahan." };
    }
}

export async function getMySubCategoriesAction(): Promise<{
    success: boolean;
    data?: SubCategoryResponse[];
    error?: string;
}> {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return { success: false, error: "Silakan login terlebih dahulu." };
    }

    try {
        const response = await getMySubCategories(accessToken);
        return { success: true, data: response.data };
    } catch (error: any) {
        return { success: false, error: error.message || "Terjadi kesalahan." };
    }
}

export async function createSubCategoryAction(name: string): Promise<{
    success: boolean;
    data?: SubCategoryResponse;
    error?: string;
}> {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return { success: false, error: "Silakan login terlebih dahulu." };
    }

    try {
        const response = await createSubCategory(accessToken, name);
        return { success: true, data: response.data };
    } catch (error: any) {
        return { success: false, error: error.message || "Terjadi kesalahan." };
    }
}

export async function updateSubCategoryAction(id: string, name: string): Promise<{
    success: boolean;
    data?: SubCategoryResponse;
    error?: string;
}> {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return { success: false, error: "Silakan login terlebih dahulu." };
    }

    try {
        const response = await updateSubCategory(accessToken, id, name);
        return { success: true, data: response.data };
    } catch (error: any) {
        return { success: false, error: error.message || "Terjadi kesalahan." };
    }
}
