import Nivel3 from "./escenas/Nivel3.js"
import GameOver from "./escenas/GameOver.js"
import Win from "./escenas/Win.js"
import Menu from "./escenas/Menu.js"
    let config={
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics:{
            default: "arcade",
            arcade:{
                gravity: {y:300},
                debug:false
            }
        },
 
        scene: [Menu,Nivel3,Win,GameOver]
    }
let game = new Phaser.Game(config);