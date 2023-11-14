import GameOver from "./escenas/GameOver.js";
import Menu from "./escenas/Menu.js";
import Nivel3 from "./escenas/Nivel3.js"
import Nivel2 from "./escenas/Nivel2.js";
import Nivel1 from "./escenas/Nivel1.js";
import Win from "./escenas/Win.js";
import Nivel4 from "./escenas/Nivel4.js";
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [Menu, Nivel1, Nivel2,Nivel3, Nivel4, GameOver, Win]
};
let game = new Phaser.Game(config);