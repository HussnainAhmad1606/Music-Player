console.log("Music Player");



function playAudio() {
	let cover = document.getElementById("cover");
	cover.setAttribute("style", "animation: rotate 5s infinite ease;")
	let audio = document.getElementById("audio");
	audio.play();
	let button = document.getElementById("action");
	button.innerHTML = `<button id="play" onclick="pauseAudio();">Pause</button>`;


}

function pauseAudio() {
	let cover = document.getElementById("cover");
	cover.setAttribute("style", "animation: none;")
	let audio = document.getElementById("audio");
	audio.pause();
	let button = document.getElementById("action");
	button.innerHTML = `<button id="play" onclick="playAudio();">Play</button>`;
}