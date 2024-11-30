import React, { useContext } from "react";
import { SearchIcon } from "../assets/Icons";
import useWindowSize from "../hooks/useWindowSize";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";


const InputSearch = ({page = ""}) => {
	const { width } = useWindowSize();
	const navigate = useNavigate();

	const { searchTerm, setSearchTerm } = useContext(SearchContext);

	const handleOnEnterToSearch = (e) => {
		e.preventDefault();
		if (searchTerm.trim()) {
			navigate(`/search?q=${searchTerm}`);
		}
	};

	return (
		<div className="relative">
			<input
				type="text"
				placeholder="Search..."
				className="border px-4 py-2 w-[280px] md:w-[420px] pl-8 md:pl-10 rounded-md border-gray-300 outline-none"
				value={searchTerm}
				onChange={(e) => {
					// if(e.target.value === "" && page === "SEARCH_RESULTS") {
					// 	navigate("/search?q=");
					// 	setFilteredUsers(users)
					// }
					setSearchTerm(e.target.value)
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleOnEnterToSearch(e);
					}
				}}
			/>
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<SearchIcon size={width < 768 ? "15" : "18"} />
			</div>
		</div>
	);
};

export default InputSearch;
