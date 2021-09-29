<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Machine</title>
        <script src='jquery-2.1.3.min.js'></script>


    <link rel="stylesheet" href="myCSS.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<style>
	html {  }
	body { 
		
	}
	canvas { 
		display: inline-block; 

		width: 95%;
		height: 5%;

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
	background-image: url("robot-4747133_1920.jpg");
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
    background-image: url("Jawpinkandroid.png");
    position: absolute;
    top: var(--move);
    left: 230px;



	width: 80px;
	height: 42px;
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
	</style>
</head>
<body background="machine pentagram.png";>





<div id="myDivBottom"  class="topp">
<center><h1>d</h1></center>
	  <!-- Modal content -->
  <div class="robot-content">
  </div>

<h1 style="background-color:darkred;">
Geraldine Geraldine Geraldine Geraldine Geraldine Geraldine 
</h1>


  	  <!-- Modal content -->
  <div name="robot-jaw2" id="robot-jaw2" class="robot-jaw2">

  </div>
<div id="myDiv" style="background-color:pink; ">

</div>

<div id="myDiv" style="background-color:pink; ">

</div>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<div id="myDiv" style="background-color:hotpink; ">
<center><h1>Talking, Undead, Race of Immortal Robot Toys that Take Over the World</h1></center>







</div>


</div>
</div>


    <div class="components">
        <button class="mybutton" id="start">
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
























<div id="myDivBottom" class="topp2"><center><h1></h1></center>

  <div name="sci" id="sci" class="bottom">
  </div>

</div>











<canvas id="myCanvasDisplay" width="200" height="100" >
Your browser does not support the HTML canvas tag.</canvas>
















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



<FORM NAME="myform" ID="myform" ACTION="" METHOD="GET">
Enter something in the box: <BR>
<INPUT TYPE="text" NAME="inputbox" ID="inputbox" VALUE="">
<P>
<INPUT TYPE="button" NAME="button1" Value="Read" onClick="readText(this.form)">
<INPUT TYPE="button" NAME="button2" Value="Write" onClick="writeText(this.form)">
</FORM>






 <form action='insertconn.php' method='post' id='insertform' >
 <p>
 <input type='text' name='username' placeholder='user name' id='username' />
 </p>
 <p>
 <input type='text' name='password' placeholder='password' id='password' />
 </p>
 <button id='insert'>Insert</button>
 <p id='result'></p>
 </form>







<textarea rows="2" cols="50" id="texxxtramblings">
</textarea>









<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ramblings";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT ID, Data FROM actualRamblings";
$result = $conn->query($sql);

echo "<select name='myList' id='myList'  value='' onchange='favTutorial()' >Student Name</option>"; // list box select command

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "<br>". $row["Data"]."<br>";

    echo "<option value=$row[Data]</option>"; 
  }
} else {
  echo "0 results";
}

$conn->close();
?>













<p> Your selected rambling is:   
<input type = "text" id = "favourite" size = "20" </p>  


<INPUT TYPE="button" NAME="playchosenrambling" Value="play chosen rambling" onClick="playchosenramblingfunction()">















    <div id="controls">
  	 <button id="recordButton">Record</button>
  	 <button id="pauseButton" disabled>Pause</button>
  	 <button id="stopButton" disabled>Stop</button>
    </div>

    <div id="formats">Format: start recording to see sample rate</div>

  	<p><strong>Recordings:</strong></p>
  	<ol id="recordingsList"></ol>
  	<script src="https://cdn.rawgit.com/mattdiamond/Recorderjs/08e7abd9/dist/recorder.js"></script>







<script src='code.js'></script>




</body>

</html>