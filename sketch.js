//Declare variables

var sectionNum = 0;
var section0;
var section1;
var section2;
var section3;
var section4;
var section5;
var section6;
var section7;
var section8;
var section9;
var section10;
var section11;
var section12;
var section13;
var section14;
var section15;
var failCounter = 0;
var challenge = 0;
var fail0;
var fail1;
var fail2;
var fail3;
var what = "start";
var shield = false;
var net = false;
var speaker = false;
var chicken = false;
var change;


//Layout variables
var w = 1280;
var h = 720;
var fw = 107;
var fh = 258;
var challenge = 0;
var pad = 60;
var textFill = 255;
var playFont;

function preload(){
	section0 = loadImage('assets/video1_intro.jpg');
	section1 = loadImage('assets/sec.jpg');
	section2 = loadImage('assets/sec2.jpg');
	section3 = loadImage('assets/sec3.jpg');
	section4 = loadImage('assets/sec4.jpg');
	section5 = loadImage('assets/sec5.jpg');
	section6 = loadImage('assets/sec6.jpg');
	section7 = loadImage('assets/sec7.jpg');
	section8 = loadImage('assets/sec8.jpg');
	section9 = loadImage('assets/sec9.jpg');
	section10 = loadImage('assets/sec10.jpg');
	section11 = loadImage('assets/sec11.jpg');
	section12 = loadImage('assets/sec12.jpg');
	section13 = loadImage('assets/sec13.jpg');
	section14 = loadImage('assets/sec14.jpg');
	section15 = loadImage('assets/sec15.jpg');
	playFont = loadFont('assets/PressStart2p-Regular.ttf');
	fail0 = loadImage('assets/fail0.png');
	fail1 = loadImage('assets/fail1.png');
	fail2 = loadImage('assets/fail2.png');
	fail3 = loadImage('assets/fail3.png');
	
}

function setup() {
	createCanvas(w, h + 350);
	if (sectionNum == 0) {
		image(section0, 0, 0, w, h);
	}
	textFont(playFont);
	// textAlign(CENTER, CENTER);
	textSize(38);
	fill(textFill);

}



function draw() {
	background(0);
//BUTTON FUNCTIONALITY
//start screen
if (sectionNum == 0 && what == "start") {
	image(section0, 0, 0, w, h);
	challenge = 0;
	text("Press the speaker to start", pad, h+pad, w - pad, 300);
}

if (sectionNum == 0 && speaker == true) {
	sectionNum = 1;
	what = "instruct";
}

//instructional
if (sectionNum == 1) {
	image(section1, 0, 0, w, h);
	text("Something’s coming!! Pick the best object below to thwart each attack and avoid becoming that thing’s lunch! Press the chicken to continue.", pad, h+pad, w - pad, 300);
}

if (sectionNum == 1 && chicken == true) {
	change = "challenge 1";
	chicken = false;
}

if (change === "challenge 1") {
	sectionNum = 2;
}

//challenge 1 setup
if (sectionNum === 2) {
	image(section2, 0, 0, w, h);
	text("We need to divert this thing's attention, try throwing your voice!", pad, h+pad, w - pad, 300);
}

if (sectionNum == 2 && speaker == true) {
	change = "success1";
} else if (sectionNum == 2 && net == true) {
	change = "fail 1";
} else if (sectionNum == 2 && shield == true) {
	change = "fail 1";
} else if (sectionNum == 2 && chicken == true) {
	change = "fail 1";
}

if (change === "success1") {
	sectionNum = 3;
}

if (change === "fail 1") {
	sectionNum = 4;
}

//challenge 1 success
if (sectionNum === 3) {
	image(section3, 0, 0, w, h);
	text("The Surge is distracted, make a run for it!", pad, h+pad, w - pad, 300);
}

//challenge 1 fail
if (sectionNum === 4) {
	image(section4, 0, 0, w, h);
	text("The Surge saw you and electrifies you!", pad, h+pad, w - pad, 300);
}


//challenge 2 setup
if (sectionNum == 5 && challenge == 2) {
	image(section5, 0, 0, w, h);
	text("Running isn't working, you need to trap him!", pad, h+pad, w - pad, 300);
}

//challenge 2 success
if (sectionNum == 6 && challenge == 2) {
	image(section6, 0, 0, w, h);
	challenge = 3;
	text("An electrifed net has trapped the surge!" , pad, h+pad, w - pad, 300);
}

//challenge 2 fail
if (sectionNum == 7 && challenge == 2) {
	image(section7, 0, 0, w, h);
	challenge = 3;
	text("You missed and the Surge nearly gets you!", pad, h+pad, w - pad, 300);
}

//challenge 3 setup
if (sectionNum == 8 && challenge == 3) {
	image(section8, 0, 0, w, h);
	text("The Surge has escaped your attempts", pad, h+pad, w - pad, 300);
}

//challenge 3 attack 1
if (sectionNum == 9 && challenge == 3) {
	image(section9, 0, 0, w, h);
	text("Block!" , pad, h+pad, w - pad, 300);
}

//challenge 3 attack 2
if (sectionNum == 10 && challenge == 3) {
	image(section10, 0, 0, w, h);
	text("Deflect!", pad, h+pad, w - pad, 300);
}

//challenge 3 attack 3
if (sectionNum == 11 && challenge == 3) {
	image(section11, 0, 0, w, h);
	text("Take him out!", pad, h+pad, w - pad, 300);
}

//game over / fail
if (sectionNum == 12) {
	image(section12, 0, 0, w, h);
	text("YOU LOSE", pad, h+pad, w - pad, 300);
}

//win!
if (sectionNum == 13) {
	image(section13, 0, 0, w, h);
	text("YOU WIN!!", pad, h+pad, w - pad, 300);
}

//Play again
if (sectionNum == 14) {
	image(section14, 0, 0, w, h);
	text("Press any key to play again", pad, h+pad, w - pad, 300);
}

// Try again
if (sectionNum == 15) {
	image(section15, 0, 0, w, h);
	text("Press any key to try again", pad, h+pad, w - pad, 300);
}





// these need to go at end of draw so they remain on top
if (failCounter === 0 && challenge >= 1) {
	image(fail0, pad, (h-pad-fh), fw, fh);
}

if (failCounter === 1 && challenge >= 1) {
	image(fail1, pad, (h-pad-fh), fw, fh);
}

if (failCounter === 2 && challenge >= 1) {
	image(fail2, pad, (h-pad-fh), fw, fh);
}

if (failCounter === 3 && challenge >= 1) {
	image(fail3, pad, (h-pad-fh), fw, fh);
}

}


function keyPressed() {

	//
	if (keyCode === LEFT_ARROW) {
		shield = true;
		speaker = false;
		net = false;
		chicken = false;
	}

	//
	if (keyCode === UP_ARROW) {
		shield = false;
		speaker = true;
		net = false;
		chicken = false;
	}

	//
	if (keyCode === DOWN_ARROW) {
		shield = false;
		speaker = false;
		net = true;
		chicken = false;
	}

	//
	if (keyCode === RIGHT_ARROW) {
		shield = false;
		speaker = false;
		net = false;
		chicken = true;
	}

 	return false; // prevent any default behaviour
}
