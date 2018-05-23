var SEEKING = false;
var SHOWDURATION = true;
var DURATION;
Amplitude.init({

	"songs": [
            {//1
                "name": "Opening Remarks Pt. 1",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
               // "url": "https://hearclassical.github.io/HEARclassical/assets/audio/aNoteAboutWitches.mp3",
                "url": "https://drive.google.com/uc?export=download&id=1hLq1viMmVJHetV0LyNQpvft8YYLQyYJ9",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//2
                "name": "Opening Remarks Pt. 2",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1oI60LmmEG9hTHC98yNEABLBRdWMjO62I",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//3
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1IiN91ADD-nmIZBfwHLVp4Rljv7vwXuTg",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//4
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1rmv0aoAKBC2F3n_C2bVu56JxtWtOZq_b",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//5
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1SwBWIgkm5y9V9E2Xs2AqkaHueDzeLDLW",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//6
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1LdqsBiSkdLt_Kga8JEFHEUU545-EAHYI",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//7
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1l4fKCzLbjzN2Q08wyKKTCmI-6DWvz9C9",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            //need to get links from here down
            {//8
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1gn6bf9wiYpLgsOfQ2KEBZLYKxbTrSErn",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//9
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=1cgr0Yf9Xlx9Ax3ZVoAuFm9L-NHef5qi-",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//10
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1MqdMfw3ddppY_UsnIhrhfqgWLI6Ypl83",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//11
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1hTkHHGVQGEJVkInAdeMo-C5JF-ts27EQ",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//12
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1worqt4gyCf67NdrPu3KvNFGE4zRJNgHP",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//13
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=1NlOeGBqazG2ZNjkpN3HXV7s9w8q0oPq-",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//14
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=11OaQiLGTxnpidXITmQmrv5Yd4v3WAytM",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//15
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1-3gT3Wk2bRXcyqlFQjwksn2XXwp5H9a4",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//16
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=1x8u8hRr79JqlH3Jvn07HMAiNigVFGWo8",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//17
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1-TCZ1vnLcCy3qcYI2GZAu-LKRAdXmr_G",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//18
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1ETa9gKRGkMekvNJ3w97mrgEwKzo06Rjx",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//19
                "name": "Inaugural Concert",
                "artist": "HEAR Classical",
                "album": "April 28, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=10IhyEzPPyLwT4JQwxD531jTIQV-j6d6x",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },

        ],
    "playlists": {
        "inaugural": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    "volume": 75,
    "callbacks": {
    	"time_update": function() {

    		DURATION = Amplitude.audio().duration;
    		if (!DURATION) {return;}
    		if (!SEEKING) {
    			var curPercent = Amplitude.getSongPlayedPercentage();
                updateProgressBackground(curPercent);
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


	var s = Math.floor(time % 60);
	var m = Math.floor(time / 60);

    s = Math.max(s, 0), m = Math.max(m,0);
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


	document.addEventListener('mouseup', mouseUpUpdate);
});

/*
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
*/

document.getElementById('song-played-progress').oninput = function() {

    if (SEEKING) {
        var percentage = this.value*100;
        updateProgressBackground(percentage);
        var newTime = this.value * DURATION;
        updateCurrentTime(newTime);
        updateEndTime(newTime);
    }
}

function updateProgressBackground(value) {
    document.getElementById('song-played-progress').setAttribute(
        'style', 
        'background: linear-gradient(to right, darkblue, darkblue ' + (value -1)+ '%, lightblue ' + (value + 1) + '%, lightblue)'
    );
}

var mouseUpUpdate = function(e) {
	SEEKING = false;
    Amplitude.setSongPlayedPercentage(100 * document.getElementById('song-played-progress').value);
    document.removeEventListener('mouseup', mouseUpUpdate);
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
