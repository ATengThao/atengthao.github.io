import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// CSS
import './css/index.css';
import './css/navBar.css';
import './css/style.css';
// PAGES
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				{/* DEFAULT PAGE */}
				<Route index element={<Home />}></Route>
				{/* NO PAGE EXISTS */}
				<Route path="*" element=""></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);