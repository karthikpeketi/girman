import React, { useEffect, useContext } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import users from "../data/users.json";
import Card from "../components/Card";
import { Files } from "../assets/Icons";
import { SearchContext } from "../context/SearchContext";

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
			setFilteredUsers(users);
		}
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
	}, [location]);

	return (
		<>
			{filteredUsers.length > 0 ? (
				<div className="h-[100%] w-[100%] flex justify-center items-center flex-wrap gap-8 pt-8">
					{filteredUsers.map((user) => (
						<Card
							key={user.id}
							user={user}
							className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
						/>
					))}
				</div>
			) : (
				<div className="h-[100%] w-[100%] flex flex-col justify-center items-center">
					<Files />
					<p className="text-semibold text-[20px] text-[#999999] pr-4">No results found.</p>
				</div>
			)}
		</>
	);
};

export default SearchResults;
