function addKeys(input) {
  spaceBar = input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
}

function addPointerEvents(input) {
  input.on('pointerdown', jump)
}

function keydown() {
  if (spaceBar.isDown)
    jump()
}