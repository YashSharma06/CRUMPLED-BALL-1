class PaperBall {
    constructor(x,y) {
        var ball_options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2   
        }
        this.body = Bodies.circle( x, y, 10, ball_options);
        this.radius = 10;
        World.add(world,this.body)
    }
    display(){
        push ();
        var pos = this.body.position;
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        strokeWeight (5);
        stroke ("red");
        fill("red");
        ellipse(0, 0, this.radius);
        pop ();
    }
}