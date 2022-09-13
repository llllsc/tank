class boss extends Tank{
    constructor(x,y,level){
        super(x,y,level);
        this.speed=15;
        this.life=30;
        this.wholeLife=30;
        if(level==7){
            this.speed=3;
            this.life=20;
            this.wholeLife=20;
        }
        this.tank.className+=' Boss';
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
        }, 500);
    }
    if(level==7){
        this.Move=setInterval(()=>{    
                this.move('bottom');
        },300);
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
        }, 15000);
        this.Fire = setInterval(() => {
            this.fire();
        }, 1500)
    }
    }
    


}
