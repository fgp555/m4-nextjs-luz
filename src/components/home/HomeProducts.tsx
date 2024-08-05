"use client"

import React, { useEffect, useState } from "react";
import Cards from "../cards";
import { IProduct } from "@/interface/IProduct";
import { FetchProducts } from "@/helpers/productFetch";
import Link from "next/link";
import { Pathroutes } from "@/helpers/PathRoutes";

const HomeProducts: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await FetchProducts();
      setProducts(fetchedProducts.slice(0, 3));
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center my-4 mb-10">
      <h2 className="text-2xl font-semibold mb-4">Some Products</h2>
      <section className="w-full flex justify-center">
        <Cards products={products} />
      </section>
      <div className="mt-4">
        <Link href={Pathroutes.PRODUCTS} className="px-10 py-3 text-black font-bold bg-pink-0 rounded-full hover:bg-black hover:text-white">
        Explore More
          
        </Link>
      </div>
    </div>
  );
};

export default HomeProducts;
