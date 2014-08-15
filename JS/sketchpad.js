$(document).ready(function(){
	createGrid(16);
	initiateInk();
	$("button").on('click', reset);
});

function initiateInk(){
	$(".column").hover(function(){
		$(this).addClass("red");
	});
}

function reset(){
	$(".container").find("div").removeClass("red");
	var count = +prompt("How big a grid do you want?", "16");
	$("span").remove();
	createGrid(count);
	initiateInk();
}

function createGrid(count){
	for(var i = 1; i < count+1; i++){
		$(".container").append("<span class=row"+i+"></span>");
		for(var o = 1; o < count+1; o++){
			$(".container").find(".row"+i).append("<div class=\"column "+o+"\"></div>");
		}
	}
	var newContainerSize = 960 - (count*2);
	var newDimension = newContainerSize/count + "px";
	$('.container').find('div').css({"height":newDimension,
									"width":newDimension});
}