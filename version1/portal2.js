$(document).ready(function() {
  $('#previous').on('click', function(){
    // Change to the previous image
    $('#im_' + currentImage).stop().animate({
        transform: translateY(100%)
        });
    decreaseImage();
    $('#im_' + currentImage).stop().fadeIn();
  }); 
  $('#next').on('click', function(){
    // Change to the next image
    $('#im_' + currentImage).stop().fadeOut();
    increaseImage();
    $('#im_' + currentImage).stop().fadeIn();
  }); 

  var currentImage = 1;
  var totalImages = 4;

  function increaseImage() {
    /* Increase currentImage by 1.
    * Resets to 1 if larger than totalImages
    */
    ++currentImage;
    if(currentImage > totalImages) {
      currentImage = 1;
    }
  }
  function decreaseImage() {
    /* Decrease currentImage by 1.
    * Resets to totalImages if smaller than 1
    */
    --currentImage;
    if(currentImage < 1) {
      currentImage = totalImages;
    }
  }
  window.setInterval(function() {
  $('#next').click();
}, 2500);
});
