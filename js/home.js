class home {
    constructor(x, y) {
        this.home = document.createElement('div');
        this.home.className += `home`;
        this.home.style.left = `${x}px`;
        this.home.style.top = `${y}px`;
        document.querySelector('.map').appendChild(this.home);
    }
    beFired(x, y) {
        if (x >=this.home.offsetLeft&& x <=this.home.offsetLeft+30&& y >=this.home.offsetTop&&y<=this.home.offsetTop+30) {
            this.ruin();
            return true;
        }
        return false;
    }
    ruin() {
        document.getElementById('over').play();
        alert("失败");
        location.reload();
    }
}