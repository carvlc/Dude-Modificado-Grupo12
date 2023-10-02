class GameOver extends Phaser.Scene{

    constructor(){
        super("GameOver");
    }

     preload(){
        this.load.image('GameOver', '/public/img/GameOver.png');
     }

     create(){
        this.add.image(400, 300, 'GameOver');
     }

}

export default GameOver;