class GameOverScene extends Phaser.Scene {

  constructor() {
    super({ key: 'gameOver' })
  }

  preload() {
    this.load.image('sky', '/src/assets/Sky.png')
    this.load.image('game_over', '/src/assets/game_over.png')
    this.load.image('click', '/src/assets/click.png')
  }


  create() {
    this.bg = this.add.tileSprite(400, 400, 800, 600, 'sky').setScrollFactor(0)

    this.add.image(400, 200, 'game_over')
    this.add.image(400, 475, 'click').scale = 0.2

    this.input.keyboard.on('keydown', () => { this.scene.start('game') })
    this.input.on('pointerdown', () => { this.scene.start('game') })
  }

  update(time) {
    this.bg.tilePositionX = time * 0.1
  }
}