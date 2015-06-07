/**
 * Play around with P5 - I used to like Processing, it was very accessible, so trying out p5
 */


var frameRater = null;

/**
 * Go large
 */
function setup() {
	createCanvas(displayWidth, displayHeight, 'webgl');

	frameRater = new ShowFrameRate();
}

function draw() {
	ellipse(mouseX, mouseY, Math.random() * 100, Math.random() * 100);
	frameRater.on();
}


/**
 * Display frame rate in top left of display
 */
function ShowFrameRate() {

	this.textHeight = 25;
	this.fpsString = 'FPS : ';

	this.on = function () {
		push();
		translate(0, 0);

		textSize(16);
		textAlign(RIGHT);

		var textDisplayWidth = textWidth(this.fpsString + '999');

		fill(255);
		noStroke();
		rect(0, 0, textDisplayWidth, this.textHeight);
		fill(0);

		text(this.fpsString + Math.floor(getFrameRate()), textDisplayWidth, this.textHeight);
		pop();
	}
}