var dialog_nodes = document.querySelectorAll('div.extras');
var plus_nodes = document.querySelectorAll('.show');
var close_nodes = document.querySelectorAll('.close');

var dialog_array = [];
var plus_array = [];
var close_array = [];

/*
document.querySelector('#show').onclick = function () {
  dialog.show();
}
document.querySelector('#close').onclick = function () {
  dialog.close();    alert('Working')
}
*/

function converNodeList(nodeList, arrayList) {
  for (let i = 0; i < nodeList.length; i++) {
    arrayList.push(nodeList.item(i));
  }
}

function assignDialogShow(dialog_array, plus_array) {
  if (dialog_array.length !== plus_array.length) {
    console.log('Unequal dialog for plus');
    return;
  }

  for (let i = 0; i < plus_array.length; i++) {
    let className = plus_array[i].classList.item(1);

    for (let j = 0; j < dialog_array.length; j++) {
      if (dialog_array[j].classList.contains(className)) {
        plus_array[i].addEventListener('click', function () {
          dialog_array[j].style.display = 'block';
          console.log('clicked expand');
        }, false);
      }
    }
  }
}

function assignDialogClose(dialog_array, close_array) {
  if (dialog_array.length !== close_array.length) {
    console.log('Unequal dialog for close');
    return;
  }

  for (let i = 0; i < close_array.length; i++) {
    let className = close_array[i].classList.item(1);

    for (let j = 0; j < dialog_array.length; j++) {
      if (dialog_array[j].classList.contains(className)) {
        // console.log(className, dialog_array[j]);
        close_array[i].addEventListener('click', function () {
          dialog_array[j].style.display = 'none'; }, false);
      }
    }
  }
}

// function setHeight() {
//    var windowHeight = $(window).height(),
//        $block = $('.video-content');
//     if(windowHeight > 550) { // 550px is your css min-height for this block
//         $block.css({'min-height': windowHeight + 'px'})
//     } else {
//        $block.css({'min-height': ''})
//     }
// }
//
// $(document).ready(function() {
//     setHeight();
//    $(window).on('resize orientationchange', setHeight);
// });

function setHeights(element, heightValue, unit) {
  element.style.height = heightValue + unit;
  element.style.minHeight = heightValue + unit;
  element.style.maxHeight = heightValue + unit;
}

function setHeight() {
  var windowHeight = document.documentElement.clientHeight;
  var home_header = document.querySelector('.home-header');
  var contact_header = document.querySelector('.contact-header');
  var menu_header = document.querySelector('.menu-header');
  var about_header = document.querySelector('.about-header');

  if (windowHeight > 500) {
    if (home_header) {
      setHeights(home_header, windowHeight, 'px');
    }
    else if (contact_header) {
      setHeights(contact_header, windowHeight, 'px');
    }
    else if (menu_header){
      setHeights(menu_header, menu_header.offsetHeight , 'px');
    }
    else if (about_header) {
      setHeights(about_header, about_header.offsetHeight , 'px');
    }
    else {
      console.log('No pages read.');
    }
  }
  else {
    home_header.style.minHeight = '';
    home_header.style.maxHeight = '';
  }
}

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    setHeight();
    //console.log('called setHeight');
    // Listen for orientation changes
    window.addEventListener("orientationchange", function() {
      // Announce the new orientation number
      setHeight();
      // alert(screen.orientation);
    }, false);
  }
}

converNodeList(dialog_nodes, dialog_array);
converNodeList(plus_nodes, plus_array);
converNodeList(close_nodes, close_array);

// console.log(dialog_array);
// console.log(plus_array);
// console.log(close_array);

assignDialogShow(dialog_array,plus_array);
assignDialogClose(dialog_array,close_array);
