//ToDo-app

var submitButton = document.getElementById('myButton');		//Hämtar ut min Add to list-knapp

var addedThings = document.getElementById('listAddedStuff');	//Hämtar ut min lista som samlar "att göra"-inputs från användaren

var doneThings = document.getElementById('listStuffDone');	//Hämtar ut min lista som samlar borttagna "att göra"-inputs från användaren

var deleteButton = document.getElementById('myDeleteButton');	//Hämtar ut min Delete-knapp


//En funktion som körs om jag trycker på submitknappen. Varje värde av inputen ska alltså läggas till i listan
function addToDoList(){

	//Tar ut värdet av användarens input												
	var inputValue = document.getElementById('usersText').value;

	//Skapar textnod av värdet på användarens input	
	var node = document.createTextNode(inputValue);

	//Skapar ett nytt <li>-element					
	var list_1 = document.createElement('li');

	//Om användaren inte skriver in någonting skapas en alert
	if(inputValue === ""){
		alert("Hey lazyhead, type in something to do");
	}
	else{

	//Lägger till <li>-elementet till <ul>-listan						
	addedThings.appendChild(list_1);

	//Lägger till värdet av texten i <li>-elementet								
	var addNode = list_1.appendChild(node);

	//Nollställer värdet av användarens input inför nästa input							
	document.getElementById('usersText').value = "";				

	//Skapar två knappar bredvid varje element som skapas
	var button1 = document.createElement('button');
	var buttonText1 = document.createTextNode('Done');
	button1.classList.add("done");
	button1.className = "done";
	button1.appendChild(buttonText1);

	var button2 = document.createElement('button');
	var buttonText2 = document.createTextNode('Delete');
	button2.classList.add("delete");
	button2.className = "delete";
	button2.appendChild(buttonText2);

	//Lägger in "Done" och "Delete"-knapparna i ToDo-listan
	list_1.appendChild(button1);
	list_1.appendChild(button2);

	//När "Done" knappen brevid elementet trycks på flyttas elementet till nästa lista
	button1.addEventListener("click", function(){		
		var list_2 = document.createElement('li');
		doneThings.appendChild(list_2);
		list_2.appendChild(node);

		//När "Done"-knappen trycks på skapas även en "Delete"-knapp för varje element i "Done"-listan
		var button3 = document.createElement('button');
		var buttonText3 = document.createTextNode('Delete');
		button3.classList.add("doneDelete");
		button3.className = "doneDelete";
		button3.appendChild(buttonText3);

		//Lägger till den enskilda "Delete"-knappen i "Done"-listan
		list_2.appendChild(button3);

		//När "Delete"-knappen i "Done"-listan trycks på tas elementet bort
		button3.addEventListener("click", function(){
			doneThings.removeChild(list_2);
		})
	})

	//När den första "Delete" knappen brevid elementet i ToDo-listan trycks på tas elementet bort
	button2.addEventListener("click", function(){		
		addedThings.removeChild(list_1);
	})
}
}
//Funktion med knapp som tar bort alla element i andra listan
function deleteList(){
	while(doneThings.hasChildNodes()){
		doneThings.removeChild(doneThings.firstChild);
	}
}






