class Ground {
    constructor(image,width, height) {
        this.image = new Image();
        this.image.src = image
        this.width  = width;
        this.height = height;
        this.position = {
            x: 0,
            y: 0,
        }
    }

    create(){
        board.drawImage(this.image, this.position.x, this.position.y);
        // board.drawImage(this.image, this.position.x, this.position.y, this.width, this.height );
        // this.position.x -= 5;
        // board.fillStyle = this.color;
        // board.fillRect(0,0, this.width, this.height)
        // console.log(board.drawImage(this.image, 0,0))
    }

    
}