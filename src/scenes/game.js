class GameScene extends Phaser.Scene {

  constructor() {
    super({ key: 'game' })
  }

  preload() {
    this.load.image('player', '/src/assets/UFO.png')
    this.load.image('sky', '/src/assets/Sky.png')
    this.load.spritesheet('asteroid', '/src/assets/Asteroids.png', { frameWidth: 128, frameHeight: 128 })
  }


  create() {
    this.bg = this.add.tileSprite(400, 400, 800, 600, 'sky').setScrollFactor(0)

    player = this.physics.add.image(400, 100, 'player')
    player.scale = 0.15

    player.setBounce(1, 1)
    player.setCollideWorldBounds(true)
    player.body.allowGravity = false

    this.time.delayedCall(2000, addColumn, [this], this)
    this.time.delayedCall(1500, () => {
      player.body.allowGravity = true
      addEvents(this.input)
    }, [this], this)
  }

  update(time) {
    this.bg.tilePositionX = time * 0.1
  }
}