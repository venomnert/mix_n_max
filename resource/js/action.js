var dialog_nodes = document.querySelectorAll('dialog');
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
  dialog.close();
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
        plus_array[i].onclick = function () { dialog_array[j].show(); }
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
        console.log(className, dialog_array[j]);
        close_array[i].onclick = function () { dialog_array[j].close(); }
      }
    }
  }
}


converNodeList(dialog_nodes, dialog_array);
converNodeList(plus_nodes, plus_array);
converNodeList(close_nodes, close_array);

console.log(dialog_array);
console.log(plus_array);
console.log(close_array);

assignDialogShow(dialog_array,plus_array);
assignDialogClose(dialog_array,close_array);
