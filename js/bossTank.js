class bossTank extends Tank{
    constructor(x,y,level){
        super(x,y,level);
        this.speed=5+level*2;
        this.life=10+level*2;
        this.wholeLife=10+level*2;
        if(level==7){
            this.life=10;
            this.wholeLife=10;
            this.speed=4;
        }
        if(level==14){
            this.life=23;
            this.wholeLife=23;
            this.speed=4;
        }
        this.tank.className+=' boss';
    }
    autoMove() {
        let t;
        if(level<=6){
        this.Move = setInterval(() => {
            clearInterval(t);
            let arr = ['top', 'bottom', 'left', 'right'];
            let rand = Math.floor((Math.random() * 4));
            t = setInterval(() => {
                this.move(arr[rand]);
            }, 50);
        }, 1000)
        this.Fire = setInterval(() => {
            this.fire();
        }, 1000)
    }
    if(level==7){
        this.Move=setInterval(()=>{    
                this.move('bottom');
        },250);
        this.Fire = setInterval(() => {
            this.fire();
        }, Math.random()*8000+8000);
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
}