"use client";

import { Product } from "@/types/product";
import { useFavorites } from "@/context/FavoritesContext";
import { FaHeart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

interface FavoriteButtonProps {
  product: Product;
  size?: number; 
}

export default function FavoriteButton({ product, size = 24 }: FavoriteButtonProps) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(product.id);

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        toggleFavorite(product);
      }}
      className={`p-2 rounded-full hover:bg-gray-100 transition ${
        favorite ? "text-black" : "text-gray-600"
      }`}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
    >
      {favorite ? <FaHeart size={size} /> : <MdFavoriteBorder size={size} />}
    </button>
  );
}
