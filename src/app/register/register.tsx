"use client"
import { RegisterUser } from "@/helpers/auth.helper";
import { Pathroutes } from "@/helpers/PathRoutes";
import { validateRegisterForm } from "@/helpers/validationRegister";

import { IRegister, IRegisterError } from "@/interface/IAuth";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { toast, Toaster } from "sonner"; // Importa Sonner



const Register: React.FC = () => {
    const router = useRouter()

    const [userData, setUserData] = useState<IRegister>({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: ""
    });

    const [errorUser, setErrorUser] = useState<IRegisterError>({
        name: "",
        email: "",
        password: "",
        address: "",
        phone: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await RegisterUser(userData);
            toast.success("Register successfully", {
                position: "bottom-right",
                style: { backgroundColor: "green", color: "white" }
            });
            router.push(Pathroutes.LOGIN)
        } catch (error: any) {
            toast.error("Registration failed", {
                position: "bottom-right",
                style: { backgroundColor: "red", color: "white" }
            });
        }
    };

    useEffect(() => {
        const errors = validateRegisterForm(userData);
        setErrorUser(errors);
    }, [userData]);

    return  (
        <div className="flex items-center my-20 justify-center h-screen bg-black">
            <Toaster />
            <div className="bg-grey-0 p-10 rounded-xl shadow-lg w-80">
            <h2 className="text-center text-2xl font-bold mb-6">Create Account</h2>
            <form  onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <input id="name" type="text" name="name" placeholder="Name" value={userData.name} required onChange={handleChange} className="custom-inputs"/>
                    {errorUser.name && <p className="text-red-500">{errorUser.name}</p>}

                </div>
                <div>
                    <input id="emai" type="email" name="email" placeholder="Email" value={userData.email} required onChange={handleChange}className="custom-inputs"/>
                    {errorUser.email && <p className="text-red-500">{errorUser.email}</p>}

                </div>
                <div>
                    <input id="password" type="password" name="password" placeholder="Password" value={userData.password} required onChange={handleChange}className="custom-inputs"/>
                    {errorUser.password && <p className="text-red-500">{errorUser.password}</p>}

                </div>
                <div>
                    <input id="adress" type="text" name="address" placeholder="Address" value={userData.address} required onChange={handleChange}className="custom-inputs" />
                    {errorUser.address && <p className="text-red-500">{errorUser.address}</p>}

                </div>
                <div>
                    <input id="phone" type="text" name="phone" placeholder="Phone" value={userData.phone} required onChange={handleChange}className="custom-inputs" />
                    {errorUser.phone && <p className="text-red-500">{errorUser.phone}</p>}

                </div>
                <button className="w-full py-2 rounded-full bg-white text-black font-bold hover:bg-black hover:text-white transform hover:scale-105 transition duration-300">Register</button>
            </form>
            </div>
        </div>
    );
}

export default Register