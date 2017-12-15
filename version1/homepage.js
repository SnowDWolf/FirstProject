 $(document).ready(function(){
    //This is for the first jQuery example (original idea)
    //This is how you add the automatic function using the '.click' method
    setInterval(function() {
        $("#nextSlide").click();
        }, 3800);

});
 //This is for the second jQuery example (Chris Coyler)
 //This uses several methods in one 'setInterval' function, the '.hide' method is used to
 //hide elements in the array at start when the user first loads the page. 
$(document).ready(function() {
    $("#slideContainer > .imageContainer:gt(0)").hide();

    setInterval(function() {
      $('#slideContainer > .imageContainer:first')
        .fadeOut()
        .next()
        .fadeIn()
        .end()
        .appendTo('#slideContainer');
    }, 5000);
});
