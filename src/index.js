import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// CSS + SASS (Order matters on import, SASS first)
import './sass/main.scss';
import './css/index.css';
import './css/navBar.css';
import './css/footer.css';
import './css/style.css';
// PAGES
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import ContactMe from "./pages/ContactMe/ContactMe";
import AI2048 from './pages/AI2048/AI2048';
import Education from './pages/Education/Education';
import GotGame from './pages/GotGame/GotGame';
import Error404 from './pages/NotFound/Error404';
import Programming from './pages/Programming/Programming';
import Gaming from './pages/Gaming/Gaming';
import CreativeArt from './pages/CreativeArt/CreativeArt';

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
				<Route path="/gotgame" element={<GotGame />}></Route>
				<Route path="/ai2048" element={<AI2048 />}></Route>
				<Route path="/education" element={<Education />}></Route>
				<Route path="/gaming" element={<Gaming />}></Route>
				<Route path="/creativeart" element={<CreativeArt />}></Route>
				<Route path="/programming" element={<Programming />}></Route>

				{/* NO PAGE EXISTS: Error 404 */}
				<Route path="*" element={<Error404 />}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);