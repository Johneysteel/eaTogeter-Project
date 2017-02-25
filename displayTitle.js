function displayTitle(){
	var pagename = window.location.pathname.split("/").pop().replace('.html','').replace(/_/g,' ');
	document.getElementById("missing_content").innerHTML = pagename + " page coming soon.";
}

displayTitle();