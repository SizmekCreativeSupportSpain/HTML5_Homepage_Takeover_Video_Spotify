/*******************
VARIABLES
*******************/
var creativeId = "Banner"; //Use anything that uniquely identifies this creative
var creativeVersion = "1.0.18"; //0.0.1 during initial dev, 1.0.0 on release, x.x.x once released and receives updates
var lastModified = "2017-08-02";
var lastUploaded = "2017-08-02";
var templateVersion = "2.0.24";

var bannerDiv;
var video;
var adId, rnd, uid;
var audioButton,controlButton;

/*******************
SETTINGS
*******************/
var autoPlayVideo = true;					// change this value to true if you wish auto play video when banner load

/*******************
INITIALIZATION
*******************/
function checkIfAdKitReady(event) {
	adkit.onReady(initializeCreative);
}

function initializeCreative(event) {
	try { //try/catch just in case localPreview.js is not included
		if (window.localPreview) {
			window.initializeLocalPreview(); //in localPreview.js
		}
	}
	catch (e) {}

	//Workaround (from QB6573) for Async EB Load where Modernizr isn't properly initialized
	typeof Modernizr === "object" && (Modernizr.touch = Modernizr.touch || "ontouchstart" in window);

	window.registerInteraction = function() {}; //overwrite rI function because it will never actually be called
	initializeGlobalVariables();
	initializeVideoTracking();

	document.getElementById('videoClickBtn').addEventListener('click',function(){
		EB.clickthrough();
	});
	document.getElementById('clickBtn').addEventListener('click',function(){
		EB.clickthrough();
	});
}

function initializeGlobalVariables() {
	adId = EB._adConfig.adId;
	rnd = EB._adConfig.rnd;
	uid = EB._adConfig.uid;

	bannerDiv = document.getElementById("banner");
	video = document.getElementById("video");
	audioButton = document.getElementById("audioButton");
	controlButton = document.getElementById("controlButton");
}

function initializeVideoTracking() {
	videoTrackingModule = new EBG.VideoModule(video);

	controlButton.addEventListener("click", handleControlsButtonClick);
	audioButton.addEventListener("click", handleAudioButtonClick);
	
	video.addEventListener('play',setControlImage);
    video.addEventListener('pause',setControlImage);
    video.addEventListener('ended',onVideoEnd);
    video.addEventListener('volumechange',setAudioImage);
	
    setAudioImage();
    setControlImage();

	if (autoPlayVideo) {
		videoTrackingModule.playVideo(false);
	}
}

function setAudioImage(){
	if(video.muted){
		audioButton.style.backgroundImage = "url(images/audioOff.png)";
	}else{
		audioButton.style.backgroundImage = "url(images/audioOn.png)";
	}
}
function setControlImage(){
	if(video.paused){
		controlButton.style.backgroundImage = "url(images/play.png)";
	}else{
		controlButton.style.backgroundImage = "url(images/pause.png)";
	}
}

function onVideoEnd(){
	controlButton.style.backgroundImage = "url(images/replay.png)";
	video.load();
}

function handleAudioButtonClick() {
	video.muted = !video.muted;
}

function handleControlsButtonClick() {
	if(video.paused){
		video.play();
	}else{
		video.pause();
	}
	setControlImage();
}


window.addEventListener("load", checkIfAdKitReady);