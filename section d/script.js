let bucketList = [];

function addItem() {
  let item = document.getElementById("item").value.trim();
  if (item) {
    bucketList.push(item);
    displayList();
    document.getElementById("item").value = "";

}}

function displayList() {
  let list = document.getElementById("list");
  list.innerHTML = "";
  bucketList.forEach((item, index) => {
    list.innerHTML += `<li>${item} <button onclick="removeItem(${index})">Delete</button></li>`;
  });
}

function removeItem(index) {
  bucketList.splice(index, 1);
  displayList();
}