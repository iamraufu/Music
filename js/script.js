var song = document.getElementById("song");
var play = document.getElementById("play");

play.onclick = function(){
	if (song.paused){
	song.play();
	play.src="img/pause.png";
	}
	else{
		song.pause();
		play.src="img/play.png";
	}
}