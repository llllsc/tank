class Map {
    constructor(mapArray) {
        this.map = mapArray;
    }
    hasBlock(x, y, type) {
        let l = (type == 'tank') ? 40 : 12;
        for (let item of this.map) {
            let flag = 0;
            if (item.softWall != undefined) {
                if (x >item.softWall.offsetLeft - l && x < item.softWall.offsetLeft + item.softWall.offsetWidth && y > item.softWall.offsetTop - l && y <= item.softWall.offsetTop + item.softWall.offsetHeight) {
                    return item;
                }
            }      
            else{
                if (x > item.hardWall.offsetLeft - l && x <item.hardWall.offsetLeft + 50 && y > item.hardWall.offsetTop - l && y <item.hardWall.offsetTop + 50) {
                    return item;
                 }
            }
        }
        return false;
    }
    beFired(x, y, flag) {
        let midFlag = false;
        //flag为0时代表发射子弹的坦克是我方坦克,1时为敌方坦克
        for (let i in tankArray) {
            let item = tankArray[i];
            //item.flag为0时代表击中的是我方坦克
            if (flag == item.flag) {
                midFlag = false;
                continue;
            }
            let itemX = item.tank.offsetLeft;
            let itemY = item.tank.offsetTop;
            if (x >= itemX - 10 && x <= itemX + 35 && y >= itemY && y <= itemY + 29&&item.flag2==undefined) {
                item.beFired();
                midFlag = true;
                break;
            }
            if (x >= itemX+5&& x <= itemX + 70 && y >= itemY && y <= itemY + 80&&item.flag2==3) {
                item.beFired();
                midFlag = true;
                break;
            }
        }
        return midFlag;
    }
    hasTank(x, y, self) {
        let midFlag = false;
        for (let i in tankArray) {
            let item = tankArray[i];
            if (item == self) {
                continue;
            }
            let itemX = item.tank.offsetLeft;
            let itemY = item.tank.offsetTop;
            if (x >= itemX - 40 && x <= itemX + 40 && y >= itemY - 40 && y <= itemY + 40) {
                midFlag = true;
                break;
            }
        }
        return midFlag;
    }
    
    
}