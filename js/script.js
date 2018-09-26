var TabsIndex = 1;
var categories = document.querySelectorAll('.Posts__categories_category');
var tags = document.querySelectorAll('.Tags__all-tags_tag');
for (let i = 0; i< categories.length;i++) {

	categories[i].onclick = function (e){
		var target = e.target;
		for (let i = 0; i < categories.length; i++) {
				categories[i].className = 'Posts__categories_category';
				target.className +=  " category-active";
			}
		
		}
	}
	for (let i = 0; i< tags.length;i++) {

		tags[i].onclick = function (e){
			var target = e.target;
			for (let i = 0; i < tags.length; i++) {
				tags[i].className = 'Tags__all-tags_tag';
				target.className +=  " tags-active";
			}
		
		}
	}


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



