var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "hello";
// headerTitle.innerText = "goodbye";

// headerTitle.style.borderBottom = "solid 3px #000";
// headerTitle.style.color = "red";
headerTitle.style.fontWeight = "bold";

var items = document.getElementsByClassName("list-group-item");

items[3].style.backgroundColor = "green";
// items.style.font = "red";

for (let i = 0; i < items.length; i++) {
  items[i].style.color = "blue";
}
