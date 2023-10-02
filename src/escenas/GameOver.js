class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }
    init(data){
        this.puntaje = data.puntaje;
    }

    preload() {
        this.load.image('gameover', '../../public/img/gameover.PNG')
    }

    create() {
        

        this.gameover =  this.add.image(400, 300, 'gameover').setInteractive();
        
        this.gameover.on('pointerdown', ()=>{
            this.scene.start('Menu');
        });
        this.scoreText = this.add.text(200, 550, 'Puntaje: 0', { fontSize: '40px', fill: '#d42068' });
        this.scoreText.setText('Puntaje: '+this.puntaje);
    }
}

export default GameOver;