scene.onOverlapTile(SpriteKind.Player, assets.tile`empty cave`, function (sprite, location) {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`background`)
mySprite = sprites.create(assets.image`truck2`, SpriteKind.Player)
mySprite.ay = 500
animation.runImageAnimation(
mySprite,
assets.animation`truck2 animated`,
100,
true
)
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
