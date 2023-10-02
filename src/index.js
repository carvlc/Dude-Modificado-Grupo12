import GameOver from "./escenas/GameOver.js";
import Menu from "./escenas/Menu.js";
import Nivel2 from "./escenas/Nivel2.js";

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    scene: [Menu, GameOver, Nivel2]
};
let game = new Phaser.Game(config);