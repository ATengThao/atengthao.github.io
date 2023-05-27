import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRoute, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import './css/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);