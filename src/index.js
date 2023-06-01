import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// CSS
import './css/index.css';
import './css/navBar.css';
import './css/style.css';
// PAGES
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import ContactMe from "./pages/ContactMe/ContactMe";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				{/* DEFAULT PAGE: Home */}
				<Route index element={<Home />}></Route>
				{/* Other Pages */}
				<Route path="/about" element={<AboutMe />}></Route>
				<Route path="/contact" element={<ContactMe />}></Route>

				{/* NO PAGE EXISTS */}
				<Route path="*" element=""></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);