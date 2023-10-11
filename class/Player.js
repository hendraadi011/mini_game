class Player {
    constructor(props) {
        this.width = props.width;
        this.height = props.height;
        this.speed = props.speed;
        this.color = props.color;
        this.position = {
            x: props.position.x,
            y: props.position.y
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.heightJump = 100;
        this.gravity = 0.5;
    }
    
    //kinematic equation physic
    // height jump = vi ^ 2 / (2 * gravitasi)
    // vi = sqrt(2 * g * h)

    jump() {
        return this.velocity.y = -Math.sqrt(2 * this.gravity * this.heightJump);
    }

    moveRight() {
        return  this.velocity.x = 1 * this.speed;
    }

    moveLeft() {
        return this.velocity.x = -1 * this.speed;
    }


    update() {

        const ground = canvas.height - this.height;
        const rightWall = canvas.width - this.width;
        // const leftWall = canvas.width + this.width;

        this.velocity.y += this.gravity;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if(player.position.y > ground) {
          this.position.y = ground;
          this.jump();
        }

        if(this.position.x > rightWall){
            this.velocity.x *= -1
            // console.log('kiri')
        }else if(this.position.x < 0) {
            this.velocity.x *= -1
        }
    }

    create() {
        board.fillStyle = this.color;
        board.fillRect(this.position.x, this.position.y, this.width, this.height);

    }


}