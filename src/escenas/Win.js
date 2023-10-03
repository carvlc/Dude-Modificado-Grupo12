class Win extends Phaser.Scene{
    constructor(){
        super("Win");
   
    }
  
    init(data) {
        this.puntaje = data.puntaje;
    }
    preload(){
        this.load.audio("sonidoV","/public/sound/victory.mp3");
        this.load.image('fondoWin','../public/img/winFondo.jpg');
      
    }
    create(){
        this.sonido= this.sound.add("sonidoV");
        const soundConfig={
            volume:0.3,
            loop:false
        }
        this.sonido.play(soundConfig);
        console.log("ganaste");
        this.startButton = this.add.image(400,300,"fondoWin").setInteractive();
        this.startButton.on("pointerdown",()=>{
            this.sonido.stop(soundConfig);
            this.scene.start("Menu");
        });
      
      this.scoreText = this.add.text(200, 100, 'Puntaje: 0', { fontSize: '32px', fill: '#fff' });
      this.scoreText.setText('Puntaje: ' + this.puntaje);
    }
    update(){}
}
export default Win;