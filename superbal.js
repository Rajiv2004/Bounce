class SuperBal extends Bal{

    show(){
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(this.x, this.y,150,150);
    }
}