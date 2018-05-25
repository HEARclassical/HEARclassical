var SEEKING = false;
var SHOWDURATION = true;
var DURATION;
var playPauseButton = document.querySelector('.amplitude-play-pause');

Amplitude.init({

	"songs": [
            {//1
                "name": "Opening Remarks Pt. 1",
                "artist": "Felice Doynov",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1hLq1viMmVJHetV0LyNQpvft8YYLQyYJ9",
                "duration": "2:18",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//2
                "name": "Opening Remarks Pt. 2",
                "artist": "Brenda Vongova",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1oI60LmmEG9hTHC98yNEABLBRdWMjO62I",
                "duration": "2:17",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//3
                "name": "Comments — Joseph Boulogne",
                "artist": "Eli Greenhoe",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1IiN91ADD-nmIZBfwHLVp4Rljv7vwXuTg",
                "duration": "1:43",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//4
                "name": "String Quartet No. 5",
                "artist": "Joseph Boulogne",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1rmv0aoAKBC2F3n_C2bVu56JxtWtOZq_b",
                "duration": "11:22",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//5
                "name": "Comments — William Grant Still",
                "artist": "Tanner Porter",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1SwBWIgkm5y9V9E2Xs2AqkaHueDzeLDLW",
                "duration": "1:16",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//6
                "name": "Bayou Home",
                "artist": "William Grant Still",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1LdqsBiSkdLt_Kga8JEFHEUU545-EAHYI",
                "duration": "4:01",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//7
                "name": "Sonata for Bassoon and Piano",
                "artist": "Ulysses Kay",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1l4fKCzLbjzN2Q08wyKKTCmI-6DWvz9C9",
                "duration": "5:10",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//8
                "name": "Comments — Ulysses Kay",
                "artist": "Tanner Porter",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "duration": "1:19",
                "url": "https://drive.google.com/uc?export=download&id=1gn6bf9wiYpLgsOfQ2KEBZLYKxbTrSErn",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//9
                "name": "Comments — Yuko Uebayashi",
                "artist": "Anteo Fabris",
                "album": "HEAR Through Time",
                "date": "April 28, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=1cgr0Yf9Xlx9Ax3ZVoAuFm9L-NHef5qi-",
                "duration": "3:41",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//10
                "name": "Town Light",
                "artist": "Yuko Uebayashi",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1MqdMfw3ddppY_UsnIhrhfqgWLI6Ypl83",
                "duration": "6:26",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//11
                "name": "Comments — Élisabeth Jacquet de La Guerre",
                "artist": "Eli Greenhoe",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1hTkHHGVQGEJVkInAdeMo-C5JF-ts27EQ",
                "duration": "1:29",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//12
                "name": "Sonata No. 1",
                "artist": "Élisabeth Jacquet de La Guerre",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1worqt4gyCf67NdrPu3KvNFGE4zRJNgHP",
                "duration": "15:57",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//13
                "name": "Comments — Giaccobe Cervetto",
                "artist": "Alishan Gezgin",
                "album": "HEAR Through Time",
                "date": "April 28, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=1NlOeGBqazG2ZNjkpN3HXV7s9w8q0oPq-",
                "duration": "1:29",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//14
                "name": "Sonata Op. 3 No. 2",
                "artist": "Giaccobe Cervetto",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=11OaQiLGTxnpidXITmQmrv5Yd4v3WAytM",
                "duration": "10:08",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//15
                "name": "Comments — Beach, Viardot, Boulanger",
                "artist": "Fjóla Evans",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1-3gT3Wk2bRXcyqlFQjwksn2XXwp5H9a4",
                "duration": "3:02",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//16
                "name": "Invocation, Op. 55",
                "artist": "Amy Beach",
                "album": "HEAR Through Time",
                "date": "April 28, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=1x8u8hRr79JqlH3Jvn07HMAiNigVFGWo8",
                "duration": "5:01",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//17
                "name": "Romance",
                "artist": "Pauline Viardot",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1-TCZ1vnLcCy3qcYI2GZAu-LKRAdXmr_G",
                "duration": "3:10",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//18
                "name": "Nocturne",
                "artist": "Lili Boulanger",
                "album": "HEAR Through Time",
                "date": "April 28, 2018",
                "url": "https://drive.google.com/uc?export=download&id=1ETa9gKRGkMekvNJ3w97mrgEwKzo06Rjx",
                "duration": "4:21",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },
            {//19
                "name": "Closing Remarks",
                "artist": "Felice Doynov",
                "album": "HEAR Through Time",
                "date": "April 28, 2018", 
                "url": "https://drive.google.com/uc?export=download&id=10IhyEzPPyLwT4JQwxD531jTIQV-j6d6x",
                "duration": "0:47",
                "cover_art_url": "https://hearclassical.github.io/HEARclassical/assets/images/poster_april28.jpg"
            },

        ],
    "playlists": {
        "inaugural": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
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
    		
    	},
        "album_change": function() {
            console.log("an album changed")
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

/* FOR SHOWING AND HIDING THE AUDIO PLAYER */
function showAudioplayer() {
    document.getElementById('audioplayer-overlay').setAttribute('style', 'max-height: 80px')
};

function hideAudioplayer() {
    document.getElementById('audioplayer-overlay').setAttribute('style', 'max-height: 0px')
};

document.getElementById('audioplayer-close-button').onclick = function(){
    hideAudioplayer()
};

var audioLinks = document.getElementsByClassName('audioplayer-link');
for (var i = 0; i < audioLinks.length; i++){

    audioLinks[i].onclick = function() {
        showAudioplayer();
        if (this.classList.contains('play-now')) {
            Amplitude.playNow(Amplitude.getSongAtPlaylistIndex('inaugural', 0))

        }
    };
}

document.querySelector('.volume-container').addEventListener('mouseenter', function(e){
    document.querySelector('.volume-control-wrapper').setAttribute('style', 'display: block');
    document.querySelector('.volume-container').addEventListener('mouseleave', hideVolume)

});

function hideVolume(e) {
    document.querySelector('.volume-container').removeEventListener('mouseleave', hideVolume);
    document.querySelector('.volume-control-wrapper').setAttribute('style', 'display: none');
}

document.querySelector('.playlist-container').addEventListener('mouseenter', function(e){
    document.querySelector('.playlist-wrapper').setAttribute('style', 'display: block');
    document.querySelector('.playlist-container').addEventListener('mouseleave', hidePlaylist)

});

function hidePlaylist(e) {
    document.querySelector('.playlist-container').removeEventListener('mouseleave', hidePlaylist);
    document.querySelector('.playlist-wrapper').setAttribute('style', 'display: none');
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



//populate the playlist select with a playlist 

function createSongContainer(song) {
    var songContainer = document.createElement('div');
    songContainer.className = "song-container";

    var nameContainer = document.createElement('div');
    nameContainer.className = "song-name-container";

    var songName = document.createElement('div');
    songName.className = "song-name";
    songName.innerHTML = song.name;


    var artist = document.createElement('div');
    artist.className = "song-artist";
    artist.innerHTML = song.artist;

    var duration = document.createElement('div');
    duration.className = "song-duration";
    duration.innerHTML = song.duration;

    nameContainer.appendChild(songName);
    nameContainer.appendChild(artist);

    songContainer.appendChild(nameContainer);
    songContainer.appendChild(duration);

    return songContainer;
}

function generatePlaylistSelect(playlistName) {
    var i = 0;
    while (true) {
        var song = Amplitude.getSongAtPlaylistIndex(playlistName, i);
        if (!song) {break;}
        var songContainer = createSongContainer(song)
        document.querySelector('.songs-container').appendChild(songContainer);
        console.log(song);
        songContainer.onclick = playSong.bind(null,song);

        i += 1;
    }

}

function playSong(song) {
    console.log(song);
    Amplitude.playNow(song);
}

generatePlaylistSelect('inaugural');
