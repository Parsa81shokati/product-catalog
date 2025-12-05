import BackButton from "@/components/BackButton";
import FavoriteButton from "@/components/FavoriteButton";
import { getProductById } from "@/services/products";



interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
 
  const resolvedParams = await params; 
  const id = resolvedParams.id ?? params.id; 

  const product = await getProductById(id);

  if (!product) {
    return (
      <p className="text-center mt-20 text-red-600">
        Product not found.
      </p>
    );
  }
    return (
      <div className="max-w-5xl mx-auto mt-8 md:mt-15 p-6">
         <BackButton />
        <div
          className="
          bg-white 
          rounded-2xl 
          shadow-md 
          p-6 
          flex flex-col md:flex-row 
          gap-10
        "
        >
          <div className="flex justify-center items-center">
            <div
              className="
              w-44 h-44
              md:w-72 md:h-72 
              bg-gray-100 
              rounded-xl 
              flex justify-center items-center 
              overflow-hidden
            "
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="flex-1 space-y-3 md:space-y-6">
            <h1 className="text-lg md:text-3xl font-bold text-gray-800 leading-tight">
              {product.title}
            </h1>

            <p className="text-gray-700 leading-relaxed text-xs md:text-[15px]">
              {product.description}
            </p>

            <div className="flex justify-around items-center gap-4">
              <span className="text-lg md:text-3xl font-semibold text-gray-600">
                ${product.price}
              </span>

              <span className="bg-gray-100 px-3 py-1 rounded-lg text-gray-700 text-xs md:text-sm">
                {product.category}
              </span>
              <span className=" px-3 py-1 rounded-lg text-gray-700 text-xs md:text-sm">
               <FavoriteButton product={product} size={30} />
              </span>
            </div>
             
          </div>
        </div>
      </div>
    );
 
}
