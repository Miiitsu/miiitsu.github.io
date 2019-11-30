function Fruit() {
    this.x = 0;
    this.y = 0;

    this.location = () => {
        this.x =(Math.floor(Math.random()* rows - 1) + 1) * scale;
        this.y =(Math.floor(Math.random()* columns - 1) + 1) * scale;
    }

    this.draw = () =>{

        ctx.fillStyle = "#282E33";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}