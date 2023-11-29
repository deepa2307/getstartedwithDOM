// // var headerTitle = document.getElementById("header-title");
// // console.log(headerTitle);
// // headerTitle.textContent = "hello";
// // headerTitle.innerText = "goodbye";

// // headerTitle.style.borderBottom = "solid 3px #000";
// // headerTitle.style.color = "red";
// // headerTitle.style.fontWeight = "bold";

var items = document.getElementsByClassName("list-group-item");

items[3].style.backgroundColor = "green";
// items.style.font = "red";

// // for (let i = 0; i < items.length; i++) {
// //   items[i].style.color = "blue";
// // }

var li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
  li[i].style.color = "blue";
}

var item = document.querySelector("list-group-item");

var lastitem = document.querySelector(".list-group-item:nth-child(2)");
// // lastitem.style.backgroundColor = "green";

var threeitem = document.querySelector(".list-group-item:nth-child(3)");

threeitem.style.visibility = "hidden";

// var odd = document.querySelectorAll("li:nth-Child(odd)");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "green";
// }

// Creating Nodes and Modifying Dom

var itemList = document.quarySelector("#items");
//parentNode
// console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "red";
// console.log(itemList.parentNode.parentNode);

//parentElement
// console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "red";
// console.log(itemList.parentNode.parentNode);

//childNodes
// // console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";

// //FirstChild
// console.log(itemList.firstChild);

// //FirstElementChild
// console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";

// //lastChild
// console.log(itemList.lastChild);

// console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello4";

//nextsibiling
console.log(itemList.nextSibiling);

//previoussibiling
console.log(itemList.previousSibiling);

//previousElementsibiling
console.log(itemList.previousElementSibiling);
itemList.previousElementSibiling.style.color = "green";

//creatElement

//creat a div
var newDiv = document.createElement("div");

//add classs
newDiv.className = "hello";

//add attr
newDiv.setAttribute("title", "hello div");

//create text node
var newDivtext = document.createTextNode("hello world");

//add text to div
newDiv.appendChild(newDivtext);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

container.insertBefore(newDiv, h1);
