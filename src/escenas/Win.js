class Win extends Phaser.Scene {
    constructor() {
        super('Win');
    }
    init(data) {
        this.puntaje = data.puntaje;
    }

    preload() {
        this.load.image('winner', '../../public/img/win.PNG')
    }

    create() {
        

        this.win = this.add.image(400, 300, 'winner').setInteractive();

        this.win.on('pointerdown', () => {
            this.scene.start('Menu');
        });

        this.scoreText = this.add.text(200, 100, 'Puntaje: 0', { fontSize: '32px', fill: '#fff' });
        this.scoreText.setText('Puntaje: ' + this.puntaje);

    }
}

export default Win;