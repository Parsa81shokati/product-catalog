import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/services/products";
import { Product } from "@/types/product";



export default async function Home() {
   let products: Product[] = []; 

  try {
    products = await getProducts();
  } catch (err) {
    console.error("Failed to fetch products:", err);
  }

    return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}
