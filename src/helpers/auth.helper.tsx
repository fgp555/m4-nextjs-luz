import { ILogin, IRegister } from "@/interface/IAuth"

const apiURL = process.env.NEXT_PUBLIC_API_URL

export const RegisterUser = async (userData: IRegister) => {
    try {
        const res = await fetch(`${apiURL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData), 
        })
        if(res.ok){
            return res.json()
        }else {
            throw new Error ("User creation error")
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

export const LoginUser = async (userData: ILogin) => {
    try {
        const res = await fetch(`${apiURL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData), 
        })
        if(res.ok){
            return res.json()
        }else {
            throw new Error ("Error logging in")
        }
    } catch (error: any) {
        throw new Error(error)
    }
}