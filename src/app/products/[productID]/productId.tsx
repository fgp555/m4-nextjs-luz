/* eslint-disable @next/next/no-img-element */

"use client";
import { FetchProductsById } from "@/helpers/productFetch";
import { IProduct } from "@/interface/IProduct";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Pathroutes } from "@/helpers/PathRoutes";
import { useAuth } from "@/context/AuthContext"; // Asegúrate de importar tu contexto de autenticación
import { toast, Toaster } from "sonner"; // Importa Sonner

const ProductID = ({
    params: { productID },
}: {
    params: { productID: string };
}) => {
    const router = useRouter();
    const { dataUser } = useAuth(); // Obtener datos de usuario del contexto de autenticación

    const [product, setProduct] = useState<IProduct>(); //detalle

    const fetchData = useCallback(async () => {
        const fetchedProduct = await FetchProductsById(productID);
        setProduct(fetchedProduct);
    }, [productID]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleAddToCart = (e: any) => {
        // Verificar si hay una sesión activa
        if (!dataUser?.token) {
            // Si no hay sesión, redirigir usuario al login
            toast.error("You must be logged in to add to cart", {
                position: "bottom-right",
                style: { backgroundColor: "red", color: "white" },
            });
            router.push(Pathroutes.LOGIN);
        } else {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            // Verificar si el producto ya existe en el carrito
            const productExist = cart.some((product: IProduct) => product.id === parseInt(e.target.id));
            if (productExist) {
                toast.error("Product already in cart", {
                    position: "bottom-right",
                    style: { backgroundColor: "red", color: "white" },
                });
                router.push(Pathroutes.CART);
            } else {
                cart.push(product); // Agregar al array
                localStorage.setItem("cart", JSON.stringify(cart)); // Agregar al localStorage
                toast.success("Product added to cart", {
                    position: "bottom-right",
                    style: { backgroundColor: "green", color: "white" },
                });
                router.push(Pathroutes.CART);
            }
        }
    };

    return (
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-black shadow-lg rounded-lg overflow-hidden my-10">
            <Toaster />
            <div className="lg:w-1/2 p-4 flex justify-center items-center">
                <img
                    src={product?.image}
                    alt={product?.name}
                    className="object-cover rounded-lg"
                />
            </div>
            <div className="lg:w-1/2 p-6">
                <div className="mb-4">
                    <h2 className="text-3xl font-semibold">{product?.name}</h2>
                    <p className="text-xl text-gray-600">${product?.price}</p>
                </div>
                <p className="mb-6 text-white">{product?.description}</p>
                
                <button
                    id={product?.id.toString()}
                    onClick={handleAddToCart}
                    className="w-full py-3 text-black bg-white border border-black rounded-md hover:bg-pink-0 hover:text-black"
                >
                    Add to Cart
                </button>
                <div className="mt-4">
                    <p className="text-gray-600 mt-2">Available: {product?.stock}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductID;
