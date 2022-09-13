class boss10 extends Tank {
    constructor(x, y, level) {
        super(x, y, level);
        this.tank.className += ' boss10';
        this.life = 203;
        this.wholeLife = 203;
        this.flag2 = 3;
        this.interval = 1000;
        if(level==14){
            this.life = 303;
            this.wholeLife = 303;
            
        }
    }
    fire() {
        // if (!this.canShot) return;
        if(level==14)
        new Bullet('top', this.tank.offsetLeft , this.tank.offsetTop, this);
        else   new Bullet('top', this.tank.offsetLeft+17 , this.tank.offsetTop, this);
        new Bullet('bottom', this.tank.offsetLeft + 17, this.tank.offsetTop, this);
        new Bullet('left', this.tank.offsetLeft + 17, this.tank.offsetTop + 17, this);
        new Bullet('right', this.tank.offsetLeft, this.tank.offsetTop + 17, this);
        document.getElementById('shot').play();
        // this.canShot = false;
    }
    autoMove() {
        if(level!=14){
        let t;
        this.Move = setInterval(() => {
            clearInterval(t);
            let arr = ['top', 'bottom', 'left', 'right'];
            let rand = Math.floor((Math.random() * 4));
            t = setInterval(() => {
                this.move(arr[rand]);
            }, 50);
        }, 2000);
        this.Fire = setInterval(() => {
            this.fire();
        }, 1000);
        setInterval(() => {
            this.interval = 1000;
        }, 10000);
        setInterval(() => {
            this.interval = 200;
        },30000);
        setInterval(() => {
            if (this.interval == 200) {
                var f2= setInterval(()=>{
                    this.fire();
                    },200);
                setTimeout(() => {
                   clearInterval(f2);
                }, 10000);
            }
    
        }, 10000);
    }
  else if(level==14){
        var k1 = 0;
        var k2=0;
        var A1 = ["bottom", "right", "top", "left"];
       this.Move=setInterval(() => {
            if (k1 == 4) k1 = 0;
            if(k2>=6) k1=2; 
            this.move(A1[k1]) ;
        }, 50);
        setInterval(() => {
            k1++;k2++;
        }, 30000);
    this.Fire = setInterval(() => {
        this.fire();
    }, 1000);
    setInterval(() => {
        this.interval = 1000;
    }, 10000);
    setInterval(() => {
        this.interval = 200;
    },30000);
    setInterval(() => {
        if (this.interval == 200) {
            var f2= setInterval(()=>{
                this.fire();
                },200);
            setTimeout(() => {
               clearInterval(f2);
            }, 10000);
        }

    }, 10000);
    }   










}
}
