function() {
	//first target the first image in HTML source and give it the class 'transition'
	document.getElementById("container").getElementsByTagName("img")[0].className = "transition";

	window.setInterval(kenBurns, 4000);
	//runs kenBurns function every 4 secs

	var images = document.getElementById("container").getElementsByTagName("img"),
		numberOfImages = images.length,
		i = 1;

	function kenBurns() {
		if(i==numberOfImages) { i = 0; }
		images[i].className = "transition";

		if(i===0){ images[numberOfImages-2].className = ""; }
		if(i===1){ images[numberOfImages-1].className = ""; }
		if(i>1){ images[i-2].className = "";}
		i++;
	}
}