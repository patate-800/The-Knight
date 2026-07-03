let jsp = false;


let level1 = [
    '                                                     ',
    '                                                     ',
    '                                                     ',
    '    s                                                ',
    '   ggggg                                             ',
    '                                                     ',
    '             c                                       ',
    '      ggggggggg                                      ',
    '                                                     ',
    '                              c                      ',
    '                              ppppggggg              ',
    '                                                     ',
    '             c    m                                  ',
    '           ggggggggg                     m           ',
    '                                       gggggg        ',
    '                                                     ',
    '                                                     ',
    '        m     c                                  m   ',
    'ggggggggggggggggg       ggggggggggggggggggggggggggggg',
    'dddddddddddddddd       dddddddddddddddddddddddddddddd',
    'ddddddddddddddd        dddddddddddddddddddddddddddddd',
    'dddddddddddddd         dddddddddc           ddddddddd',
    'dddddddddddddd         ddddddddd                   dd',
    'dddddddddddddd    m    qqqqqqqqq              dddd dd',
    'dddddddddddddddddddddddddddddddddddddddddddddddddd dd',
    'r                                                   r',
    'r                                                   r',
    'r                                                   r',
    'rb        cccccccccccccccccccccccccccc              r',
    'ggggggggggpppgggggggggggggggggggggggggggggggggggggggg',

]

let level2 = [

    'gggggggggggggggggggggggggggggggggggg     gggggggggggg',
    'dddddddddddddddddddddddddddddddddd     dddddddddddddd',
    'dddddddddddddddddddddddddddddddddd     dddddddddddddd',
    'dddddddddddddddddddddddddddddddddddd     dddddddddddd',
    'dddddddddddddddddddddddddddddddddddddd     dddddddddd',
    'ddddddddddddddddddddddddddddddddddddddd     ddddddddd',
    'ddddddddddddddddddddddddddddddddddddddddd    dddddddd',
    'ddddddddddddddd       dddddddddddddddddddd     dddddd',
    'ddddddddddddddd                  dddddddddd     ddddd',
    'ddddddddddddddd                    ddddddd    ddddddd',
    'ddddddddddddddddd                    dddd    dddddddd',
    'ddddddddddddddddddd                dddd     ddddddddd',
    'ddddddddddddddddddddd   t        ddddd     dddddddddd',
    'ddddddddddddddddddddddddddddd           ddddddddddddd',
    'ddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    'ddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    'ddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    'ddddddddddddddddddddddddddddddddddddddddddddddddddddd',
    'ddddddddddddddddddddddddddddddddddddddddddddddddddddd'

]

function preload() {
    playerSheet = loadImage("./brackeys_platformer_assets/sprites/knight.png")
    worldSheet = loadImage("./brackeys_platformer_assets/sprites/world_tileset.png")

    coinSheet = loadImage("./brackeys_platformer_assets/sprites/coin.png")
    coinSound = loadSound("./brackeys_platformer_assets/sounds/coin.wav")

    mechantSheet = loadImage("./brackeys_platformer_assets/sprites/jsp.png")
}



function setup() {
    new Canvas(innerWidth / 4, innerHeight / 4, "pixelated x4")

    frameRate(60)

    player = new Sprite()

    player.x = 144
    player.y = 160

    player.debug = true;
    player.w = 12
    player.h = 12
    player.anis.offset.y = -4;
    player.vie = 3

    player.color = color(255, 0, 0)
    player.rotationLock = true;
    player.bounciness = 0

    player.spriteSheet = playerSheet;
    player.addAnis({
        idle: { w: 32, h: 32, row: 0, col: 0, frames: 4 }
    })



    dirt = new Group()
    dirt.w = 16
    dirt.h = 16
    dirt.spriteSheet = worldSheet
    dirt.addAni({ w: 16, h: 16, col: 0, row: 1 })
    dirt.collider = 'static'
    dirt.tile = "d"

    fake_dirt = new Group()
    fake_dirt.w = 16
    fake_dirt.h = 16
    fake_dirt.spriteSheet = worldSheet
    fake_dirt.addAni({ w: 16, h: 16, col: 0, row: 1 })
    fake_dirt.collider = 'none'
    fake_dirt.tile = "q"

    grass = new Group()
    grass.w = 16
    grass.h = 16
    grass.spriteSheet = worldSheet
    grass.addAni({ w: 16, h: 16, col: 0, row: 0 })
    grass.collider = 'static'
    grass.tile = "g"

    fake_grass = new Group()
    fake_grass.w = 16
    fake_grass.h = 16
    fake_grass.spriteSheet = worldSheet
    fake_grass.addAni({ w: 16, h: 16, col: 0, row: 0 })
    fake_grass.collider = 'none'
    fake_grass.tile = "p"

    mushroume = new Group()
    mushroume.w = 16
    mushroume.h = 16
    mushroume.spriteSheet = worldSheet
    mushroume.addAni({ w: 16, h: 16, col: 7, row: 5 })
    mushroume.collider = 'static'
    mushroume.tile = "m"
    mushroume.bounciness = 2

    signe = new Group()
    signe.w = 16
    signe.h = 16
    signe.spriteSheet = worldSheet
    signe.addAni({ w: 16, h: 16, col: 8, row: 4 })
    signe.collider = 'none'
    signe.tile = "s"

    signe2 = new Group()
    signe2.w = 16
    signe2.h = 16
    signe2.spriteSheet = worldSheet
    signe2.addAni({ w: 16, h: 16, col: 8, row: 4 })
    signe2.collider = 'none'
    signe2.tile = "t"

    invisible_block = new Group()
    invisible_block.w = 16
    invisible_block.h = 16
    invisible_block.spriteSheet = worldSheet
    invisible_block.addAni({ w: 16, h: 16, col: 14, row: 0 })
    invisible_block.collider = 'static'
    invisible_block.tile = "r"

    mechant = new Sprite()
    mechant.collider = 'none'
    mechant.layer = 10
    mechant.spriteSheet = mechantSheet
    mechant.addAni({ w: 64, h: 64, col: 0, row: 0, frames: 71 })
    mechant.visible = false;
    mechant.ani.looping = false

    biere = new Group()
    biere.w = 16
    biere.h = 16
    biere.spriteSheet = worldSheet
    biere.addAni({ w: 16, h: 16, col: 0, row: 7 })
    biere.collider = 'none'
    biere.tile = "b"

    coins = new Group()
    coins.w = 16
    coins.h = 16
    coins.spriteSheet = coinSheet
    coins.addAni({ w: 16, h: 16, col: 0, row: 0, frames: 12 })
    coins.collider = 'none'
    coins.tile = "c"

    tiles = new Tiles(level1, 0, 0, 16, 16)


    world.gravity.y = 9.81
}

function draw() {
    background(84, 224, 255)


    camera.x = player.x
    camera.y = player.y

    if (kb.pressing("right")) {
        player.vel.x = 1, 5
        player.mirror.x = false;
    }

    if (kb.pressing("left")) {
        player.vel.x = -1, 5
        player.mirror.x = true;
    }

    if (kb.pressing("up") && tiles.colliding(player)) {
        player.vel.y = -4
    }

    if (kb.pressed('e')) {
        let proj = new Sprite()
        proj.x = player.x
        proj.y = player.y - 10
        proj.vel.x = player.mirror.x ? - 10 : 10;
        proj.color = color(255, 0, 0)
        proj.d = 4;

        proj.colliding(tiles, () => {
            proj.remove()
        })



    }



    text('vies: ' + player.vie, 20, 20)

    if (biere.overlapping(player)) {
        tiles.remove()
        tiles = new Tiles(level2, 0, 0, 16, 16)
        player.y = -100
    }


    for (let coin of coins)  {
        if (coin.overlapping(player)){
            coin.remove();
            coinSound.play()
    }
 } 

}


function postProcess() {
    if (player.overlapping(signe)) {
        if (jsp == false) {
            text("LoL the next level was not here", 10, 10);
            mechant.visible = true;
            mechant.x = player.x;
            mechant.y = player.y;
            mechant.scale = 5;
            mechant.ani.play()
            tiles.visible = false
            jsp = true;
            
        }
    } else {
        mechant.visible = false;
        tiles.visible = true
        
    
        


    }

    if (player.overlapping(signe2)) {
        text("this his the end", 10, 10);


    }

}