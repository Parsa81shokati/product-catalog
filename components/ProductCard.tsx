
import Link from "next/link";
import { shortText } from "@/helper/helper";
import { Product } from "@/types/product";
import FavoriteButton from "./FavoriteButton";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {


  const { image, title, category, price, rating, id } = product;

  return (
    <Link
      href={`/product/${id}`}
      className=" w-50 md:w-65 bg-white rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="flex justify-end mb-2">
        <span className="text-[10px] md:text-xs bg-gray-200 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="w-full h-30 md:h-40 flex items-center justify-center mb-4">
        <img src={image} alt={title} className="h-full object-contain" />
      </div>

      <h3 className="text-sm md:text-lg font-semibold">{shortText(title)}</h3>

      <div className="flex items-center text-xs md:text-sm text-gray-600 mt-1">
        <span className="text-yellow-500 text-lg leading-none">★</span>
        <span className="ml-1">{rating.rate}</span>
        <span className="ml-1">({rating.count} Reviews)</span>
      </div>

      <div className="flex justify-between gap-2 mt-3 md:mt-8">
        <div className=" flex items-center justify-between">
          <span className="text-sm md:text-lg font-bold">{price}$</span>
        </div>
        <FavoriteButton product={product} size={20} />
      </div>
    </Link>
  );
}
