import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SearchResults from "./pages/SearchResults";
import Header from "./pages/Header";
import { SearchProvider } from "./context/SearchContext";

const App = () => {
	return (
		<SearchProvider>
			<Router>
				<div className="flex flex-col items-center h-screen">
					<Header />
					<div className="flex flex-col items-center w-full h-[90%] overflow-y-auto bg-gradient">
						<Routes>
							{/* Redirect from root `/` to `/girman` */}
							<Route path="/" element={<Navigate to="/girman" replace />} />
							{/* Route definitions */}
							<Route path="/girman" element={<SearchPage />} />
							<Route path="/search" element={<SearchResults />} />
						</Routes>
					</div>
				</div>
			</Router>
		</SearchProvider>
	);
};

export default App;
