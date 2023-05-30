import { useEffect } from "react";

function useScript({url}) {
	useEffect(() => {
		const head = document.querySelector("head");
		const script = document.createElement("script");

		script.src = url;
		// Needed to avoid "<" error during runtime
		script.type = "text/babel";
		// script.type = "application/javascript";
		head.appendChild(script);
		return () => {
			head.removeChild(script);
		}
	}, 
	[url]);
}
export default useScript;