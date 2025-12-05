import { IoBagOutline, IoChevronDownOutline } from "react-icons/io5";


interface CategoryNavbarProps {
  value: string;
  onChange: (val: string) => void;
}

const categories = [
  { id: 1, type: "All" },
  { id: 2, type: "Electronics" },
  { id: 3, type: "Jewelery" },
  { id: 4, type: "Men's clothing" },
  { id: 5, type: "Women's clothing" },
];

export default function Sidebar({ value, onChange }: CategoryNavbarProps) {
  
  return (
    <div className="w-40 md:w-64 p-4">
      <div className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-xl cursor-pointer hover:bg-gray-200 transition">
        <div className="flex items-center gap-0.5 md:gap-2">
          <IoBagOutline className="w-5 h-5 text-gray-700" />
          <span className="text-sm md:text-base font-medium">Category</span>
        </div>
      </div>

      <div className="mt-3 md:mt-4 ml-1 md:ml-3 border-l border-gray-300 pl-2 md:pl-4 space-y-3 md:space-y-4">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => onChange(category.type)}
            className={`flex items-center gap-2 cursor-pointer text-sm md:text-base transition ${ category.type === value
                    ? "font-semibold scale-105"
                    : "text-gray-600 hover:text-black"}`}
          >
            <span>{category.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
