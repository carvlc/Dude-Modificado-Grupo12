import GameOver from "./escenas/GameOver.js";
import Menu from "./escenas/Menu.js";
import Nivel1 from "./escenas/Nivel1.js";
import Win from "./escenas/Win.js";
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 900 },
            debug: false
        }
    },
    scene: [Menu, Nivel1, GameOver, Win]
};
let game = new Phaser.Game(config);