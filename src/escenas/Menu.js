class Menu extends Phaser.Scene{
    constructor(){
        super('Menu');
    }

    preload(){
        this.load.image('background', '../../public/img/menu.PNG');
        this.load.image('button', '../../public/img/start.png')
    }

    create(){
        this.add.image(400,300,'background');
        this.startButton = this.add.image(400,400, 'button').setInteractive();
        this.startButton.on('pointerdown', ()=>{
            this.scene.start('Nivel1');
        })
    }
}

export default Menu;