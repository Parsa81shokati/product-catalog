"use client";

import { useFavorites } from "@/context/FavoritesContext";
import { MdFavoriteBorder } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { shortText } from "@/helper/helper";
import { Product } from "@/types/product";


export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="flex flex-col items-center justify-center p-6 my-10 md:my-20">
      <h1 className="text-2xl font-bold mb-6">Your Favorites </h1>
      {favorites.length === 0 && (
        <p className="text-gray-500 text-center p-6 border rounded-2xl mt-5">
          Your favorites list is empty.
        </p>
      )}

      <div>
        {favorites.map((product) => (
          <FavoriteCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}


type Props = {
  product: Product;
};

function FavoriteCard({ product }: Props) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { image, title, category, price, rating, id } = product;
  return (
    <div
      className="
        flex items-center gap-4 
        w-full md:min-w-[650px] 
        p-4 
        border rounded-xl 
        shadow-sm 
        hover:shadow-md 
        transition 
        bg-white
        mt-5
      "
    >
      <div className="w-24 h-24 overflow-hidden rounded-lg flex items-center justify-center bg-gray-100">
        <img src={image} className="w-auto h-auto object-cover" alt={title} />
      </div>

      <div className="flex flex-col flex-1">
        <h1 className="text-lg font-semibold text-gray-800">
          {shortText(title)}
        </h1>
        <span className="text-gray-600 text-sm mt-1">${price}</span>
      </div>
      <button
        onClick={(e) => {
          toggleFavorite(product);
        }}
        className="p-2 rounded-full hover:bg-gray-100 transition"
      >
        {isFavorite(id) ? (
          <FaHeart className="w-6 h-6 " />
        ) : (
          <MdFavoriteBorder className="w-6 h-6 text-gray-600" />
        )}
      </button>
    </div>
  );
}

export { FavoriteCard };
