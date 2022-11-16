var sound = document.createElement('audio');
sound.src = 'Timon.mp3';
sound.style.visibility = 'hidden';
window.onload = function(){
sound.play();
}