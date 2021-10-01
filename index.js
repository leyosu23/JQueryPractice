// document.querySelector("h1") in javaScript
// Before we loading up the entire jQuery library, index.js might already trying to access it

//$("h1").css("color", "red");

// To safely load jQuery code :
// Put JQuery library after body tag OR by using this : Once our document is ready, going to call this code

/*
$(document).ready(function () {
    ("h1").css("color", "red");
})
*/

$("h1").addClass("big-title margin-50");

// verify if the element has the class by using $("h1").hasClass("big-title margin-50");

$("button").text("I'm not a button");
$("button").html("<em>Hello</em>");

$("a").attr("href", "https:www.yahoo.com");

$("button").click(function () {
    $("h1").css("color", "purple");
});

$(document).keypress(function (event) {
    $("h1").text(event.key);
})

/*
$("h1").on("mouseover", function () {
    $("h1").css("color", "green");
});
*/

$("button").on("click", function () {
    //$("h1").toggle();
    $("h1").animate({ oppacity: 0.5 });
});