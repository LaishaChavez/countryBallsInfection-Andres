namespace SpriteKind {
    export const Ayudante = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Colombia.vy = -100
})
function establecerAyudantes () {
    Ayudante1 = sprites.create(assets.image`Ayudante ecuador`, SpriteKind.Ayudante)
    Ayudante2 = sprites.create(assets.image`Ayudante panama`, SpriteKind.Ayudante)
    Ayudante1.ay = 200
    Ayudante2.ay = 200
}
let direccion = 0
let Ayudante2: Sprite = null
let Ayudante1: Sprite = null
let Colombia: Sprite = null
scene.setBackgroundImage(assets.image`Ciudad`)
Colombia = sprites.create(assets.image`Colombia idle`, SpriteKind.Player)
controller.moveSprite(Colombia)
Colombia.ay = 200
Colombia.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`nivel1`)
establecerAyudantes()
game.onUpdate(function () {
    Colombia.setImage(assets.image`Colombia right`)
    direccion = 1
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
        direccion = -1
    }
})
game.onUpdate(function () {
    Ayudante1.vx = (Colombia.x - direccion * 15 - Ayudante1.x) * 6
    Ayudante2.vx = (Ayudante1.x - direccion * 15 - Ayudante2.x) * 6
    if (Ayudante1.isHittingTile(CollisionDirection.Bottom)) {
        if (Colombia.y < Ayudante1.y - 10) {
            Ayudante1.vy = -100
        }
    }
    if (Ayudante2.isHittingTile(CollisionDirection.Bottom)) {
        if (Ayudante1.y < Ayudante2.y - 10) {
            Ayudante2.vy = -100
        }
    }
})
