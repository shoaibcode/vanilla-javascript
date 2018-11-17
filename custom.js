//Get Form tag
var form = document.querySelector("#addTodo");

var todo = document.querySelector("#todo");
// Get UL Tag
var ul = document.querySelector("ul");

//add Event (Submit) to Form Tag
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Create LI tag
  var li = document.createElement("li");
  li.setAttribute("class", "list-item");
  // add new value to LI tag
  li.innerHTML = todo.value;

  // Add li tag to UL
  ul.appendChild(li);

  todo.value = "";
});
