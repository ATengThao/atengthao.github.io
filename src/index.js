import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './css/index.css';

import Home from "./pages/Home";
import NavBar from './NavBar';

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