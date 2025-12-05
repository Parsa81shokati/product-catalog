
import { Product } from "@/types/product";


export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return []; 
  }
}



export async function getProductById(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) {
      console.error("API error:", res.status);
      return null;
    }
    const text = await res.text();
    if (!text.trim()) {
      console.error("Empty API response");
      return null;
    }
    return JSON.parse(text);
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}
