addEventListener('load', initiate);
     function initiate(){
		 var button = document.getElementById('save');//айди кнопки
		 button.addEventListener('click', newitem);//слушаем событие и туда функцию
		 show();
	 }
	 
	 function newitem(){
		 var keyword = document.getElementById('keyword').value;//обращаемся к значению, которе в айди, обратилис к айди, извлекаем значение атрибута или пользовательские данные
		 var value = document.getElementById('text').value;
		 sessionStorage.setItem(keyword,value);//ключ, значение()
		 show(keyword);
	 }
	 
	 function show(){
		 var databox = document.getElementById('databox');//куда выводить
		 //var value = sessionStorage.getItem(keyword);//что выводить(получаем занчение sessionStorage)
		 //databox.innerHTML = '<div>'+keyword+'-'+value+'</div>';
		 databox.innerHTML = '<input type =  "button" onclick = "removeAll()" value = "Удалить всё"/>';
		 for (var f = 0; f < sessionStorage.length; f++){
		 var keyword = sessionStorage.key(f);
		 var value = sessionStorage.getItem(keyword);
		 databox.innerHTML += '<div>'+keyword+'-'+value+'<input type = "button" onclick = "removeItem(\''+keyword+'\')" value = "remove"/></div>';
		 }
	 }
	 
		 function removeAll(){
			 if (confirm('Are you sure?')){
				 sessionStorage.clear();
				 show();
			 }
		 }
		  
	
	 
	 function removeItem(keyword){
		 if(confirm('Are you sure?')){//если пользовавтель нажимает "да" - config=true,если "нет" - false
			 sessionStorage.removeItem(keyword);
			 show();
		 }
		 
	 }
		