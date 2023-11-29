// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "hello";
// headerTitle.innerText = "goodbye";

// headerTitle.style.borderBottom = "solid 3px #000";
// headerTitle.style.color = "red";
// headerTitle.style.fontWeight = "bold";

// var items = document.getElementsByClassName("list-group-item");

// items[3].style.backgroundColor = "green";
// // items.style.font = "red";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.color = "blue";
// }

// var li = document.getElementsByTagName("li");
// for (let i = 0; i < li.length; i++) {
//   li[i].style.color = "blue";
// }

var item = document.querySelector("list-group-item");

var lastitem = document.querySelector(".list-group-item:nth-child(2)");
// lastitem.style.backgroundColor = "green";

var threeitem = document.querySelector(".list-group-item:nth-child(3)");

// threeitem.style.visibility = "hidden";

var odd = document.querySelectorAll("li:nth-Child(odd)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}
