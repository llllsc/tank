class Tank {
    constructor(x, y, level) {
        if (!map.hasBlock(x, y, 'tank')) {
            this.dirc = 'top';
            this.tank = document.createElement('div');
            this.tank.className = 'tank';
            this.tank.style.left = `${x}px`;
            this.tank.style.top = `${y}px`;
            this.speed = level * 1.3 + 1;
            this.Move;
            this.Fire;
            this.life = level;
            this.wholeLife = level;
            this.flag = 1; //0为我方坦克,1为敌方坦克
            this.canShot = true;
            document.querySelector('.map').appendChild(this.tank);
            return true;
        }
        return false;
    }
    fire() {
        if (!this.canShot) return;
        new Bullet(this.dirc, this.tank.offsetLeft, this.tank.offsetTop, this);
        if (this.flag == 0)
            document.getElementById('shot').play();
        this.canShot = false;
    }
    move(dirc) {
        let lnum = this.tank.offsetLeft;
        let tnum = this.tank.offsetTop;
        this.dirc = dirc;
        if(level!=14){
        switch (dirc) {
            case 'left':
                this.tank.style.webkitTransform = "rotate(-90deg)";//旋转
                if (lnum <= this.speed) return;
                if (map.hasBlock(lnum - this.speed, tnum, 'tank') || map.hasTank(lnum - this.speed, tnum, this)) {
                    return;
                }
                this.tank.style.left = `${lnum - this.speed}px`;
                break
            case 'right':
                this.tank.style.webkitTransform = "rotate(90deg)";
                if (lnum >= 600) return;
                if (map.hasBlock(lnum + this.speed, tnum, 'tank') || map.hasTank(lnum + this.speed, tnum, this)) {
                    return;
                }
                this.tank.style.left = `${lnum + this.speed}px`;
                break
            case 'top':
                this.tank.style.webkitTransform = "rotate(0deg)";
                if (tnum <= this.speed) return;
                if (map.hasBlock(lnum, tnum - this.speed, 'tank') || map.hasTank(lnum, tnum - this.speed, this)) {
                    return;
                }
                this.tank.style.top = `${tnum - this.speed}px`;
                break
            case 'bottom':
                this.tank.style.webkitTransform = "rotate(180deg)";
                if (tnum >= 605) return;
                if (map.hasBlock(lnum, tnum + this.speed, 'tank') || map.hasTank(lnum, tnum + this.speed, this)) {
                    return;
                }
                this.tank.style.top = `${tnum + this.speed}px`;
                break;
        }
    }
    else {
        switch (dirc) {
            case 'left':
                this.tank.style.webkitTransform = "rotate(-90deg)";//旋转
                if (lnum <= this.speed) return;
                if (map.hasBlock(lnum - this.speed, tnum, 'tank') ) {
                    return;
                }
                this.tank.style.left = `${lnum - this.speed}px`;
                break
            case 'right':
                this.tank.style.webkitTransform = "rotate(90deg)";
                if (lnum >= 600) return;
                if (map.hasBlock(lnum + this.speed, tnum, 'tank') ) {
                    return;
                }
                this.tank.style.left = `${lnum + this.speed}px`;
                break
            case 'top':
                this.tank.style.webkitTransform = "rotate(0deg)";
                if (tnum <= this.speed) return;
                if (map.hasBlock(lnum, tnum - this.speed, 'tank') ) {
                    return;
                }
                this.tank.style.top = `${tnum - this.speed}px`;
                break
            case 'bottom':
                this.tank.style.webkitTransform = "rotate(180deg)";
                if (tnum >= 605) return;
                if (map.hasBlock(lnum, tnum + this.speed, 'tank')) {
                    return;
                }
                this.tank.style.top = `${tnum + this.speed}px`;
                break;
        }
    }
    }
    beFired() {
        this.life--;
        if (this.life == 3) {
            this.ruin();
        }
        let rate = this.life / this.wholeLife;
        this.tank.style.opacity = `${rate}`

    }
    autoMove() {
        let t;
        if (level!=7&&level!=14) {
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
            }, 1500)
        }
        if (level == 7) {
            this.Move = setInterval(() => {
                this.move('bottom');
            }, 250);
            this.Fire = setInterval(() => {
                this.fire();
            }, Math.random()*5000+6000);
        }
        if(level==14){
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
            }, 10000);
            this.Fire = setInterval(() => {
                this.fire();
            }, 1500)
        }
    }
    ruin() {
        let b = new bomb(this.tank.offsetLeft, this.tank.offsetTop);
        setTimeout(() => {
            b.bomb.style.display = "none";
        }, 250);
        document.getElementById('zha').play();

        tankArray.splice(tankArray.findIndex((item) => item === this), 1);
        this.canShot = false;
        clearInterval(this.Move);
        clearInterval(this.Fire);
        document.querySelector('.map').removeChild(this.tank);
    }
}
