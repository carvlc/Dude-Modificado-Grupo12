class GameOver extends Phaser.Scene{
    constructor(){
        super("GameOver");
   
    }
    preload(){
        this.load.audio("sonido","/public/sound/M4_He_laughed.mp3");
        this.load.image('fondoLose','../public/img/LoseFondo.jpg');
      
    }
    create(){
        console.log("perdiste");
        this.sonido= this.sound.add("sonido");
        const soundConfig={
            volume:1,
            loop:false
        }
        this.sonido.play(soundConfig);
        this.startButton = this.add.image(400,300,"fondoLose").setInteractive();
        this.startButton.on("pointerdown",()=>{
            this.sonido.stop(soundConfig);
            this.scene.start("Menu");
        });
    }
    update(){}
}
export default GameOver;