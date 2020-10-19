class ball
{
	constructor(x, y, width, height, angle)
	{
		var options = {
			density: 1, 
			frictionAir: 0.005
		}
		this.x = x;
		this.y = y;
		this.width=width;
		this.height=height;
		this.body = Bodies.rectangle(this.x,this. y, this.width, this.height, options);
		World.add(world, this.body);
	}
	
	display()
	{
		var angle = this.body.angle; 
		push(); 
		translate(this.body.position.x, this.body.position.y); 
		rotate(angle); 
		
		fill("red");
		ellipse(0, 0, this.width, this.height);
		pop();
	}

}
