controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Colombia.vy = -100
})
let Colombia: Sprite = null
scene.setBackgroundImage(assets.image`Ciudad`)
Colombia = sprites.create(assets.image`Colombia idle`, SpriteKind.Player)
controller.moveSprite(Colombia)
Colombia.ay = 200
Colombia.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`nivel1`)
