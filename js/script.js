let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
let jogo = setInterval(iniciarJogo, 100);
let direction = "right";
document.addEventListener("keydown", update);

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect = (0, 0, 16 * box, 16 * box) ;
}

function criarSnake(){
    for(i=0; i < snake; i++){
        context.fillStyle = green;
        context.fillRect = (snake[i].x, snake[i].y, box, box);

    }
}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect = (food.x, food.y, box, box);
}

function update(event){
    if(event.keycode == 37 && direction != "right") direction = "left";
    if(event.keycode == 38 && direction != "down") direction = "up";
    if(event.keycode == 39 && direction != "left") direction = "right";
    if(event.keycode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
    
    criarBG();
    criarSnake();
    drawFood();

    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for(i=1; i<snake.length; i++){
        if(snake[0].x == snake[1].x && snake[0].y == snake[1].y){
            clearInterval(jogo);
            alert('GAME OVER :(');
        }
    }

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == 'right') snakeX += box;
    if(direction == 'left') snakeX -= box;
    if(direction == 'up') snakeY += box;
    if(direction == 'down') snakeY -= box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}