function addNewItem() {
  var newItem = document.getElementById("input").value;
  var list = document.getElementById("list");
  var listItem = document.createElement("li");

  listItem.appendChild(document.createTextNode("- "+ newItem));
  list.appendChild(listItem);
  document.getElementById("input").value = "";
  listItem.onclick = removeItem;
}

function removeItem(e) {
  e.target.parentElement.removeChild(e.target);
}

document.body.onkeyup = function(e) {
  if (e.which == 13) {
    addNewItem();
  }
};
