//your code here!
let list = document.getElementById("infi-list");

let itemCount = 10;

function addItems(num) {
for(let i=1; i<= num; i++) {
let li = document.createElement("li");
li.textContent = "Item " + (list.children.length + 1);
list.appendChild(li);
}
}

addItems(itemCount);

list.addEventListener("scroll", function() {
if(list.scrollTop + list.clientHeight >= list.scrollHeight-5) {
addItems(2);
}
})



