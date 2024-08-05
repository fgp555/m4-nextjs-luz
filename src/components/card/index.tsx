/* eslint-disable @next/next/no-img-element */

import React from "react";
import { IProduct } from "@/interface/IProduct";
import Link from "next/link";
import { Pathroutes } from "@/helpers/PathRoutes";
import AddToCartButton from "../cartbutton";

const Card: React.FC<IProduct> = ({
  id,
  categoryId,
  name,
  description,
  image,
  stock,
  price,
}) => {
  const product: IProduct = { id, categoryId, name, description, image, stock, price };

  return (
    <div className="w-full max-w-xs bg-black border border-gray-700 rounded-lg shadow-lg p-4 m-4 transform transition-transform duration-300 hover:scale-105">
      <Link href={`${Pathroutes.PRODUCTS}/${id}`}>
        <img
          className="h-40 w-full object-cover rounded-lg"
          src={image}
          alt={name}
        />
      </Link>
      <div className="mt-4">
        <Link href={`${Pathroutes.PRODUCTS}/${id}`}>
          <h5 className="text-lg font-bold text-gray-500">{name}</h5>
        </Link>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-semibold text-white">${price}</span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default Card;
