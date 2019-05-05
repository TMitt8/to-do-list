function addElement() {
    var item = prompt("What would you like to do?")
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var txt = item.length;
    if(txt < 1) { alert("You must enter something!")}
        else {
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
    li.onclick = removeItem;
    }
}


function removeItem(e) {
e.target.parentElement.removeChild(e.target);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}