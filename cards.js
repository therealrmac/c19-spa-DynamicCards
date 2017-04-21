console.log("Hello");
var textArea= document.getElementById('inputArea');
var button= document.getElementById('create');
var newCardArea= document.getElementById('newCardArea');
var deleteCard=document.getElementsByClassName('delCard');


button.addEventListener('click', () =>{
	var x= textArea.value;
	console.log(x);
	var newCard= `<div class="card">
					<article class="delCard">${x}</article>
					<button class="delete">Delete</button>
					</div>`;
	newCardArea.innerHTML+= newCard;	
	deleteButton();
});

function deleteButton(){
	var delButton= document.getElementsByClassName('delete');
	for (var i=0; i< delButton.length; i++){
		delButton[i].addEventListener('click', function (){
			this.parentNode.remove();
		});
	}
	textArea.value="";
}