"use client";

import { IProduct } from "@/interface/IProduct";
import { useEffect, useState, useCallback } from "react";
import { FetchProductsByCategory } from "./productFetch";

const useFetchProductByCategory = (productCategoryID: string) => {
    const [productC, setProductC] = useState<IProduct[]>([]);

    const fetchData = useCallback(async () => {
        const fetchedProductByCategory = await FetchProductsByCategory(productCategoryID);
        setProductC(fetchedProductByCategory);
    }, [productCategoryID]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return productC;
}

export default useFetchProductByCategory;
