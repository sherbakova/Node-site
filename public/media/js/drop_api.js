addEventListener('load', initiate);/*прослушиватель*/
	function initiate(){
		//source1 = document.getElementById('image');//источник(что тянуть)
		//source1.addEventListener('dragstart',dragged);//начало перетаскивания,  вместо этого пишем(чтобф повесить прослушиватель для всех)
		var images = document.querySelectorAll('#picturebox img');//первый уровень вложенности(все элементы)
		for (var i = 0; i < images.length; i++){
			images[i].addEventListener('dragstart', dragged);//добавили просл для всех айдишек, функция знает, какой элемент мы тянем
			
		}
		
		drop = document.getElementById('canvas');//куда тянуть
		drop.addEventListener('dragenter', dragenter);//пересекли границу цел.элемента(событие-функция)
		drop.addEventListener('dragover',dragover);//тащим по цел. эл., срабат данное событие. запускаем функцию
		drop.addEventListener('drop',dropped);
		 
		canvas = drop.getContext('2d');
	}
	
	function dragenter(e){
		e.preventDefault();
	}
	
	function dragover(e){
		e.preventDefault();
		drop.style.background = 'beige';
	}
	
	/*function dragged(e){
		var code = '<img src = "'+source1.getAttribute('src')+'">';//формируем тег img, который берм из источника
		e.dataTransfer.setData('Text', code)// ( в источнике формируем переменную, которая будет видна в целевом) текстовая переменная
		drop.style.background = 'grey';
	}*/
	
	function dragged(e){
		elem = e.target;//текущий элемент
		e.dataTransfer.setData('Text', elem.getAttribute('id'));//передаем функии значение айдишки
		e.dataTransfer.setDragImage(elem, 0, 0);//передаем картинку
	}
	
	
	/*function dropped(e){
		e.preventDefault();
		drop.innerHTML = e.dataTransfer.getData('Text');//перехватываем данные
		drop.style.background = 'brown';//callback функция для события
	}*/
	
	function dropped(e){
		e.preventDefault();
		var id = e.dataTransfer.getData('Text');
		var src = document.getElementById(id).src;
		var img = '<img src = "'+src+'"/>';
			var img = document.createElement('img');//подготовили переменную, когда загр. страница, можно выводить картинку
				img.setAttribute('src', src); 
 
		//drop.innerHTML = '';!!!!!!!!
		//drop.innerHTML += img;
		console.log(img);
		var posx = e.pageX-drop.offsetLeft;// сколько отступить
		var posy = e.pageY-drop.offsetTop;
		
		canvas.drawImage(img, posx, posy);// обращаеся к canvas
		
	}
     
		