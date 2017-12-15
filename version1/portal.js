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
