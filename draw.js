var context = document.querySelector("#gameCanvas");
const ctx = context.getContext("2d");
const scale = 10;
const rows = context.height / scale;
const columns = context.width / scale;
var score = document.getElementById("score");
const gameParams = {
    easy: {ms: 150, color: '#9CDCFE', colorCanvas: '#121212'},
    hard: {ms: 50, color: '#9CDCFE', colorCanvas: '#B60000'},
}


var snake;
var currentInt;
var lastUsedMode = 'easy';

resetGame = () => {
    clearInterval(currentInt)
}

gameOn = (mode) => {
    resetGame()

    lastUsedMode = mode;
    color = gameParams[mode]['color']
    colorCanvas = gameParams[mode]['colorCanvas']
    
    context.style.backgroundColor = colorCanvas
    snake = new Snake();
    score.innerHTML = snake.total
    var fruit = new Fruit();
    fruit.location();

    currentInt = setInterval(() => {
        ctx.clearRect(0, 0, context.width, context.height);
        snake.draw(color);
        fruit.draw();
        snake.upDate();

        if (snake.eatFruit(fruit)){
            console.log("Ate!")
            fruit.location();
            snake.upDate();
            score.innerHTML = snake.total;
        }

        if (snake.collision()){
            score.innerHTML = snake.total;
        }
    }, gameParams[mode]['ms'])
}
 newGame = () => {
     console.log("clicked");
     gameOn(lastUsedMode)
}

window.addEventListener('keydown', ((ev)=> {
    const direction = ev.key.replace("Arrow", "");
    snake.changeDirection(direction);
}))