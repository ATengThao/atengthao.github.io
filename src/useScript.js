import { useEffect } from "react";

function useScript(url) {
	useEffect(() => {
		const head = document.querySelector("head");
		const script = document.createElement("script");

		script.src = url;
		script.type = "application/javascript";
		head.appendChild(script);
		return () => {
			head.removeChild(script);
		}
	}, 
	[url]);
}
export default useScript;