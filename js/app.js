/*
Application Name: Music Player
Version: 1.0
Developer: HussnainAhmad160

*/


// Array of all musics
var tracks = [
{
	src: "audio/bulleya.mp3",
	artist: "Unknown Artist",
	track: "Bulleya"

	},
	{
	src: "audio/alan.mp3",
	artist: "Alan Walker",
	track: "Faded"

	},
	{
 	src: "audio/move.mp3",
 	artist: "Armaan Malik",
	track: "Ready to Move"

	},
	{
	src: "audio/samjh.mp3",
	artist: "Arijit Singh",
	track: "Main tenu Samjhavaan Ki"
}];


var i = 0;

// Function for playing audio
const playAudio = () => {

	// Spining motion of music icon
	let cover = document.getElementById("cover");
	cover.setAttribute("style", "animation: rotate 10s infinite linear;");

	// Playing the audio
	let audio = document.getElementById("audio");
	audio.play();

	// Changing play button to pause button
	let button = document.getElementById("action");
	button.innerHTML = `<img class="control-button" onclick="pauseAudio();" id="pauseBtn" src="img/pause.png" alt="">`;


}

const  pauseAudio = () => {
	// Stoping the spining motion of the music icon
	let cover = document.getElementById("cover");
	cover.setAttribute("style", "animation: none;");

	// Stopping the audio
	let audio = document.getElementById("audio");
	audio.pause();

	// Changing the pause button to play button
	let button = document.getElementById("action");
	button.innerHTML = `<img class="control-button" onclick="playAudio();" id="playBtn" src="img/play.png" alt="">`;
}


// Function for playing next track..
const nextTrack = () => {
	if (i == 3) {
		i = 3;
	}
	else {
		i += 1;
	}
	document.getElementById("name").textContent = tracks[i].track;
	document.getElementById("artist").textContent = tracks[i].artist;
	audio.src = tracks[i].src;
	playAudio();
}


// Function for playing previous track...
const previousTrack = () => {
	if (i == 0) {
		i = 0;
	}
	else {
		i -= 1;
	}
	document.getElementById("name").textContent = tracks[i].track;
	document.getElementById("artist").textContent = tracks[i].artist;
	audio.src = tracks[i].src;
	playAudio();
}


// If audio is finished, play the next audio
document.getElementById("audio").addEventListener("ended", function() {
	console.log("Playing Next Song...");
	nextTrack();
});