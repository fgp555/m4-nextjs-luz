import Card from "../card";
import { IProduct } from "@/interface/IProduct";

const Cards: React.FC<{ products: IProduct[] }> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Cards;
