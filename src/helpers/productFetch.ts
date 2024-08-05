import { IProduct } from "@/interface/IProduct";

const apiURL = process.env.NEXT_PUBLIC_API_URL


export const FetchProducts = async () => {
    try {
        const res = await fetch(`${apiURL}/products`, {
            method: "GET",
            next: {revalidate: 3600} //opcion de revalidacion 
        
        });
        const products: IProduct[] = await res.json();
        return products;

    } catch (error: any) {
        throw new Error(error)
    }
  };

export const FetchProductsById = async (id: string) => {
    try{
        const products = await FetchProducts()
        const product = products.find((product) => product?.id?.toString() === id)
        if(!product){
            throw new Error("Product not found")
        } 
        return product
    }catch (error:any){
        throw new Error(error)
    }
}

export const FetchProductsByCategory = async (categoryId: string) => {
    try {
        const products = await FetchProducts();
        const filteredProducts = products.filter((product) => product?.categoryId?.toString() === categoryId);
        if (filteredProducts.length === 0) {
            throw new Error("Product not found");
        }
        return filteredProducts;
    } catch (error: any) {
        throw new Error(error);
    }
};

// export const FetchCategories = async () => {
//     try {
//         const products = await FetchProducts();
//         const categories = products.reduce((acc: any, product: any) => {
//             if (!acc.some((cat: any) => cat.id === product.categoryId)) {
//                 acc.push({ id: product.categoryId, name: product.categoryName });
//             }
//             return acc;
//         }, []);
//         return categories;
//     } catch (error: any) {
//         throw new Error(error);
//     }
// };