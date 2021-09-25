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



























