function jump() {
  player.setVelocityY(-400)
}


function gameOver() {
  this.scene.restart()
}


function addBlock(i, gap, column) {
  if (Math.abs(i - gap) > 1) {
    const cube = column.create(800, i * 50 + 25, 'cube')
    cube.body.allowGravity = false
  }
}


function addColumn(obj) {
  const column = obj.physics.add.group()
  const gap = Math.floor(Math.random() * 10) + 1

  for (let i = 0; i < 12; i++) {
    addBlock(i, gap, column)
  }

  column.setVelocityX(-100)
  column.checkWorldBounds = true
  column.outOfBoundsKill = true

  obj.physics.add.overlap(player, column, gameOver, null, obj)
  obj.time.delayedCall(2000 + Math.random() * 1000, addColumn, [obj], obj)
}