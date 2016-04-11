addEventListener('load', initiate);
function initiate(){
	maxim = 400;
	media = document.getElementById('media');
	play = document.getElementById('play');
	progress = document.getElementById('progress');
	bar = document.getElementById('bar');
	mute = document.getElementById('mute');
	value = document.getElementById('value');
	leftblock = document.getElementById('leftblock');
	play.addEventListener('click', push);
	mute.addEventListener('click', sound);
	bar.addEventListener('click', move);
	value.addEventListener('change', level);
}
function push(){
    if(!media.paused && !media.ended){
		media.pause();
		play.value = 'play';
		clearInterval(loop);
		}else {
			media.play();
			play.value = 'pause';
			loop = setInterval(status, 100);
		}
	
}
function status(){
	if(!media.ended){
		var size = parseInt(media.currentTime*maxim/media.duration);
		progress.style.width = size + 'px';
	}else{
		progress.style.width = '0';
		play.value = 'play';
		clearInterval(loop);
	}
}
function sound(){
	if(mute.value =='Mute'){
		media.muted = true;
		mute.value = 'Sound';
	}else{
		media.muted = false;
		muse.value = 'Mute';
	}
	
}
function move(e){
	var mouseX = e.pageX - bar.offsetLeft - leftblock.offsetWidth;
	var newTime = mouseX*media.duration/maxim;
	
	media.currentTime = newTime;
	progress.style.width = mouseX + 'px';
	}
function level(){
	media.valume = volume.value;
}