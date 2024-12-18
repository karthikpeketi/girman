import React, { useEffect, useContext } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import users from "../data/users.json";
import Card from "../components/Card";
import { Files } from "../assets/Icons";
import { SearchContext } from "../context/SearchContext";

import InputSearch from "../components/InputSearch";

const SearchResults = () => {
	const [searchParams] = useSearchParams();
	const { filteredUsers, setFilteredUsers, setSearchTerm } =
		useContext(SearchContext);
	const location = useLocation();

	const query = searchParams.get("q");

	useEffect(() => {
		if (query) {
			const results = users.filter((user) =>
				`${user.firstName} ${user.lastName}`
					.toLowerCase()
					.includes(query.toLowerCase())
			);
			setFilteredUsers(results);
		} else {
			setFilteredUsers([]);
		}
		// eslint-disable-next-line
	}, [query]);

	useEffect(() => {
		const handleBackNavigation = () => {
			const queryParams = new URLSearchParams(location.search);
			const query = queryParams.get("q");
			if (query) {
				setSearchTerm(query);
			}
		};

		window.addEventListener("popstate", handleBackNavigation);

		return () => {
			window.removeEventListener("popstate", handleBackNavigation);
		};
		// eslint-disable-next-line
	}, [location]);
	
	const isInSearchResultsPage = location.pathname === "/search";

	return (
		<div className="flex flex-col items-center" >
		    {isInSearchResultsPage && <InputSearch />}
			{filteredUsers.length > 0 ? (
				<div className="h-[100%] w-[100%] flex justify-center items-center flex-wrap gap-[22px] pt-[40px] px-4">
					{filteredUsers.map((user) => (
						<Card
							key={user.id}
							user={user}
							className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
						/>
					))}
				</div>
			) : (
				<div className="h-[100%] w-[100%] flex flex-col justify-center items-center mt-[80px]">
					<Files />
					<p className="text-semibold text-[20px] text-[#999999] pr-4">No results found.</p>
				</div>
			)}
		</div>
	);
};

export default SearchResults;
