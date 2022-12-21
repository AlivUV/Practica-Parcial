function jump() {
  player.setVelocityY(-400)
}


function gameOver() {
  this.time.delayedCall(100, () => { this.scene.start('gameOver') }, [], this)
}


function addAsteroid(i, gap, column, obj) {
  if (Math.abs(i - gap) > 1) {
    const asteroid = column.create(820, i * 50 + 25, 'asteroid')

    asteroid.scale = 0.4

    obj.anims.create({
      key: 'roll',
      frames: obj.anims.generateFrameNumbers('asteroid', { start: 28, end: 64 }),
      frameRate: 10,
      repeat: -1
    })

    asteroid.play('roll', true)

    asteroid.body.allowGravity = false
  }
}


function addColumn(obj) {
  const column = obj.physics.add.group()
  const gap = Math.floor(Math.random() * 10) + 1

  for (let i = 0; i < 12; i++) {
    addAsteroid(i, gap, column, obj)
  }

  column.setVelocityX(-100)
  column.checkWorldBounds = true
  column.outOfBoundsKill = true

  obj.physics.add.overlap(player, column, gameOver, null, obj)
  obj.time.delayedCall(2000 + Math.random() * 1000, addColumn, [obj], obj)
}