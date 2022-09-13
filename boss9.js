class boss9 extends Tank {
    constructor(x, y, level) {
        super(x, y, level);
        this.tank.className +=' boss9';
        this.life = 17;
        this.wholeLife = 17;
    }
    fire() {
        if (!this.canShot) return;
        new Bullet('top', this.tank.offsetLeft, this.tank.offsetTop, this);
        new Bullet('bottom', this.tank.offsetLeft , this.tank.offsetTop, this);
        new Bullet('left', this.tank.offsetLeft , this.tank.offsetTop , this);
        new Bullet('right', this.tank.offsetLeft, this.tank.offsetTop, this);
        document.getElementById('shot').play();
        this.canShot = false;
    }
    autoFire() {
        this.Fire = setInterval(() => {
            this.fire();
        }, 2000);
    }

}