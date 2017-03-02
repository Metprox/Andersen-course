var myNodeList = document.getElementsByTagName('li'),
	close = document.getElementsByClassName('close'),
	list = document.querySelector('ul');
	
//Стильное отмечание выполненого
list.addEventListener('click', function(ev) {
	if(ev.target.tagName == 'LI') {
		ev.target.classList.toggle('checked');
	}
},false);	