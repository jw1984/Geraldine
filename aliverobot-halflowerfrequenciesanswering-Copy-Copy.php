<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Machine</title>
        <script src='jquery-2.1.3.min2.js'></script>


    <link rel="stylesheet" href="myCSS.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<style>
	html {  }
	body { 
		
	}
	canvas { 
		display: inline-block; 

		//width: 95%;
		//height: 5%;

	}
	#controls {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		height: 20%;
		width: 100%;
	}
	#record { height: 15vh; }
	#record.recording { 
		background: red;
		background: -webkit-radial-gradient(center, ellipse cover, #ff0000 0%,lightgrey 75%,lightgrey 100%,#7db9e8 100%); 
		background: -moz-radial-gradient(center, ellipse cover, #ff0000 0%,lightgrey 75%,lightgrey 100%,#7db9e8 100%); 
		background: radial-gradient(center, ellipse cover, #ff0000 0%,lightgrey 75%,lightgrey 100%,#7db9e8 100%); 
	}

/* Modal Content/Box */
.robot-content {
	background-image: url("Name.jpg");
    position: absolute;
    top: 0px;
    left: 0px;

	width: 585px;
	height: 428px;

  border-color: purple;
  border-width: 50px;
  border-style: solid;
  border-radius: 10px;
}
/* Modal Content/Box */
.robot-jaw2 {
    --move: 267.5px;
    --colorOpacity: 1;
    background-image: url("lips.png");
    position: absolute;
    top: var(--move);
    /* background-color: rgb(var(--colorOpacity), var(--colorOpacity), var(--colorOpacity)); */
    left: 280px;



	width: 180px;
	height: 122px;
}




/* Modal Content/Box */
.bottom {
	background-image: url("satanicconjuringsofimmortalitylogo.png");
	width: 600px;
	height: 450px;


}


/* Modal Content/Box */
.topp {

  border-color: black;
  border-width: 25px;
  border-style: solid;
  border-radius: 10px;

  background-color: purple;

background-image: url("yellowandpyramid.png");
}


.topp2 {

  border-color: black;
  border-width: 25px;
  border-style: solid;
  border-radius: 10px;

  background-color: purple;

}

/* Modal Content/Box */
.tex {
	width: 600px;
	height: 150px;

  border-color: black;
  border-width: 10px;
  border-style: solid;
  border-radius: 10px;
}


canvas {
  border-color: black;
  border-width: 10px;
  border-style: solid;
  border-radius: 10px;
}



form {
  border-color: black;
  border-width: 10px;
  border-style: solid;
  border-radius: 10px;
}

mydivbottom {
	background-color: purple;
}



.oval {
    --barcolor: cyan;
  height: 50px;
  width: 90px;
    background-color: var(--barcolor);
  border-radius: 50%;
    position: absolute;
    top: 170px;
    left: 225px;
}

.oval2 {
    --barcolor: cyan;
  height: 50px;
  width: 90px;
    background-color: var(--barcolor);
  border-radius: 50%;
    position: absolute;
    top: 170px;
    left: 425px;
}

.spritesheet {

  border-color: black;
  border-width: 25px;
  border-style: solid;
  border-radius: 10px;

  height: 275px;
  width: 333px;

  background-color: purple;

  background-image: url("spritesheet.png");
}
	</style>
</head>
<body background="machine pentagram.png";>





<div id="myDivBottom"  class="topp">
<center><h1>d</h1></center>
	  <!-- Modal content -->
  <div class="robot-content">
  </div>

<h1 style="background-color:darkred;">
Name Name Name Name Name Name Name Name Name  
</h1>


  	  <!-- Modal content -->
  <div name="robot-jaw2" id="robot-jaw2" class="robot-jaw2">

  </div>
<div id="myDiv" style="background-color:pink; ">

</div>

<div id="myDiv" style="background-color:pink; ">

</div>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<div id="myDiv" style="background-color:hotpink; ">
<center><h1>Talking, Undead, Race of Immortal Robot Toys that Take Over the World</h1></center>










</div>


</div>
</div>











        <button  id="mybChangeLowerOffsetUp" onClick="pChangeOffset()">
             Increase Lower Offset
        </button>

        <button  id="mybChangeLowerOffsetDown" onClick="pChangeOffset2()">
             Decrease Lower Offset
        </button>
<INPUT TYPE="text" NAME="numChangeOffsetFrequency" ID="numChangeOffsetFrequency" VALUE="">
<br>










        <button  id="mybChangeJawUp" onClick="pChangeGain1()">
             Increase Jaw
        </button>

        <button  id="mybChangeGainJawDown" onClick="pChangeGain21()">
             Decrease Jaw
        </button>


<br>






<div class="oval" id="myLeftEye"></div>
<div class="oval2" id="myRightEye"></div>


<br>












<br>

        <button  id=" PoorTimingUp" onClick="pPoorTimingUp()">
             PoorTiming    Up
        </button>

        <button  id="PoorTimingDown" onClick="pPoorTimingDown()">
              PoorTiming    Down
        </button>
<INPUT TYPE="text" NAME="myPoorTimingInput" ID="myPoorTimingInput" VALUE="">



<br>
















    <div class="components">
        <button class="mybutton" id="start" >
            <i class="fa "></i> Alive
        </button>
        <button  id="startosc" onClick="pStartOsc()">
            <i >Start Oscillator</i> 
        </button>
        <button  id="stoposc" onClick="pStopOsc()">
            <i >Stop Oscillator</i> 
        </button>
    </div>
<div class="volumebar" id="volume-visualizer"></div>




<br>
        <button  id="myRecord" onClick="pRecord()">
             Record a frame
        </button>
<br>
        <button  id="myPlay" onClick="pPlay()">
             Play a frame
        </button>






























<br> 
























<div id="myDivBottom" class="topp2"><center><h1></h1></center>

  <div name="sci" id="sci" class="bottom">
  </div>

</div>






        <button  id="mybChangeFrequencyUp" onClick="pChangeGain()">
             Increase Frequency
        </button>

        <button  id="mybChangeGainFrequencyDown" onClick="pChangeGain2()">
             Decrease Frequency
        </button>
<INPUT TYPE="text" NAME="numChangeGainFrequency" ID="numChangeGainFrequency" VALUE="">
<br>




<canvas id="myCanvasDisplay" width="2500" height="2000" >
Your browser does not support the HTML canvas tag.</canvas>


<div name="spritesheet" id="spritesheet" class="spritesheet">













<SCRIPT LANGUAGE="JavaScript">




function favTutorial() {  
var mylist = document.getElementById("myList");  
document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  

//fill text box with selected ID's individualRamblings
document.getElementById("texxxtramblings").value = mylist.options[mylist.selectedIndex].text; 
}  












function readText (form) {
    TestVar =form.inputbox.value;
    alert ("You typed: " + TestVar);
}






</SCRIPT>



















































<script src='codeCopy-halflowerfrequenciesanswering-Copy-Copy.js'></script>




</body>

</html>