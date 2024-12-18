import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredUsers, setFilteredUsers] = useState([]);

	return (
		<SearchContext.Provider value={{ searchTerm, setSearchTerm, filteredUsers, setFilteredUsers }}>
			{children}
		</SearchContext.Provider>
	);
};
