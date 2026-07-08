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
game.onUpdate(function () {
    Colombia.setImage(assets.image`Colombia right`)
    if (Colombia.vx == 0) {
        Colombia.setImage(assets.image`Colombia idle`)
    }
    if (Colombia.vy < 0) {
        Colombia.setImage(assets.image`Colombia jump right`)
    } else if (Colombia.vy > 0) {
        Colombia.setImage(assets.image`Colombia fall right`)
    } else if (Colombia.vy > 0) {
        Colombia.setImage(assets.image`Colombia right`)
    }
    if (Colombia.vx < 0) {
        Colombia.image.flipX()
        Colombia.setImage(Colombia.image)
    }
})
