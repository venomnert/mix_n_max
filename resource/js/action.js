/*

The JavaScript has one job: hide the current slide and show the next one.
To accomplish this, we just have to change the classes of the slides in question.
  -first get the slides
  -onclick change the showing class to the child below
  -if the child showing is the last one, move to the top and start over again

var slider = document.getElementById('slides');
var slides = document.querySelectorAll('ul#slides li');

slider.addEventListener('click', function () {
    var currKey = getCurrentSlide();
    var currNode = slides.item(currKey);

    if(currKey === slides.length-1) {
      currKey = 0;
    }
    else {
      currKey +=1;
    }

    if(currNode.classList.contains('showing')) {
      currNode.classList.remove('showing');
      slides.item(currKey).classList.add('showing');
    }
})

function getCurrentSlide() {
  var doc = slider.querySelector('li.showing');
  var currKey = 0;

  for(var key of slides.keys()){
    if ( slides.item(key) === doc) {currKey = key;}
  }
  return currKey;
}

*/
