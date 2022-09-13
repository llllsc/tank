class softWall {
    constructor(x, y) {
        this.softWall = document.createElement('div');
        this.softWall.className += `softWall`;
        this.softWall.style.left = `${x}px`;
        this.softWall.style.top = `${y}px`;
        this.flag=0;
        document.querySelector('.map').appendChild(this.softWall);
    }
    ruin() {
        if(this.flag==1)return;
        this.flag=1;
        arr.splice(arr.findIndex((item) => item === this), 1);
        document.querySelector('.map').removeChild(this.softWall);
    }
}