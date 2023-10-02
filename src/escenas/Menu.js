class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
   
    }
    preload(){
        //cargar audios 

       
        this.load.image("sky","/public/img/sky.png");        
        this.load.image("button","/public/img/play.png");    
    }
    create(){
        
        this.add.image(400,300,"sky");
        this.startButton = this.add.image(400,500,"button").setInteractive();
        this.startButton.on("pointerdown",()=>{
            
            this.scene.start("Nivel3");
        });
    }
    update(){}
}

export default Menu;