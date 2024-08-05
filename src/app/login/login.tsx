import { useAuth } from "@/context/AuthContext";
import { LoginUser } from "@/helpers/auth.helper";
import { Pathroutes } from "@/helpers/PathRoutes";
import { validateLoginForm } from "@/helpers/validationLogin";

import { ILogin, ILoginError } from "@/interface/IAuth";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react"
import { FaUser, FaUnlockAlt, FaEye, FaEyeSlash } from "react-icons/fa"; // Importar íconos de ojo
import { toast, Toaster } from "sonner"; // Importa Sonner


const Login: React.FC = () => {

    const router = useRouter()
    const {dataUser, setDataUser} = useAuth()


    const [userData, setUserData] = useState<ILogin>({
        email: "",
        password: "",
    });

    const [errorUser, setErrorUser] = useState<ILoginError>({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

    // Gestiona el cambio en los inputs
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await LoginUser(userData);
            setDataUser(res)
            document.cookie = `userSession=${JSON.stringify(res)}; path=/`;
            toast.success("Login successfully", {
                position: "bottom-right",
                style: { backgroundColor: "green", color: "white" },
            });
            router.push(Pathroutes.DASHBOARD)
        } catch (error: any) {
            toast.error("Login failed", {
                position: "bottom-right",
                style: { backgroundColor: "red", color: "white" },
            });
            console.log
        }
    };

    // Validación de formulario y manejo de errores
    useEffect(() => {
        const errors = validateLoginForm(userData);
        setErrorUser(errors);
    }, [userData]);

    // Función para alternar la visibilidad de la contraseña
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <Toaster />
            <div className="bg-grey-0 p-10 rounded-xl shadow-lg w-80">
                <h2 className="text-center text-2xl font-bold mb-6">User Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={userData.email}
                            required
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-2 rounded-full text-black bg-gray-50 focus:bg-white focus:outline-none ${errorUser.email ? 'border-red-500' : ''}`}
                        />
                        {errorUser.email && <p className="absolute left-10 bottom-0 text-sm text-red-500">{errorUser.email}</p>}
                    </div>
                    <div className="relative">
                        <FaUnlockAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"} // Cambia entre text y password
                            name="password"
                            placeholder="Password"
                            value={userData.password}
                            required
                            onChange={handleChange}
                            className={`text-black w-full pl-10 pr-4 py-2 rounded-full bg-gray-50 focus:bg-white focus:outline-none ${errorUser.password ? 'border-red-500' : ''}`}
                        />
                        {errorUser.password && <p className="absolute left-10 bottom-0 text-sm text-red-500">{errorUser.password}</p>}
                        {/* Icono de ojo para mostrar/ocultar contraseña */}
                        {showPassword ? (
                            <FaEyeSlash onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-black" />
                        ) : (
                            <FaEye onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-black" />
                        )}
                    </div>
                    <button className="w-full py-2 rounded-full bg-white text-black font-bold hover:bg-black hover:text-white transform hover:scale-105 transition duration-300">Login</button>
                </form>
                <h3 className="text-center mt-4">Don&apos;t have an account? <Link className="font-semibold hover:text-black hover:border-black border-b-2" href={Pathroutes.REGISTER}>Create one!</Link></h3>
            </div>
        </div>
    );
}

export default Login;
