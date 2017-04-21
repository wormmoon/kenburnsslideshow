function() {
	//first target the first image in HTML source and give it the class 'transition'
	document.getElementById("container").getElementsByTagName("img")[0].className = "transition";

	window.setInterval(kenBurns, 4000);
	//runs kenBurns function every 4 secs

	
}