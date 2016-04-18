addEventListener('load', initiate);/*прослушиватель*/
function initiate(){
	var elem = document.getElementById('canvas');
	var canvas = elem.getContext('2d');//расширение
	canvas.save();//сохранили текщее состояние холста
	var grad = canvas.createLinearGradient(0,0,500,300);
	grad.addColorStop(0.5, 'orange');
	grad.addColorStop(1,'black');
	canvas.fillStyle = grad;
	canvas.strokeStyle = 'berry';
	canvas.strokeRect (100,100,120,120);//рисует прямоугольник
	canvas.fillRect (110,110,100,100);//заливает цветом
	canvas.clearRect (120,120,80,80);
	canvas.fillStyle = 'aqua';
	
	canvas.beginPath();
	canvas.arc(300,200,50,0,Math.PI*2,false);
	canvas.closePath();
	canvas.fill();//можно stroke-контур
	
	canvas.beginPath();
	var radians = Math.PI/180*90;
    canvas.arc(60,60,30,30,radians,false);
	canvas.fill();
	
	canvas.beginPath();
	canvas.moveTo(50,50);
	canvas.quadraticCurveTo(100,125,50,200);
	canvas.moveTo(250,50);
	canvas.bezierCurveTo(200,125,300,125,250,200);//сглаживающие точки x1y1,x2y2
	canvas.closePath();
	canvas.stroke();
	
	canvas.beginPath();
	canvas.strokeStyle = 'berry';
	canvas.beginPath();
	canvas.strokeStyle = 'green';
	canvas.moveTo(400,200);//рисуем треугольник
	canvas.lineTo(300,100);
	canvas.lineTo(300,200);
	canvas.clip();//рисуем маску
	for(var f = 0; f<300; f = f+10){
	canvas.moveTo(0,f);
	canvas.lineTo(500,f);
	}
	canvas.closePath();
	canvas.stroke();
	canvas.restore();//переход к текущему состоянию холста(canvas.save)
	
	canvas.beginPath();
	canvas.lineWidth = 10;
	canvas.lineCap = 'round';
	canvas.arc(200,150,30,0,Math.PI*2, false);
	canvas.stroke();
	canvas.lineWidth = 5;
	canvas.LineJoin = 'miter';
	canvas.moveTo(195,135);
	canvas.lineTo(215,155);
	canvas.lineTo(195,155);
	canvas.closePath();
	canvas.stroke();
	
	canvas.font = 'bold 24px verdana';//текст
	canvas.textAlign = 'start';
	canvas.fillText('My Message',100,100);
		var text = 'MeasureText';
		var size = canvas.measureText(text);//измеряет текст
		canvas.rotate(Math.PI/180*45);//новая матрица для трансформации
		
		canvas.fillText(text, 200,124);//позиция по х и по у (124-сумма 100 и 24!)
		canvas.strokeRect(200,100,size.width,24);
		
	var img = document.createElement('img');//подготовили переменную, когда загр. страница, можно выводить картинку
	img.setAttribute('src', '/media/img/img.jpg');
	img.addEventListener('load',function (){ //просылушали событие и вызывали callback функцию
	canvas.drawImage(img, 30, 30);
	});
}