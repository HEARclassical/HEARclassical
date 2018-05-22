var SEEKING = false;
var SHOWDURATION = true;
var DURATION;
Amplitude.init({

	"songs": [
            {
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://hearclassical.github.io/HEARclassical/assets/audio/aNoteAboutWitches.mp3",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            }
        ],
    "volume": 75,
    "callbacks": {
    	"time_update": function() {

    		DURATION = Amplitude.audio().duration;
    		if (!DURATION) {return;}
    		if (!SEEKING) {
    			var curPercent = Amplitude.getSongPlayedPercentage();
    			updateProgress(curPercent / 100);
    			var curTime = curPercent * Amplitude.audio().duration / 100;
    			updateCurrentTime(curTime);
    			updateEndTime(curTime);



    		}
    		
    	}
    }

})



function updateProgress(percentage) {
	document.getElementById('song-played-progress').value = percentage;
}

function updateCurrentTime(time) {
	var s = Math.floor(time % 60);
	var m = Math.floor(time / 60);

	var seconds = (s < 10) ? '0' + parseInt(s, 10) : '' + parseInt(s, 10);
	var minutes = (m == 0) ? '0' : '' + m;
	document.querySelector('.current-minutes').innerHTML = minutes;
    document.querySelector('.current-seconds').innerHTML = seconds;
}

function updateEndTime(time) {
	var minus;

	if (SHOWDURATION) {
		time = DURATION;
		minus = ""
	} else {
		time = Math.floor(DURATION) - time;
		minus = "-"
	}


	var s = Math.ceil(time % 60);
	var m = Math.floor(time / 60);

	var seconds = (s < 10) ? '0' + parseInt(s, 10) : '' + parseInt(s, 10);
	var minutes = minus + ( (m == 0) ? '0' : '' + m );
	document.querySelector('.duration-minutes').innerHTML = minutes;
    document.querySelector('.duration-seconds').innerHTML = seconds;
}


//when duration area is clicked, switch from between duration to remaining time and 
document.querySelector('.duration').onclick = function() {
	if (DURATION) {
		SHOWDURATION = !SHOWDURATION;
		var curTime = Amplitude.getSongPlayedPercentage() * Amplitude.audio().duration / 100;
		updateEndTime(curTime) 
	}

}


	/*
	key events

    window.onkeydown = function(e) {
        return !(e.keyCode == 32);
    };
	*/

    /*
      Handles a click on the song played progress bar.
    */

document.getElementById('song-played-progress').addEventListener('mousedown', function( e ){

	SEEKING = true;
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;
    var newProgress = ( parseFloat( x ) / parseFloat( this.offsetWidth) ) ;
    var newProgress = Math.min(Math.max(newProgress, 0), 1.0);
    setTimeout(function(){document.getElementById('song-played-progress').value = newProgress;}, 5)

    var newTime = newProgress * DURATION;

    updateCurrentTime(newTime);
    updateEndTime(newTime);
    
	document.addEventListener('mouseup', mouseUpUpdate);
	document.addEventListener('mousemove', mouseMoveUpdate);
});

var mouseMoveUpdate = function(e) {
    e.preventDefault();
	var that = document.getElementById('song-played-progress');
	var offset = that.getBoundingClientRect();
    var x = e.pageX - offset.left;
    var newProgress = ( parseFloat( x ) / parseFloat( that.offsetWidth) );
    var newProgress = Math.min(Math.max(newProgress, 0), 1.0);

    var newTime = newProgress * DURATION;

    updateCurrentTime(newTime);
    updateEndTime(newTime);

    document.getElementById('song-played-progress').value = newProgress;
}

var mouseUpUpdate = function(e) {
	SEEKING = false;
    Amplitude.setSongPlayedPercentage(100 * document.getElementById('song-played-progress').value);
    document.removeEventListener('mouseup', mouseUpUpdate);
    document.removeEventListener('mousemove', mouseMoveUpdate);


}

function showAudioplayer() {
    document.getElementById('audioplayer-overlay').setAttribute('style', 'max-height: 1000')
}

function hideAudioplayer() {
    document.getElementById('audioplayer-overlay').setAttribute('style', 'max-height: 0')
}

document.getElementById('audioplayer-close-button').onclick = function(){
    hideAudioplayer()
};

document.querySelector('.volume-container').addEventListener('mouseenter', function(e){
    document.querySelector('.volume-control-wrapper').setAttribute('style', 'display: block');
    document.querySelector('.volume-container').addEventListener('mouseleave', hideVolume)

});

function hideVolume(e) {
    document.querySelector('.volume-container').removeEventListener('mouseleave', hideVolume);
    document.querySelector('.volume-control-wrapper').setAttribute('style', 'display: none');
}


//fires whenever the slider is adjusted, so we can see when to change
document.querySelector('.amplitude-volume-slider').oninput = function() {
    console.log(this.value);
    var volCL = document.querySelector('.volume-image').classList;
    if (this.value < 2) {
        if (!volCL.contains("no-volume")) {
            volCL.replace("low-volume", "no-volume");
            volCL.replace("high-volume", "no-volume");
        }
    }

    else if (this.value < 50) {
        if (!volCL.contains("low-volume")) {
            volCL.replace("no-volume", "low-volume");
            volCL.replace("high-volume", "low-volume");
        }
    } else {
       if (!volCL.contains("high-volume")) {
            volCL.replace("no-volume", "high-volume");
            volCL.replace("low-volume", "high-volume");
        } 
    }


}
