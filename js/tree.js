class tree {
    constructor(x, y) {
        this.tree = document.createElement('div');
        this.tree.className += `tree`;
        this.tree.style.left = `${x}px`;
        this.tree.style.top = `${y}px`;
        document.querySelector('.map').appendChild(this.tree);
    }
}
