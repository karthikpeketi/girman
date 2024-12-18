import React, { useContext } from "react";
import { SearchIcon } from "../assets/Icons";
import useWindowSize from "../hooks/useWindowSize";
import { SearchContext } from "../context/SearchContext";


const InputSearch = () => {
	const { width } = useWindowSize();

	const { searchTerm, setSearchTerm } = useContext(SearchContext);


	return (
		<div className="relative">
			<input
				type="text"
				placeholder="Search..."
				className="border text-[16px] md:text-[18px] px-10 py-2 w-[280px] md:w-[420px] lg:w-[800px] h-[50px] rounded-md border-gray-300 outline-none"
				value={searchTerm}
				onChange={(e) => {
					setSearchTerm(e.target.value)
				}}
			/>
			<div className="absolute inset-y-0 left-0 flex items-center pl-[16px] pointer-events-none">
				<SearchIcon size={width < 768 ? "15" : "16"} />
			</div>
		</div>
	);
};

export default InputSearch;
