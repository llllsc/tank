class Mytank extends Tank{
    constructor(x, y,level){
        super(x,y,level);
        this.speed=5+level*1;
        this.life=6;
        this.wholeLife=6;
        this.f=0;
    }
    ruin() {
        tankArray.splice(tankArray.findIndex((item) => item === this), 1);
        this.canShot = false;
        clearInterval(this.Move);
        clearInterval(this.Fire);
        document.querySelector('.map').removeChild(this.tank);
        document.getElementById('over').play();
        alert("失败!");
        location.reload();
    }
}
