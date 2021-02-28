console.log("Music Player");
var tracks = [
{
	src: "audio/alan.mp3",
	artist: "Alan Walker",
	track: "Faded Official Audio"

},
{
 src: "audio/move.mp3",
 artist: "Armaan Malik",
track: "Ready to Move"

},
{
src: "audio/samjh.mp3",
artist: "Arijit Singh",
	track: "Main tenu Samjhavan Ki"
}];

var i = 0;
function playAudio() {

	let cover = document.getElementById("cover");
	cover.setAttribute("style", "animation: rotate 5s infinite ease;")
	let audio = document.getElementById("audio");
	audio.play();
	let button = document.getElementById("action");
	button.innerHTML = `<button id="play" class="btn" onclick="pauseAudio();">Pause</button>`;


}

function pauseAudio() {
	let cover = document.getElementById("cover");
	cover.setAttribute("style", "animation: none;")
	let audio = document.getElementById("audio");
	audio.pause();
	let button = document.getElementById("action");
	button.innerHTML = `<button id="play" class="btn" onclick="playAudio();">Play</button>`;
}

const nextTrack = () => {
	if (i == 2) {
		i = 2;
	}
	else {
		i += 1	
	}
	document.getElementById("name").textContent = tracks[i].track;
	document.getElementById("artist").textContent = tracks[i].artist;
	audio.src = tracks[i].src;
	playAudio();
}


const previousTrack = () => {
	if (i == 0) {
		i = 0;
	}
	else {
		i -= 1		
	}
	document.getElementById("name").textContent = tracks[i].track;
	document.getElementById("artist").textContent = tracks[i].artist;
	audio.src = tracks[i].src;
	playAudio();
}