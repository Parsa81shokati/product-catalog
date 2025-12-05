"use client";

import { useEffect, useState, useMemo } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import SearchInput from "./SearchInput";
import Sidebar from "./Sidebar";

interface FilterableProductListProps {
  products: Product[];
}

export default function ProductGrid({ products }: FilterableProductListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load category from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("selectedCategory");
    if (saved) setSelectedCategory(saved);
  }, []);

  // Save category
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    localStorage.setItem("selectedCategory", cat);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All"
          ? true
          : product.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="mt-8 md:mt-12">
      
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
      <div className="flex flex-row justify-around">
        
        <div className="sticky top-20 self-start">
          
          <Sidebar
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
