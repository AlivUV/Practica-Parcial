let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1000 }
    }
  },
  scene: [GameScene, GameOverScene]
}


// Player
let player

// Game
let game = new Phaser.Game(config)