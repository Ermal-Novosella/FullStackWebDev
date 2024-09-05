$("li").click(function(){
    alert("E klikuar");
})

$("#btn").click(function(){
    console.log($("#h1").text());
    $("#h1").text("Testing Text");
    $("#h1").append("Extra Text1");
    $("#h1").prepend("Extra Text2");
});
$("#btn2").on("click",function(){
    console.log("I klikuar teksti");
})

$(".hidden").show()
$(".hidden").show(300);
$(".hidden").show("slow");

$("#square").animate({
    "width" : "200px",
    "height" : "200px"
});

$(".testing").click(function(){
$(".testing").animate({
    "left" : "+= 50px",
    "opacity" : 0.25,
    "fontSize" : "12px"
}, 300, function(){
    console.log("Animation completed");
})
})