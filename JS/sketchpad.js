$(document).ready(function(){
	createGrid(16,16);
	$(".column").hover(function(){
		$(this).addClass("red");
	});
});

function reset(){
	$(".container").find("div").removeClass("red");
	var gridx = +prompt("How many columns do you want?", "16");
	var gridy = +prompt("How many rows do you want?", "16");
}
function createGrid(gridx, gridy){
	for(var i = 1; i < gridy; i++){
		$(".container").append("<span class=row"+i+"></span>");
		for(var o = 1; o < gridx; o++){
			$(".container").find(".row"+i).append("<div class=column "+o+"></div>");
		}
	}
}