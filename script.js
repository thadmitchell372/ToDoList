window.onload = function () {
  var button = document.getElementById("submitButton");
  button.onclick = addItem;
};

function addItem() {
  var textInput = document.getElementById("item"); 
  var text = textInput.value; 
  var ul = document.getElementById("ul"); 
  var li = document.createElement("li"); 
  li.innerHTML = text; 
  li.onclick = function () {
    this.parentNode.removeChild(this);
  };
  if (ul.childElementCount == 0) {
    
    ul.appendChild(li); 
  } else {
    ul.insertBefore(li, ul.firstChild);
  }
}
