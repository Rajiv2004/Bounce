class Bal{
    x;
    y;
    speedX;
    speedY;
    kleur;

    constructor(_x, _y, _speedX, _speedY){
        this.x= _x;
        this.y= _y;
        this.speedX= _speedX;
        this.speedY=_speedY;
        this.kleur = color(255,0,0);

    }
   

  

    update(){
        
        
        if(this.x <= 0 || this.x >=1280){
            this.speedX= this.speedX * -1;
        }
        if(this.y <= 0 || this.y >= 720){
            this.speedY= this.speedY * -1;
        }
    }
    show(){
        fill(this.kleur);
        ellipse(this.x, this.y,80,80);
    }
}