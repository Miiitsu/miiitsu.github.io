
class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = [];
        this.draw = (color) => {
            ctx.fillStyle = color;
            for (var i = 0; i < this.tail.length; i++) {
                ctx.fillStyle = color;
                ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
            }
            ctx.fillRect(this.x, this.y, scale, scale);
        };
        this.upDate = () => {
            this.x += this.xSpeed;
            this.y += this.ySpeed;
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
            this.tail[this.total] = { x: this.x, y: this.y };
            if (this.x > context.width)
                this.x = 0;
            if (this.x < 0)
                this.x = context.width;
            if (this.y > context.height)
                this.y = 0;
            if (this.y < 0)
                this.y = context.height;
        };

        this.changeDirection = (direction) => {
            switch (direction) {
                case "Up":
                    if(!this.ySpeed){
                        this.xSpeed = 0;
                        this.ySpeed = -scale * 1;
                    }
                    break;
                case "Down":
                    if(!this.ySpeed){
                        this.xSpeed = 0;
                        this.ySpeed = scale * 1;
                    }
                    break;
                case "Left":
                    if(!this.xSpeed){
                        this.xSpeed = -scale * 1;
                        this.ySpeed = 0;
                    }
                    break;
                case "Right":
                    if(!this.xSpeed){
                        this.xSpeed = scale * 1;
                        this.ySpeed = 0;
                    }
                    break;
            }
        };
        this.eatFruit = (fruit) => {
            if (this.x === fruit.x && this.y === fruit.y) {
                console.log("tail x", this.tail.x)
                this.total++;
                console.log(this.total)
                return true;
            }
        };

        this.collision = () => {
            for(var i = 0; i < this.tail.length-1; i++){
                if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                    this.total = 0;
                    this.tail = [];
                    return true
                }
            }
        }
    }
}
