import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="flex items-center secondary-bg w-full ps-2 rounded-sm">
      <CiSearch size={23} color="gray" />
      <input
        type="text"
        className="w-full bg-inherit p-2 outline-none rounded-sm"
        placeholder="search..."
      />
    </div>
  );
};

export default SearchBar;
