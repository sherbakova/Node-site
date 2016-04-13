addEventListener('load', initiate);/*прослушиватель*/
function initiate(){
	name1 = document.getElementById('firstname');
	name2 = document.getElementById('lastname');
	name1.addEventListener('input', validation);
	name2.addEventListener('input', validation);
	validation();
	}
	function validation(){
		if(name1.value == ''&& name2.value == ''){
			name1.setCustomValidity('Заполните хотябы одно поле');
			name1.style.background = 'white';
			name2.style.background = 'white';
	}else{
			name1.setCustomValidity('');
			name1.style.background = 'white';
			name2.style.background = 'white';
	}
	}
