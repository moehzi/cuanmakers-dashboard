import React from "react";
import searchImg from "/assets/icons/SEARCH.svg";

function SearchBox() {
  return (
    <div className="flex-1 bg-secondary flex rounded-[12px]">
      <button
        type="submit"
        class="flex py-4 items-center justify-center pr-2 pl-4"
      >
        <img src={searchImg} alt="" />
      </button>
      <input
        className="w-full text-white border-0 rounded-[12px] bg-secondary focus:shadow focus:outline-none"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBox;
