addEventListener('load', initiate);/*прослушиватель*/
function initiate(){
	var get = document.getElementById('getLocation');
	get.addEventListener('click', getLocation);
	
}
addEventListener ('load', initiate);
	
	function getLocation(){
	var geoconfig = { //насройка в теч.60 сек. не будет искать местоположение, заново будет считать метсопол.
	erableHightAccuracy:true, //определение точности
	timeout: 10000,//не успевает за это время определить(1 милисек)
	maxsimumAge: 60000
		}
	navigator.geolocation.getCurrentPosition(showinfo, error, geoconfig);
		
	}
	
	function showinfo(position){
		var location = document.getElementById('location');
		var mapurl = 'http://maps.google.com/maps/api/staticmap?center='+ position.coords.latitude + ',' + position.coords.longitude+'&zoom=12&size=400x400&sensor=false&markers=' + position.coords.latitude + ',' + position.coords.longitude//путь к статической карте
		var img = '<img src = "'+mapurl+'"/>';
		data = img;
		//var data = '';//создали переменную дата и загнали туда данные
		data += 'Широта' + position.coords.latitude + '<br/>';
		data += 'Долгота' + position.coords.longitude + '<br/>';
		data += 'Точность' + position.coords.accuracy + '<br/>';
		location.innerHTML = data;
	}
	
	function error(e){
		alert ('Error ' + error.code + ' ' + error.message);
	}
	