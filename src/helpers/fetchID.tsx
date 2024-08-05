"use client";
import { FetchProductsById } from "@/helpers/productFetch";
import { IProduct } from "@/interface/IProduct";
import { useEffect, useState, useCallback } from "react";

const useFetchProductById = (productID: string) => {
    const [product, setProduct] = useState<IProduct>();

    const fetchData = useCallback(async () => {
        const fetchedProduct = await FetchProductsById(productID);
        setProduct(fetchedProduct);
    }, [productID]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return product;
};

export default useFetchProductById;
