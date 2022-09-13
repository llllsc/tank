class bomb {
    constructor(x, y) {
        this.bomb=document.createElement('div');
        this.bomb.className+='bomb';
        this.bomb.style.left=x+"px";
        this.bomb.style.top=y+"px";
        document.querySelector('.map').appendChild(this.bomb);
    }
}
