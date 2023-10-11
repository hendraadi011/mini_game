const canvas = document.querySelector('canvas');
const board = canvas.getContext("2d");
const jumpButton = document.getElementById('jump-button');
const leftButton = document.getElementById('move-left');
const rightButton = document.getElementById('move-right');

canvas.width = DISPLAY_PIXEL.WIDTH * ASPECT_RATIO.WIDTH;
canvas.height = DISPLAY_PIXEL.HEIGHT * ASPECT_RATIO.HEIGHT;




const playerProperty = {
    width: 50,
    height: 50,
    speed: 10,
    color: "tomato",
    position: {
        x: 0,
        y: 0,
    }
}

const enemyProperty = {
    width: 50,
    height: 50,
    speed: 100,
    color: "black",
    position: {
        x: canvas.width - 100,
        y: canvas.height - 50,
    }
}


const ground = new Ground('img/bg.jpg',canvas.width, canvas.height);
const player = new Player(playerProperty);
const enemy = new Player(enemyProperty);






const animate = () =>  {
    ground.create();
    player.create();
    enemy.create();
    player.update();
    enemy.update();

    window.requestAnimationFrame(animate)
}

// Tambahkan event listener untuk klik pada tombol
jumpButton.addEventListener('click', function () {
    player.jump(); // Ganti ini dengan aksi yang sesuai untuk melompat
});


// Tambahkan event listener untuk klik pada tombol
leftButton.addEventListener('click', function () {
    player.moveLeft();
});

rightButton.addEventListener('click', function() {
    player.moveRight();
})



window.addEventListener('keydown', function (callback) {
    switch (callback.key) {
        case "ArrowUp" :
            player.jump();
            break;
        case "ArrowLeft" :
            player.moveLeft();
             break;
        case "ArrowRight" :
            player.moveRight();
            
            break;
        default:
            break;

    }


})

animate();