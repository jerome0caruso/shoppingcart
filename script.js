var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var itemListButton = document.getElementsByClassName('bttn');

function inputLength() {
	return input.value.length;
}
function createListElement() {
	var li = document.createElement("li");
	var dButton = document.createElement("button");
	// Add Li 
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	//Add delete button
	dButton.appendChild(document.createTextNode("Delete!"));
	li.appendChild(dButton);
	dButton.onclick = removeParent;
}

function addListAfterClick() {
	if(inputLength()> 0) {
		createListElement();
	}
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keycode === 13) {
		createListElement();
	}
}
function removeParent(event) {
	event.target.parentNode.remove();
};


function crossOff(event) {
	var crossOff = event.target;
	crossOff.classList.toggle("done");
}
for (var i = 0; i < itemListButton.length; i++) {
	itemListButton[i].addEventListener("click", removeParent);
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", crossOff );

