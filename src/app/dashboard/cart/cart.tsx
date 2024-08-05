/* eslint-disable @next/next/no-img-element */

"use client";
import { useAuth } from "@/context/AuthContext";
import { createOrder } from "@/helpers/orders.helper";
import { Pathroutes } from "@/helpers/PathRoutes";
import { IProduct } from "@/interface/IProduct";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from 'sonner'; // Importa toast

const Cart: React.FC = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0); // Precio total
  const { dataUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (storedCart) {
      let totalCart = 0;
      storedCart.forEach((product: IProduct) => {
        totalCart += product.price;
      });
      setTotal(totalCart);
      setCart(storedCart);
    }
  }, []);

  const handleCheckOut = async () => {
    const idProducts = cart.map((product) => product.id);
    try {
      await createOrder(idProducts, dataUser?.token!); // Petición al backend
      toast.success("Buy successful"); // Muestra un mensaje de éxito
      setCart([]);
      setTotal(0);
      localStorage.removeItem("cart");
      router.push(Pathroutes.DASHBOARD);
    } catch (error) {
      toast.error("An error occurred while processing your order."); // Muestra un mensaje de error
    }
  };

  return (
    <div className="min-h-screen mx-4 bg-black py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h1>
        <div className="space-y-6">
          {cart.map((product) => (
            <div key={product.id} className="flex items-center space-x-4 border-b pb-4">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
              <div className="flex-grow">
                <h2 className="text-lg font-semibold text-gray-700">{product.name}</h2>
                <p className="text-gray-800 font-semibold">${product.price?.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Total: ${total.toFixed(2)}</h2>
          <button
            className="w-full py-3 m-2 text-white bg-black border rounded-md hover:bg-pink-0 hover:text-black"
            onClick={handleCheckOut}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
