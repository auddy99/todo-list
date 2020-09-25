//strike off todo on click
$("ul").on("click", "li", function(){
	$(this).toggleClass("striked")
})

//fade out list item when X is clicked
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(function(){
		$(this).remove()
	})
	// e.stopPropagation()
})

//create list item
$("input").on("keypress", function(key){
	if(key.which === 13){
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> "+$(this).val()+"</li>")
		$(this).val("");
	}
})

//expand input on hitting plus
$(".fa-plus").on("click", function(){
	$("input").fadeToggle()

})