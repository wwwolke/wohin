function onClick () {
	if(!workInProgress) {
		workInProgress = true;
		audio.play();
		calculateRotation();
		element.classList.toggle("tap-arrow");
		setTimeout(function(){
			element.classList.toggle("tap-arrow");
			workInProgress = false;
		}, 1000);
	}
}

function calculateRotation() {
	var deg = Math.floor(Math.random() * 360);
	element.style.webkitTransform = 'rotate('+deg+'deg)'; 
	element.style.mozTransform    = 'rotate('+deg+'deg)';
	element.style.msTransform     = 'rotate('+deg+'deg)';
	element.style.oTransform      = 'rotate('+deg+'deg)';
	element.style.transform       = 'rotate('+deg+'deg)';
}

var element = document.getElementById("arrow");
var workInProgress = false;
var audio = new Audio('drawing.mp3');
