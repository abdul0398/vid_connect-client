'use server';
import { SigninType, SignUpType } from "@/lib/types";
import { fnRes } from "@/types/general";
import { AUTH_API } from "@/utils/axios";
import { resWrapper } from "@/utils/wrappers";

export async function signUp(data: SignUpType): Promise<fnRes> {
    try {
        const res = await AUTH_API.post('/signup', data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return resWrapper(res.data.tokens);
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "Something went wrong";
        return resWrapper(null, errorMessage);
    }
}
export async function signIn(data: SigninType): Promise<fnRes> {
    try {
        const res = await AUTH_API.post('/signin', data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return resWrapper(res.data.tokens, res.data.message);
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "Something Went Wrong";
        return resWrapper(null, errorMessage);
    }
}