import React, { useContext, useState } from "react";
import { AppLogoWithText, Menu } from "../assets/Icons";
import useWindowSize from "../hooks/useWindowSize";
import InputSearch from "../components/InputSearch"; 
import { useNavigate, useLocation } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { setSearchTerm } = useContext(SearchContext);

	const { width } = useWindowSize();
	const navigate = useNavigate();
	const location = useLocation();

	const isInSearchResultsPage = location.pathname === "/search";

	const handleNavigation = (path) => {
		if (path === "/") {
		  setSearchTerm("");
		}
		setIsMenuOpen(false);
		navigate(path);
	  };

	const handleLogoClick = () => {
		setSearchTerm("");
		navigate("/");
	};


	return (
		<div className="h-[10%] flex justify-between items-center w-full px-10 md:px-20 py-8 border-b-2 shadow-bottom sticky top-0">
			{/* App logo */}
			<button onClick={handleLogoClick}>
				<AppLogoWithText size={width < 768 ? "135" : "180"} />
			</button>

			{/* Navigation for desktop */}
			{width >= 768 && !isInSearchResultsPage && (
				<nav className="flex gap-6">
					<a
						href="#"
						onClick={() => handleNavigation("/")}
						className="select-none text-[#3063E6] border-b-2 border-blue-500"
					>
						SEARCH
					</a>
					<a
						href="https://girmantech.com"
						target="_blank"
						rel="noopener noreferrer"
						className="select-none hover:text-[#3063E6] border-b-2 border-transparent hover:border-blue-500 font-normal"
					>
						WEBSITE
					</a>
					<a
						href="https://linkedin.com/company/girmantech"
						target="_blank"
						rel="noopener noreferrer"
						className="select-none hover:text-[#3063E6] border-b-2 border-transparent hover:border-blue-500 font-normal"
					>
						LINKEDIN
					</a>
					<a
						href="mailto:contact@girmantech.com"
						className="select-none hover:text-[#3063E6] border-b-2 border-transparent hover:border-blue-500 font-normal"
					>
						CONTACT
					</a>
				</nav>
			)}

			{width >= 768 && isInSearchResultsPage && <InputSearch page={"SEARCH_RESULTS"}/>}

			{/* Mobile menu */}
			{width < 768 && (
				<>
					<button
						className="block"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle Menu"
					>
						<Menu size={28} />
					</button>

					{/* Dropdown for mobile */}
					{isMenuOpen && (
						<div className="absolute top-14 right-8 bg-white shadow-lg rounded-lg p-4 z-50 flex flex-col gap-3 text-base">
							<a
								href="#"
								onClick={() => handleNavigation("/")}
								className="text-[#3063E6] hover:text-blue-700"
							>
								SEARCH
							</a>
							<a
								href="https://girmantech.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-[#3063E6]"
							>
								WEBSITE
							</a>
							<a
								href="https://linkedin.com/company/girmantech"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-[#3063E6]"
							>
								LINKEDIN
							</a>
							<a
								href="mailto:contact@girmantech.com"
								className="hover:text-[#3063E6]"
							>
								CONTACT
							</a>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Header;
