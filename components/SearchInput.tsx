import { IoIosSearch } from "react-icons/io";

interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="flex items-center justify-around w-full py-5 md:py-10 md:px-4">
      <div className="flex items-center w-full max-w-[300px] md:max-w-[500px] bg-white shadow-sm border border-gray-200 rounded-full px-2 md:px-4 py-1.5  ">
        <IoIosSearch className="w-6 h-6 text-gray-500" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value.trim())}
          placeholder="Search here"
          className="ml-1 md:ml-2 flex-1 outline-none text-xs md:text-base text-gray-700 placeholder-gray-400"
        />

    
      </div>
    </div>
  );
}
