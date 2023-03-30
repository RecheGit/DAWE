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
/*
	function editUser(event){
		var confirmation = confirm('edit?');
		if(confirmation){
			var url = '/users/edit/' + event.target.getAttribute('data-id');
			var consulta = new XMLHttpRequest();
			consulta.open("EDIT", url);
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
	*/

}

