
var _seeds = [];

void setup(){
	console.log("gr3ph.k0e.4.pde - js/processing mix");

  	size(screen.width, screen.height);
  	background(42);
  	frameRate(46);


}

void draw(){  

	if (_seeds.length < 3){
		var n = new Seed();
		_seeds.push(n);
	};

	for (var i = _seeds.length - 1; i >= 0; i--) {
		_seeds[i].grow();
	};

}

interface Growth {void grow();}

class Seed implements Growth{

	int count;
	int age;
	int len;
	float step;

	float tx;
	float ty;
	float xPos;
	float yPos;
	float rot;

	color stk;

	Seed () {
		update();
	}

	void update(){

		count 	= 0;
		age 	= random(150,600);
		step 	= 20;
		len 	= random(screen.width/2,screen.width);

		tx 		= screen.width/2;
		ty 		= screen.height/2;

		xPos 	= 0;
		yPos 	= 0;
		rot 	= 180;

		if(random(10)>5){
			stk 	= color(#ffffff);
		} else {
			stk 	= color(#000000);
		}

	}

	void grow (){

		if (count > age){
			update();
		}

		count++;
		yPos 	+= 0.01;
		xPos 	+= 0.01;
		rot 	+= 0.001;

		draw();
	}

	void draw(){
		
		float lastx 	= -999;
		float lasty 	= -999;
		float ynoise 	= random(40,60);
		float lng 		= (screen.width-len)+random(50,350);

		pushMatrix();
		stroke(stk, 150);			
		translate(tx,ty);
	
		for (int x=0; x<= lng; x+=step) {
			y = yPos + noise(ynoise) * random(2);

			rot += .0001;
			rotate(rot);

			if (lastx > -999) {
				line(x, y, lastx, lasty);
			}

			lastx = x;
			lasty = y;

			ynoise += 0.01;

		}

		popMatrix();

	}

}