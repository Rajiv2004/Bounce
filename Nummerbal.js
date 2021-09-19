class NummerBal extends bal{
    nummer;

    
    constructor(_x, _y, _speedX, _speedY,_nummer){
        this.x= _x;
        this.y= _y;
        this.speedX= _speedX;
        this.speedY=_speedY;
        this.nummer=_nummer;
        

    }

show(){
    fill(0, 0, 0);
    ellipse(this.x, this.y, 200, 200);
}














}