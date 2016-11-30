$(document).ready(function(){ //Run the following after the page is ready.
    "use strict";             //Tell jQuery to be strict about the syntax.
    //In the next line we select the item with the ID "myList" and then the first "li" in that item.
    //We add a ".on" event handler with "mouseover" and create an anonymous function which runs when the event is triggered.
    $("#myList li:first").on("click", swapMe);
    //The next line puts an "on click" handler and is almost the same but it calls a named function.
    $("#myList li:nth-child(2)").on("click", swapMe);
    //This uses a shorthand way attaching a click handler.
    $("#myList li:nth-child(3)").click(myFunction2);
    $("#myList li:nth-child(4)").on("click", myFunction3);
    $("#myList li:nth-child(5)").one("click", function(evt) {
        myFunction4("#square4");
                                   });
    $("#square4").hide();
    $("#square1").on("dblclick", swapme2);
    $("#square1").on("click", swapMe);
    $("#square2").on("mouseover", animateme);
});
//-------------------------------------------------------------------
//The code below are functions that will only run when called by name.
function swapMe() {
    // create a variable and store the contents of the third item.
    var tempText = $("h1").text();
    // Replace the contents of the 3rd item with the contents of the 4rth.
    $("h1").text($("#square1").text());
    // Replace the contents of item 4 with the contents of the "tempText".
    $("#square1").text(tempText);
};
function swapme2() {
var tempText = $("#square1").text();    
 $("#square1").text($("h2").text());
        $("h2").text(tempText);

}
function myFunction2() {
    // Change the css
    $(this).css({"text-shadow":"4px 4px #FFFF00","font-size":"300%"});
}
function myFunction3() {
    //Here is a neat one. Add a new class to tag so it takes on a whole new look.
    //Also, because it uses "this" the same function can be used on many items.
    $(this).toggleClass("long-shadow");
};
function myFunction4(myObject) {
    $(myObject).slideDown()
        .delay(0001)
        .animate({left: '+=700px'})
        .animate({top: '-=400px',
                  height: '500px'}, "fast");
}

function animateme(myObject) {
    $(square3).slideDown()
        .delay(2000)
        .animate({left: '+=700px'})
        .animate({top: '-=400px',
                  height: '500px'}, "slow");
}

$("#button").click(function(){
    var input = $("#input1").val();
            if (input1 == "2"){
            $("square2") css ("background color = blue") }

})