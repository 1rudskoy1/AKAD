var TabsIndex = 1;

showTabs(TabsIndex);

function currentTabs(n){
	showTabs(TabsIndex = n);
}

function showTabs(n){
	var i;
	var dots = document.querySelectorAll(".dots__dot");
	var content = document.querySelectorAll(".testimonials__content");
	for(i =0;i < dots.length;i++){
		content[i].style.display = "none";
		dots[i].style.background = "#81868e";

	}
	content[TabsIndex - 1].style.display = "block";
	dots[TabsIndex-1].style.background = "#19bd9a";
}