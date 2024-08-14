'use client'
export default function useLocalStorage(tokens:{
    accessToken:string, refreshToken:string
}, get:boolean){
    if(get){
        const refreshToken = localStorage.getItem("refreshToken")
        const accessToken = localStorage.getItem("token")

        return {
            accessToken,
            refreshToken
        }
    }
    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem("refreshToken", tokens.refreshToken)
}