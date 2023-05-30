import { useEffect } from "react";

function useScript({url}) {
	useEffect(() => {
		const head = document.querySelector("head");
		const script = document.createElement("script");

		script.src = url;
		script.type = "application/javascript";
		console.log("useScript.js running!!");
		head.appendChild(script);
		return () => {
			head.removeChild(script);
			console.log("head is Removing child!!");
		}
	}, 
	[url]);
}
export default useScript;