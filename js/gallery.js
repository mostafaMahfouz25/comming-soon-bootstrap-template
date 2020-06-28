$(".cont-gall").on("click",".cover",function()
{
    $(".container-gallery i").css("opacity","1")
    $(".selected").removeClass("selected");
    $(this).parent().addClass("selected")
    $(".container-gallery").css("width","100%");
    $(".cont-image-gall img").attr("src",$(".selected .cont-img img").attr("src"))

});
$(".next").on("click",function()
{
    if(!$(".selected").parent().is(':last-child'))
    {

        $(".selected").removeClass("selected").parent().next().find(".cont-gall").addClass("selected");
        $(".cont-image-gall img").attr("src",$(".selected  .cont-img img").attr("src"))
    }	
    
})
$(".prev").on("click",function(){
    if(!$(".selected").parent().is(':first-child'))
    {
        $(".selected").removeClass("selected").parent().prev().find(".cont-gall").addClass("selected");
        $(".cont-image-gall img").attr("src",$(".selected .cont-img img").attr("src"))
    }	
    
})

function stopGall()
{
    $(".container-gallery i").css("opacity","0")
    $(".container-gallery").css("width","0");
}

$(".close").click(()=>{
    stopGall()
})

$(document).keyup(function(e) {
    if (e.keyCode === 27) stopGall();   // esc
});
