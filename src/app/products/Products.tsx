import { FetchProducts } from "@/helpers/productFetch";
import Cards from "@/components/cards";

const Products = async () => {
  const products = await FetchProducts();

  return (
    <div className="flex flex-col items-center my-4">
      <h2 className="text-2xl font-semibold mb-4">Explore All Products</h2>
      <section className="w-full flex justify-center">
        <Cards products={products} />
      </section>
    </div>
  );
};

export default Products;
