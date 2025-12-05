import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/services/products";



export default async function Home() {
    const products = await getProducts();

    return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}
