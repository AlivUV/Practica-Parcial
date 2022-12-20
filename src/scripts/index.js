let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

function preload() {
  this.load.setBaseURL('http://labs.phaser.io')

  this.load.image('sky', 'assets/skies/space3.png')
  // this.load.image('player', 'assets/sprites/phaser3-logo.png')
  // this.load.image('red', 'assets/particles/red.png')
}

function create() {
  this.add.image(400, 300, 'sky')

  // let particles = this.add.particles('red')

  // let emitter = particles.createEmitter({
  //   speed: 100,
  //   scale: { start: 1, end: 0 },
  //   blendMode: 'ADD'
  // })

  player = this.physics.add.image(400, 100, 'player')

  player.setBounce(1, 1)
  player.setCollideWorldBounds(true)

  // emitter.startFollow(player)

  addKeys(this.input)

  addPointerEvents(this.input)

}

function update() {
  keydown()
}

// Player
let player

// Keyboard events
let spaceBar

// Game
let game = new Phaser.Game(config)