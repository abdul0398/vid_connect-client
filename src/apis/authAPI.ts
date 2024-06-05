'use server'
import { SignUpType } from "@/lib/types";
import { API } from "./utils";




export async function signUp(data:SignUpType){
    try {
        const res = await API.post('/auth/signup', data, {
            headers:{
                "Content-Type":"application/json"
            }
        })
        return {error:null, data: res.data}
    } catch (error: any) {
        if(error.response){
            return {error: error.response.data, data:null}
        }else{
            return {error:"Something went wrong", data:null}
        }
        
    }
}