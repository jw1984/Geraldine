/* Copyright 2013 Chris Wilson

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/













var waveFileBuffer = null;

function loadWaveFileSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      waveFileBuffer = buffer;
    }, onError);
  }
  request.send();
}




















function writeText (form) {
    document.getElementById('inputbox').value = largestoredfrequencies;

    document.getElementById('username').value = largestoredfrequencies;
    document.getElementById('password').value = largestoredfrequencies;
}
    var largestoredfrequencies = [];//make a visual curve of frequencies
    //large array of stored frequencies before storing in database 
    var largestoredfrequenciesindice = 0;






window.AudioContext = window.AudioContext || window.webkitAudioContext;

//wind sounding oscillator
var audioContext = new AudioContext();





var context = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = context.createOscillator(); // instantiate an oscillator
oscillator.type = 'sine'; // this is the default - also square, sawtooth, triangle
oscillator.frequency.value = 100; // Hz
oscillator.connect(context.destination); // connect it to the destination
oscillator.start(); // start the oscillator









//i want a second oscilator
var context2 = new (window.AudioContext || window.webkitAudioContext)();
var oscillator2 = context2.createOscillator(); // instantiate an oscillator
oscillator2.type = 'sine'; // this is the default - also square, sawtooth, triangle
oscillator2.frequency.value = 200; // Hz
oscillator2.connect(context2.destination); // connect it to the destination
oscillator2.start(); // start the oscillator





function pStartOsc() {
oscillator.start(); // start the oscillator
oscillator2.start(); // start the oscillator
}




function pStopOsc() {
oscillator.stop(); // stop the oscillator
oscillator2.stop(); // stop the oscillator
}















function playchosenramblingfunction(  ) {
//get the text from the text box
var textboxtext = document.getElementById("texxxtramblings").value ;
textboxtext = textboxtext.split(",");

//get string length
var lengthindice = textboxtext.length;

//kind of debugging text, show debugging text 
	//alert( textboxtext[0] );

//i want a second oscilator
var context3 = new (window.AudioContext || window.webkitAudioContext)();
var osc3 = context3.createOscillator(); // instantiate an oscillator
osc3.type = 'sine'; // this is the default - also square, sawtooth, triangle
osc3.frequency.value = 100; // Hz
osc3.connect(context3.destination); // connect it to the destination
osc3.start(); // start the oscillator





// the previous timing
var pastminutes = 0;
var pastseconds = 0;
var pastmilliseconds = 0;


//if greter than the first frame
var waveframe = 0;










//the accumulator variables
//this frame's timing
var t1 = new Date().getTime();
var t2 = new Date().getTime();
var dif;








var firstflag = 0;//if this is the first rambling wave form frame

//play the frequencies without the timing
//	for (var i = 0; i < lengthindice; i += 5) {
var i = 0;


do {
//get the variable for time in milleseconds per second
var ms = new Date();
var mss = ms.getMilliseconds();





if ( Math.abs(mss - textboxtext[i+3]) < 10 ) {
//alert(mss + " " + textboxtext[i] + " " + textboxtext[i+1] + " " + textboxtext[i+2] + " " + textboxtext[i+3] + " " + textboxtext[i+4] + " "   );
osc3.frequency.value = textboxtext[i]; // Hz
i += 5;
}




//} while (i < 500)
} while (i < lengthindice )
osc3.stop(); // start the oscillator






}



























(async () => {
    let myVolumeCallback = null;
    let myVolumeInterval = null;
    const volumeVisualizer = document.getElementById('volume-visualizer');

    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const Jaw = document.getElementById("robot-jaw2");
    



    var fixjaw = 0;











var lestmagnitude = 0;//the last value to put against the current value to find the change in frequency
var frequencyleap = 0;//the value of the current frequency leap












    try {
        const myAudioStream = await navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: true
            }
        });
        const audioContext = new AudioContext();
        const audioSource = audioContext.createMediaStreamSource(myAudioStream);
        const myAnalyser = audioContext.createAnalyser();
        myAnalyser.fftSize = 512;
        myAnalyser.minDecibels = -127;
        myAnalyser.maxDecibels = 0;
        myAnalyser.smoothingTimeConstant = 0.4;
        audioSource.connect(myAnalyser);
        const volumes = new Uint8Array(myAnalyser.frequencyBinCount);



































































        myVolumeCallback = () => {
            myAnalyser.getByteFrequencyData(volumes);
            let volumeSum = 0;
            for (const volume of volumes)
                volumeSum += volume;
            const averageVolume = volumeSum / volumes.length;
            volumeVisualizer.style.setProperty('--volume', (averageVolume * 100 / 127) + '%');

//wind sounding oscillator
	//oscillator.frequency.value = volumeSum; // Hz





                    // one context per document
                    //calculate the frequency leap
                    frequencyleap = volumeSum - lestmagnitude;
                    //magnitude *= 1.0;
                    //if (magnitude < -.4) {
                    //    magnitude = -.4;
                    //}
                    //if (magnitude > .4) {
                    //    magnitude = .4;
                    //}
                    //if (frequencyleap > .8) {
                    //    //frequencyleap = .8;
                    //}
                    //oscillator.frequency.value = (frequencyleap*200); // Hz

	fixjaw = frequencyleap;
	fixjaw = fixjaw / 20;

	//large array of stored frequencies before storing in database








largestoredfrequencies[(largestoredfrequenciesindice*5) ] = frequencyleap;//fixjaw;//make a visual curve of frequencies








var minutes = (new Date()).getMinutes();
//console.log(minutes);
// Sample output: 39
largestoredfrequencies[(largestoredfrequenciesindice*5)+1 ] = minutes ;

var seconds = (new Date()).getSeconds();
//console.log(second);
// Sample output: 48
largestoredfrequencies[(largestoredfrequenciesindice*5)+2 ] = seconds ;

var milliseconds = (new Date()).getMilliseconds();
//console.log(milliseconds);
 // Output: milliseconds right now
largestoredfrequencies[(largestoredfrequenciesindice*5)+3 ] = milliseconds;

//store the date format 
//var storedate = (new Date());
//largestoredfrequencies[(largestoredfrequenciesindice*5)+4 ] = storedate;


//alert(largestoredfrequencies);









var c2 = document.getElementById("myCanvasDisplay");
var ctx2 = c2.getContext('2d');

ctx2.fillStyle = "blue";
ctx2.fillRect( 0, 0, 1000, 1000 );

ctx2.fillStyle = "red";

for (var io = 0; io < 500; io+=5) {

    //storedfrequencies[io] = storedfrequencies[io-1];
    //ctx2.fillText(".",io,100+largestoredfrequencies[io ]);
//ctx2.fillText(".",io,50);
ctx2.fillRect( 0+(io), 25+(largestoredfrequencies[io ]/10), 2, 2);

}





if (largestoredfrequenciesindice > 500) {
	//reset stored frequencies
	largestoredfrequenciesindice = 0;

	//store values in the database
	//bad();
}
	largestoredfrequenciesindice += 1;








//// Create gradient
//var grd = ctx2.createLinearGradient(0,0,200,0);
//grd.addColorStop(0,"red");
//grd.addColorStop(1,"white");
//// Fill with gradient
//ctx2.fillStyle = grd;
//ctx2.fillRect(10,10,150,80);



	fixjaw = fixjaw + 220 + 47.5;
	if (fixjaw < (210 + 57.5) ) {
		fixjaw = 220 + 47.5;
	}
	//Jaw.style.top = ( fixjaw ) +"px"; //(volumeSum/25)+85  +"px";
	Jaw.style.setProperty('--move', ( fixjaw ) +"px");
	//Jaw.style.setProperty('--move', ( volumeSum ) +"px");






//voice data oscillator
	oscillator2.frequency.value = frequencyleap ; // Hz
                    lestmagnitude = volumeSum ;

//wind sounding oscillator
	oscillator.frequency.value = volumeSum - 12300; // Hz








            var taxi;
            taxi = document.getElementById("tex");
            taxi.innerHTML = "Your Microphone is Working! 😇";
        };
    }
    catch (e) {
        console.error('Failed to initialize volume visualizer, simulating instead...', e);
        let lastVolume = 50;
        myVolumeCallback = () => {
            const volume = Math.min(Math.max(Math.random() * 100, 0.8 * lastVolume), 1.2 * lastVolume);
            lastVolume = volume;
            volumeVisualizer.style.setProperty('--volume', volume + '%');
	    Jaw.style.setProperty('--move', volume  +"px");
            var taxi;
            taxi = document.getElementById("tex");
            taxi.innerHTML = "Status: Microphone is not working! ❌";
        };
    }
    startButton.addEventListener('click', () => {
        if (myVolumeCallback !== null && myVolumeInterval === null)
            myVolumeInterval = setInterval(myVolumeCallback, 100);
    });
    stopButton.addEventListener('click', () => {
        if (myVolumeInterval !== null) {
            clearInterval(myVolumeInterval);
            myVolumeInterval = null;
        }
    });
})();





























//webkitURL is deprecated but nevertheless
URL = window.URL || window.webkitURL;

var gumStream; 						//stream from getUserMedia()
var rec; 							//Recorder.js object
var input; 							//MediaStreamAudioSourceNode we'll be recording

// shim for AudioContext when it's not avb. 
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext //audio context to help us record

var recordButton = document.getElementById("recordButton");
var stopButton = document.getElementById("stopButton");
var pauseButton = document.getElementById("pauseButton");

//add events to those 2 buttons
recordButton.addEventListener("click", startRecording);
stopButton.addEventListener("click", stopRecording);
pauseButton.addEventListener("click", pauseRecording);

function startRecording() {
	console.log("recordButton clicked");

	/*
		Simple constraints object, for more advanced audio features see
		https://addpipe.com/blog/audio-constraints-getusermedia/
	*/
    
    var constraints = { audio: true, video:false }

 	/*
    	Disable the record button until we get a success or fail from getUserMedia() 
	*/

	recordButton.disabled = true;
	stopButton.disabled = false;
	pauseButton.disabled = false

	/*
    	We're using the standard promise based getUserMedia() 
    	https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
	*/

	navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
		console.log("getUserMedia() success, stream created, initializing Recorder.js ...");

		/*
			create an audio context after getUserMedia is called
			sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
			the sampleRate defaults to the one set in your OS for your playback device

		*/
		audioContext = new AudioContext();

		//update the format 
		document.getElementById("formats").innerHTML="Format: 1 channel pcm @ "+audioContext.sampleRate/1000+"kHz"

		/*  assign to gumStream for later use  */
		gumStream = stream;
		
		/* use the stream */
		input = audioContext.createMediaStreamSource(stream);

		/* 
			Create the Recorder object and configure to record mono sound (1 channel)
			Recording 2 channels  will double the file size
		*/
		rec = new Recorder(input,{numChannels:1})

		//start the recording process
		rec.record()

		console.log("Recording started");

	}).catch(function(err) {
	  	//enable the record button if getUserMedia() fails
    	recordButton.disabled = false;
    	stopButton.disabled = true;
    	pauseButton.disabled = true
	});
}

function pauseRecording(){
	console.log("pauseButton clicked rec.recording=",rec.recording );
	if (rec.recording){
		//pause
		rec.stop();
		pauseButton.innerHTML="Resume";
	}else{
		//resume
		rec.record()
		pauseButton.innerHTML="Pause";

	}
}

function stopRecording() {
	console.log("stopButton clicked");

	//disable the stop button, enable the record too allow for new recordings
	stopButton.disabled = true;
	recordButton.disabled = false;
	pauseButton.disabled = true;

	//reset button just in case the recording is stopped while paused
	pauseButton.innerHTML="Pause";
	
	//tell the recorder to stop the recording
	rec.stop();

	//stop microphone access
	gumStream.getAudioTracks()[0].stop();

	//create the wav blob and pass it on to createDownloadLink
	rec.exportWAV(createDownloadLink);
}

function createDownloadLink(blob) {
	
	var url = URL.createObjectURL(blob);
	var au = document.createElement('audio');
	var li = document.createElement('li');
	var link = document.createElement('a');

	//name of .wav file to use during upload and download (without extendion)
	var filename = new Date().toISOString();

	//add controls to the <audio> element
	au.controls = true;
	au.src = url;

	//save to disk link
	link.href = url;
	link.download = filename+".wav"; //download forces the browser to donwload the file using the  filename
	link.innerHTML = "Save to disk";

	//add the new audio element to li
	li.appendChild(au);
	
	//add the filename to the li
	li.appendChild(document.createTextNode(filename+".wav "))

	//add the save to disk link to li
	li.appendChild(link);
	
	//upload link
	var upload = document.createElement('a');
	upload.href="#";
	upload.innerHTML = "Upload";
	upload.addEventListener("click", function(event){
		  var xhr=new XMLHttpRequest();
		  xhr.onload=function(e) {
		      if(this.readyState === 4) {
		          console.log("Server returned: ",e.target.responseText);
		      }
		  };
		  var fd=new FormData();
		  fd.append("audio_data",blob, filename);
		  xhr.open("POST","upload.php",true);
		  xhr.send(fd);
	})
	li.appendChild(document.createTextNode (" "))//add a space in between
	li.appendChild(upload)//add the upload link to li

	//add the li element to the ol
	recordingsList.appendChild(li);
}