let config = {
    type: Phaser.AUTO,
    audio: {
        disableWebAudio: false,
    },
    width: 600,
    height: 600,
    pixelArt: false,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let bulletCooldown = 400;
const pistolMagazine = 12;

let enemySpawnCooldown = 7000;
let game = new Phaser.Game(config);
let bullet;
let bulletTimestamp = Date.now();
let enemySpawnTimestamp = Date.now();
let player;
let cursors;
let keyboard;
let score = 0;
let scoreText;
let live = 3;
let liveText;
let highScoreText;
let randomSpray;
const enemies = [];
const bullets = []; //TODO delete Bullets if to far away

function preload() {
    this.load.image('sky', '../assets/map1.png');
    this.load.spritesheet('enemy', '../assets/enemy1.png', {frameWidth: 576 / 9, frameHeight: 254 / 4});
    this.load.spritesheet('player', '../assets/player.png', {frameWidth: 576 / 9, frameHeight: 254 / 4});
    this.load.image('bullet1.1', '../assets/bullet1.1.png');
    this.load.image('bullet1.2', '../assets/bullet1.2.png');
    this.load.image('hearth', '../assets/live.png', {frameWidth: 30 / 9, frameHeight: 30 / 4});
    this.load.audio('pistolBulletSound', '../assets/pistolBulletSound.wav');
    this.load.audio('enemyDeath', '../assets/enemy1death.wav');
    this.load.audio('gameTrackAbfahrt', '../assets/gameTrackAbfahrt.mp3');
    //TODO make more enemies, make player with other weapons, make more sounds
}


function create() {
    this.add.image(300, 300, 'sky');
    createPlayer(this);
    window.setInterval(enemyMovement, 20)
    cursors = this.input.keyboard.createCursorKeys();
    liveText = this.add.text(16, 16, "Lives: " + live, {fontSize: '32px'});
    scoreText = this.add.text(250, 16, "Score: 000000000", {fontSize: '32px'});
    highScoreText = this.add.text(250, 50, "Highscore: " + localStorage.getItem("highscore"), {fontSize: "10px"});
}

function update() {
    const pistolBulletSound = this.sound.add("pistolBulletSound", {volume: 0.1});
    const gameTrackAbfahrt = this.sound.add("gameTrackAbfahrt", {volume: 0.12});
    gameOver();
    showScore();
    showLive();
    showHighscore();

    if(Date.now() - enemySpawnTimestamp >= enemySpawnCooldown) {
        enemySpawnTimestamp = Date.now();
        if(enemySpawnCooldown>1000) {
            enemySpawnCooldown = enemySpawnCooldown - 1000;
        }
        let enemyPosition = randomNumberEnemyCoord();
        createEnemy(enemyPosition.x, enemyPosition.y, this);
    }

    if (getPlayerDirection()==left) {
        player.setVelocity(-120, 0);
        player.anims.play('left', true);
        randomNumberSpray();
        shootbullet();
            bullet.setVelocity(-1500, randomSpray);
        }



    if (getPlayerDirection()==right) {
        player.setVelocity(120, 0);
        player.anims.play('right', true);
        randomNumberSpray();
        shootbullet();
            bullet.setVelocity(1500, randomSpray);

    }

    if (getPlayerDirection()==up) {
        player.setVelocity(0, -120);
        player.anims.play('up', true);
            shootbullet();
            randomNumberSpray();
            bullet.setVelocity(randomSpray, -1000);
        }


    if (getPlayerDirection()==down) {
        player.setVelocity(0, 120);
        player.anims.play('down', true);
        shootbullet();
            randomNumberSpray();
            bullet.setVelocity(randomSpray, 1500);
        }



    if (cursors.left.isUp && cursors.right.isUp && cursors.up.isUp && cursors.down.isUp) {
        player.setVelocity(0, 0);
        player.anims.stop();
    }

}

function gameOver(){
    if(live === 0){
        for(let index in enemies) {
            enemies[index].disableBody(true, true);
        }

        if(score > parseInt(localStorage.getItem("highscore"))) {
            localStorage.setItem("highscore", score.toString())
            highScoreText.setText("Highscore: " + score.toString())
        }
        score = 0;//TODO final score, restart game button
        live = 3;
        enemySpawnCooldown = 7000;
    }
}

function showScore() {
    let tempString = "";
    for (let i = 0; i < 9 - score.toString().length; i++) tempString += "0";
    scoreText.setText("Score: " + tempString + score);
}

function showLive() {
    liveText.setText("Lives: " + live);
}

function showHighscore() {
    if(localStorage.getItem("highscore") === undefined || localStorage.getItem("highscore") === null) {
        localStorage.setItem("highscore", 0)
    }
}

function createEnemy(enemyX, enemyY, game) {
    const enemy = game.physics.add.sprite(enemyX, enemyY, 'enemy');
    enemy.setCollideWorldBounds(true);
    enemy.setBounce(true);
    game.physics.add.overlap(player, enemy, hitEnemyAsPlayer, null, this);
    enemies[enemies.length] = enemy;
}

function enemyMovement() {
    for (let index in enemies) {
        const enemy = enemies[index];
        const x = -(enemy.x - player.x);
        const y = -(enemy.y - player.y);
        enemy.setVelocity(x > 150 || x < 150 ? x / 2 : x / 2.1, x > 150 || x < 150 ? y / 2 : y / 2.1);
    }
}

function hitEnemyAsBullet(bullet, enemy) {
    const enemyDeath = this.sound.add("enemyDeath", {volume: 0.3});
    bullet.disableBody(true, true);
    enemy.disableBody(true, true);
    score = score + 100;
    enemyDeath.play();
}

function hitEnemyAsPlayer(physicsImage, enemy) {
    enemy.disableBody(true, true);
    live = live - 1;
}

function createPlayer(game) {
    player = game.physics.add.sprite(300, 300, 'player');
    player.setBounce(0);
    player.setCollideWorldBounds(true);

    game.anims.create({
        key: 'left',
        frames: game.anims.generateFrameNumbers('player', {start: 9, end: 17}),
        frameRate: 10,
        repeat: -1,
    });

    game.anims.create({
        key: 'up',
        frames: game.anims.generateFrameNumbers('player', {start: 0, end: 8}),
        frameRate: 10,
        repeat: -1
    });

    game.anims.create({
        key: 'down',
        frames: game.anims.generateFrameNumbers('player', {start: 18, end: 26}),
        frameRate: 10,
        repeat: -1
    });

    game.anims.create({
        key: 'right',
        frames: game.anims.generateFrameNumbers('player', {start: 27, end: 35}),
        frameRate: 10,
        repeat: -1
    });

}


function randomNumberSpray() {
    randomSpray = Math.floor(Math.random() * 200 - Math.random() * 200);
}

function randomNumberEnemyCoord() {
    let enemyX = Math.floor(Math.random() * 600);
    let enemyY = Math.floor(Math.random() * 600);
    return {
        x: enemyX,
        y: enemyY
    }
}
function getPlayerDirection(){
    if (cursors.left.isDown && cursors.right.isUp && cursors.up.isUp && cursors.down.isUp) {
        return left
    }
    if (cursors.left.isUp && cursors.right.isDown && cursors.up.isUp && cursors.down.isUp) {
        return right
    }
    if (cursors.left.isUp && cursors.right.isUp && cursors.up.isDown && cursors.down.isUp) {
        return up
    }
    if (cursors.left.isUp && cursors.right.isUp&& cursors.up.isUp && cursors.down.isDown) {
        return down
    }
}
function shootbullet() {
    if (cursors.space.isDown && Date.now() - bulletTimestamp > bulletCooldown) {
        bulletTimestamp = Date.now();
        pistolBulletSound.play();
        bullet = this.physics.add.image(player.x - 20, player.y + 5, "bullet1.1");
        for (let index in enemies) {
            const enemy = enemies[index]
            this.physics.add.overlap(bullet, enemy, hitEnemyAsBullet, null, this);
        }
    }
}




