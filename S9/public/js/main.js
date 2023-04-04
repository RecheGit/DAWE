//const { response } = require("express");

window.onload = function() {
	let links = document.getElementsByClassName("deleteUser");
	let linksEdit = document.getElementsByClassName("editUser");

	for (let item of links) {
	    item.addEventListener("click", deleteUser);
	}

	for (let itemEdit of linksEdit) {
	    itemEdit.addEventListener("click", editUser);
	}

}

function deleteUser(event){
    var confirmation = confirm('Are You Sure?');
	if(confirmation){
		var url = '/users/delete/' + event.target.getAttribute('data-id');
		var consulta = new XMLHttpRequest();
		consulta.open("DELETE", url);
		consulta.onload = function() {
			if (consulta.status == 200) {
				window.location.replace('/')
			}
		};
		consulta.send();
	} else {
		return false;
	}
}

function editUser(event) {
	var confirmation = confirm('Are you sure?');
	var url = '/users/select/' + event.target.getAttribute('data-id');
	if (confirmation) {
		
		fetch('/users/select/' + event.target.getAttribute('data-id'), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response => {

			return response.text();
		}
		)
		.then((data) => {
			
			console.log(data)
			//let title = JSON.parse(data)['ISBN:'+isbn]["details"]["title"]
			var nombre = JSON.parse(data)['first_name'];
			console.log(nombre);
		}
		);
	} 


	else {
		return false;
	}
}




