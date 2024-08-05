"use client";
import React from "react";
import { Pathroutes } from "@/helpers/PathRoutes";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { IProduct } from "@/interface/IProduct";

interface AddToCartButtonProps {
  product: IProduct;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const router = useRouter();
  const { dataUser } = useAuth();

  const handleAddToCart = () => {
    if (!dataUser?.token) {
      alert("You must be logged in to add to cart");
      router.push(Pathroutes.LOGIN);
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExist = cart.some((item: IProduct) => item.id === product.id);

      if (productExist) {
        alert("Product already in cart");
        router.push(Pathroutes.CART);
      } else {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart");
        router.push(Pathroutes.CART)
      }
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-black text-white hover:bg-pink-0 hover:text-black focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
