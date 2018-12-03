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
var fail0;
var fail1;
var fail2;
var fail3;
var what = "start";
var shield = false;
var net = false;
var speaker = false;
var chicken = false;
var space = false;
var change;
var c1Fail = 0;
var c2Fail = 0;
var c3Fail = 0;
var c4Fail = 0;
var c5Fail = 0;
var failSum = 0;


//Layout variables
var w = 1280;
var h = 720;
var fw = 260;
var fh = 70;
var challenge = 0;
var pad = 60;
var textFill = 255;
var playFont;

function preload(){
	section0 = loadImage('assets/intro.png');
	section1 = loadImage('assets/instructions.png');
	section2 = loadImage('assets/challengeOneSetup.png');
	section3 = loadImage('assets/challegeOneSuccess.png');
	section4 = loadImage('assets/challengeOneFail.png');
	section5 = loadImage('assets/challengeTwoSetup.png');
	section6 = loadImage('assets/challengeTwoSuccess.png');
	section7 = loadImage('assets/challengeTwoFailure.png');
	section8 = loadImage('assets/finalBattleOne.png');
	section9 = loadImage('assets/finalBattleTwo.png');
	section10 = loadImage('assets/finalBattleThree.png');
	section11 = loadImage('assets/gameVictory.png');
	section12 = loadImage('assets/sec12.jpg');
	section13 = loadImage('assets/sec13.jpg');
	section14 = loadImage('assets/sec14.jpg');
	section15 = loadImage('assets/sec15.jpg');
	playFont = loadFont('assets/PressStart2p-Regular.ttf');
	fail0 = loadImage('assets/lifefull.png');
	fail1 = loadImage('assets/life2.png');
	fail2 = loadImage('assets/life1.png');
}

function setup() {
	createCanvas(w, h + 350);
	if (sectionNum == 0) {
		image(section0, 0, 0, w, h);
	}
	textFont(playFont);
	// textAlign(CENTER, CENTER);
	textSize(34);
	textLeading(46);
	fill(textFill);
}



function draw() {
	background(0);
//BUTTON FUNCTIONALITY
//start screen
if (sectionNum == 0 && what == "start") {
	image(section0, 0, 0, w, h);
	text("Press the SPACE bar to start", pad, h+pad, w - pad, 300);
}

if (sectionNum == 0 && space == true) {
	sectionNum = 1;
	what = "instruct";
	space = false;
}

//instructional
if (sectionNum == 1) {
	image(section1, 0, 0, w, h);
	text("The Surge is coming!! Pick the best object below to thwart each individual attack and avoid the beast before you run out of lives! Press the SPACE bar to continue.", pad, h+pad, w - pad, 300);
}

if (sectionNum == 1 && space == true) {
	change = "challenge 1";
	space = false;
}

if (change === "challenge 1") {
	sectionNum = 2;
}

//challenge 1 setup
if (sectionNum === 2) {
	image(section2, 0, 0, w, h);
	text("The Surge appears from around the corner. We need to divert this thing's attention, try throwing your voice!", pad, h+pad, w - pad, 300);
}

if (sectionNum == 2 && speaker == true) {
	change = "success1";
	speaker = false;
} else if (sectionNum == 2 && net == true) {
	change = "fail 1";
	net = false;
} else if (sectionNum == 2 && shield == true) {
	change = "fail 1";
	shield = false;
} else if (sectionNum == 2 && chicken == true) {
	change = "fail 1";
	chicken = false;
}

if (change === "success1") {
	sectionNum = 3;
}

if (change === "fail 1") {
	sectionNum = 4;
	c1Fail = 1;
}

//challenge 1 success
if (sectionNum === 3) {
	image(section3, 0, 0, w, h);
	text("The Surge is distracted, and you're able to escape! For now... Press SPACE to continue.", pad, h+pad, w - pad, 300);
}

//challenge 1 fail
if (sectionNum === 4) {
	image(section4, 0, 0, w, h);
	text("The Surge saw you and electrifies you! Press SPACE to RUN!!", pad, h+pad, w - pad, 300);
}

if (sectionNum == 3 && space == true) {
	change = "challenge 2";
	space = false;
}

if (sectionNum == 4 && space == true) {
	change = "challenge 2";
	space = false;
}

if (change === "challenge 2") {
	sectionNum = 5;
}

//challenge 2 setup
if (sectionNum == 5) {
	image(section5, 0, 0, w, h);
	text("It's still after you... maybe you can trap him!", pad, h+pad, w - pad, 300);
}

if (sectionNum == 5 && net == true) {
	change = "success2";
	net = false;
} else if (sectionNum == 5 && speaker == true) {
	change = "fail 2";
	speaker = false;
} else if (sectionNum == 5 && shield == true) {
	change = "fail 2";
	shield = false;
} else if (sectionNum == 5 && chicken == true) {
	change = "fail 2";
	chicken = false;
}

if (change === "success2") {
	sectionNum = 6;
}

if (change === "fail 2") {
	sectionNum = 7;
	c2Fail = 1;
}

//challenge 2 success
if (sectionNum == 6) {
	image(section6, 0, 0, w, h);
	text("It worked, your electrifed net has trapped the Surge! Press SPACE to run!" , pad, h+pad, w - pad, 300);
}

//challenge 2 fail
if (sectionNum == 7) {
	image(section7, 0, 0, w, h);
	text("The Surge got you! You are badly hurt. Make a run for it by pressing the SPACE bar!", pad, h+pad, w - pad, 300);
}

if (sectionNum == 6 && space == true) {
	change = "challenge 3";
	space = false;
}

if (sectionNum == 7 && space == true) {
	change = "challenge 3";
	space = false;
}

if (change === "challenge 3") {
	sectionNum = 8;
}


//challenge 3 attack 1
if (sectionNum == 8) {
	image(section8, 0, 0, w, h);
	text("The Surge has escaped your attempts so far, but he's throwing an attack. Block it with your shield!", pad, h+pad, w - pad, 300);
}


if (sectionNum == 8 && shield == true) {
	change = "success3";
	shield = false;
} else if (sectionNum == 8 && speaker == true) {
	change = "fail 3";
	speaker = false;
} else if (sectionNum == 8 && net == true) {
	change = "fail 3";
	net = false;
} else if (sectionNum == 8 && chicken == true) {
	change = "fail 3";
	chicken = false;
}

if (change === "success3") {
	sectionNum = 9;
}

if (change === "fail 3") {
	sectionNum = 9;
	c3Fail = 1;
}

//challenge 3 attack 2
if (sectionNum == 9) {
	image(section9, 0, 0, w, h);
	text("Use your net!!" , pad, h+pad, w - pad, 300);
}

if (sectionNum == 9 && net == true) {
	change = "success4";
	net = false;
} else if (sectionNum == 9 && speaker == true) {
	change = "fail 4";
	speaker = false;
} else if (sectionNum == 9 && shield == true) {
	change = "fail 4";
	shield = false;
} else if (sectionNum == 9 && chicken == true) {
	change = "fail 4";
	chicken = false;
}

if (change === "success4") {
	sectionNum = 10;
}

if (change === "fail 4") {
	sectionNum = 10;
	c4Fail = 1;
}

//challenge 3 attack 3
if (sectionNum == 10) {
	image(section10, 0, 0, w, h);
	text("Take that clucker out!", pad, h+pad, w - pad, 300);
}

if (sectionNum == 10 && chicken == true) {
	change = "success5";
	chicken = false;
} else if (sectionNum == 10 && speaker == true) {
	change = "fail 5";
	speaker = false;
} else if (sectionNum == 10 && shield == true) {
	change = "fail 5";
	shield = false;
} else if (sectionNum == 10 && net == true) {
	change = "fail 5";
	net = false;
}

if (change === "success5") {
	sectionNum = 11;
}

if (change === "fail 5") {
		c5Fail = 1;
}

if (c5Fail === 1 && failSum <= 3) {
		sectionNum = 11;
}



//win!
if (sectionNum == 11) {
	image(section11, 0, 0, w, h);
	text("YOU SURVIVE!! Well done! Refresh the page to try again!", pad, h+pad, w - pad, 300);
}

//game over / fail
if (sectionNum == 12) {
	image(section12, 0, 0, w, h);
	text("YOU LOSE. Refresh the page to try again!", pad, h+pad, w - pad, 300);
}

// if (sectionNum == 11 && space == true) {
// 	space = false;
// 	startOver();
// }
//
// if (sectionNum == 12 && space == true) {
// 	startOver();
// 	space = false;
// }
//
// if (change === "start") {
// 	sectionNum = 0;
// 	what = "start";
// }




// these need to go at end of draw so they remain on top
failSum = (c1Fail + c2Fail + c3Fail + c4Fail + c5Fail);

if (failSum === 0) {
	image(fail0, pad, (h-pad-fh), fw, fh);
}

if (failSum === 1) {
	image(fail1, pad, (h-pad-fh), fw, fh);
}

if (failSum === 2) {
	image(fail2, pad, (h-pad-fh), fw, fh);
}

if (failSum >= 3) {
	sectionNum = 12;
}

}


function keyPressed() {

	//
	if (keyCode === LEFT_ARROW) {
		shield = true;
		speaker = false;
		net = false;
		chicken = false;
		space = false;
	}

	//
	if (keyCode === UP_ARROW) {
		shield = false;
		speaker = true;
		net = false;
		chicken = false;
		space = false;
	}

	//
	if (keyCode === DOWN_ARROW) {
		shield = false;
		speaker = false;
		net = true;
		chicken = false;
		space = false;
	}

	//
	if (keyCode === RIGHT_ARROW) {
		shield = false;
		speaker = false;
		net = false;
		chicken = true;
		space = false;
	}

	if (keyCode === RIGHT_ARROW) {
		shield = false;
		speaker = false;
		net = false;
		chicken = true;
		space = false;
	}

	if (keyCode === 32) {
		shield = false;
		speaker = false;
		net = false;
		chicken = false;
		space = true;
	}

 	return false; // prevent any default behaviour
}

function startOver() {
	what = "start";
	shield = false;
	net = false;
	speaker = false;
	chicken = false;
	space = false;
	c1Fail = 0;
	c2Fail = 0;
	c3Fail = 0;
	c4Fail = 0;
	c5Fail = 0;
	failSum = 0;
	sectionNum = 0;
}
