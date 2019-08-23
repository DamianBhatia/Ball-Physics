var ball;

function setup() {
	createCanvas(600,600);
	ball = new Ball(width/2, height/4, 70, 0.90);
}

function draw() {
	//Has to be inside the draw() function for position to update
	background(105,105,105);
	ball.show();
	ball.update();
}

function Ball(x, y, radius, friction) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	//Acceleration
	this.dy = 0;	
	//Amount of speed lost
	this.friction = friction;

	this.show = function() {
		fill(100, 230, 200);
		ellipse(this.x, this.y, this.radius, this.radius);	
	}

	this.update = function() {
		//If at the border set to negative acceleration and lost some to friction
		if(this.y + this.radius + this.dy - this.radius/2 > height) {
			this.dy = -this.dy * this.friction;
		} else {
			//Acceleration grows exponentially
			this.dy += 1;
		}
		this.y += this.dy;
	}

}


