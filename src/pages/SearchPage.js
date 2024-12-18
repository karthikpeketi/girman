import React from "react";
import { AppLogo } from "../assets/Icons";
import useWindowSize from "../hooks/useWindowSize";
import InputSearch from "../components/InputSearch";

const SearchPage = () => {
	const { width } = useWindowSize();

	return (
		<>
			<div className="flex justify-center items-center mt-20 px-[40px]">
				<AppLogo size={width < 768 ? "75" : "120"} />
				<h1 className="select-none text-5xl md:text-[75px] font-bold">
					Girman
				</h1>
			</div>

			<InputSearch/>
		</>
	);
};

export default SearchPage;
