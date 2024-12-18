import React, { useContext } from "react";
import { SearchIcon } from "../assets/Icons";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

const InputSearch = () => {
	const navigate = useNavigate();
	const { searchTerm, setSearchTerm } = useContext(SearchContext);

	const handleOnEnterToSearch = (e) => {
		e.preventDefault();
		if (searchTerm.trim()) {
			navigate(`/search?q=${searchTerm}`);
		}
	};

	return (
		<div className="bg-white flex items-center border text-[16px] md:text-[18px] pr-5 py-2 w-[280px] md:w-[420px] lg:w-[800px] min-h-[50px] max-h-[50px] rounded-md border-gray-300 outline-none">
			<div className="flex items-center pl-[16px] pr-[16px] pointer-events-none">
				<SearchIcon size={20} />
			</div>
			<input
				type="text"
				placeholder="Search..."
				className="flex-1 text-black outline-none"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleOnEnterToSearch(e);
					}
				}}
				aria-label="Search input"
			/>
		</div>
	);
};

export default InputSearch;
