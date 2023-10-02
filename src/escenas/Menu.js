class Menu extends Phaser.Scene{

    constructor(){
        super("Menu");
    }

    preload(){
        this.load.audio('musica', '/public/sound/BGM_02.wav');
        this.load.image('sky', '/public/img/sky.png');
        this.load.image('button', '/public/img/boton1.png');
    }

    create(){
        this.sonido = this.sound.add('musica');
        const soundConfig = {
            volume: 0.3,
            loop: true
        }
        //arranca con un click, pero carga varias veces el contexto
        // this.sonido.play(soundConfig);

        //con esto solo carga una unica vez
        if (!this.sound.locked) {
            // already unlocked so play
            this.sonido.play(soundConfig)
        }
        else {
            // wait for 'unlocked' to fire and then play
            this.sound.once(Phaser.Sound.Events.UNLOCKED, () =>{
                this.sonido.play(soundConfig)
            })
        }
        this.add.image(400, 300, 'sky');

        this.startButton = this.add.image(400, 500, 'button').setInteractive();
        this.startButton.on('pointerdown', () =>{
            this.scene.start('Nivel2');
        });
    }

}

export default Menu;