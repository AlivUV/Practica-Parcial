function addEvents(input) {
  input.keyboard.on('keydown', keydown)

  input.on('pointerdown', jump)
}


function keydown(evt) {
  if (evt.keyCode === 32 || evt.keyCode === 38) 
    jump()
}