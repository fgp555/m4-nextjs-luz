"use client"

import { useEffect, useState, useCallback } from "react";
import { IProduct } from "@/interface/IProduct";
import { FetchProductsByCategory } from "@/helpers/productFetch";
import Card from "@/components/card";

const CategoryID = ({
    params: { categoryID },
}: {
    params: { categoryID: string }
}) => {
    const [productC, setProductC] = useState<IProduct[]>([]);

    const fetchData = useCallback(async () => {
        const fetchedProductByCategory = await FetchProductsByCategory(categoryID);
        setProductC(fetchedProductByCategory);
    }, [categoryID]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Category: {categoryID}</h1>
            <div className="flex flex-wrap justify-center">
                {productC.map((product) => (
                    <Card key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}

export default CategoryID;
