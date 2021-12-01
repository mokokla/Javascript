let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
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

const bulletCooldown = 400;

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
let randomSpray;
const enemies = [];

function preload() {
    this.load.image('sky', '../assets/map1.png');
    this.load.spritesheet('enemy', '../assets/enemy1.png', {frameWidth: 576 / 9, frameHeight: 254 / 4});
    this.load.spritesheet('player', '../assets/player.png', {frameWidth: 576 / 9, frameHeight: 254 / 4});
    this.load.image('bullet1.1', '../assets/bullet1.1.png');
    this.load.image('bullet1.2', '../assets/bullet1.2.png');
    this.load.image('bullet1.2', '../assets/live.png', {frameWidth: 30 / 9, frameHeight: 30 / 4});
}


function create() {
    this.add.image(300, 300, 'sky');
    createPlayer(this);
    window.setInterval(enemyMovement, 20)
    cursors = this.input.keyboard.createCursorKeys();
    liveText = this.add.text(16, 16, "Lives: " + live, {fontSize: '32px'});
    scoreText = this.add.text(250, 16, "Score: 000000000", {fontSize: '32px'});
    gameOver();
}

function spawnEnemy(enemyX, enemyY, game) {
        const enemy = game.physics.add.sprite(enemyX, enemyY, 'enemy');
        enemy.setCollideWorldBounds(true);
        enemy.setBounce(true);
        game.physics.add.overlap(player, enemy, hitEnemyAsPlayer, null, this);
        enemies[enemies.length] = enemy

}

function update() {

    if(Date.now() - enemySpawnTimestamp >= enemySpawnCooldown) {
        enemySpawnTimestamp = Date.now();
        if(enemySpawnCooldown>1000) {
            enemySpawnCooldown = enemySpawnCooldown - 1000;
        }
        let enemyPosition = randomNumberEnemyCoord();
        spawnEnemy(enemyPosition.x, enemyPosition.y, this);
    }

    if (cursors.left.isDown && cursors.right.isUp && cursors.up.isUp && cursors.down.isUp) {
        player.setVelocity(-120, 0);
        player.anims.play('left', true);
        randomNumberSpray();
        if (cursors.space.isDown && Date.now() - bulletTimestamp > bulletCooldown) {
            bulletTimestamp = Date.now();
            bullet = this.physics.add.image(player.x - 41, player.y + 5, "bullet1.1");
            for (let index in enemies) {
                const enemy = enemies[index]
                this.physics.add.overlap(bullet, enemy, hitEnemyAsBullet, null, this);
            }
            randomNumberSpray();
            bullet.setVelocity(-1500, randomSpray);
        }

    }


    if (cursors.right.isDown && cursors.left.isUp && cursors.up.isUp && cursors.down.isUp) {
        player.setVelocity(120, 0);
        player.anims.play('right', true);
        if (cursors.space.isDown && Date.now() - bulletTimestamp > bulletCooldown) {
            bulletTimestamp = Date.now();
            bullet = this.physics.add.image(player.x + 25, player.y + 8, "bullet1.1");
            for (let index in enemies) {
                const enemy = enemies[index]
                this.physics.add.overlap(bullet, enemy, hitEnemyAsBullet, null, this);
            }
            randomNumberSpray();
            bullet.setVelocity(1500, randomSpray);
        }
    }

    if (cursors.up.isDown && cursors.left.isUp && cursors.right.isUp && cursors.down.isUp) {
        player.setVelocity(0, -120);
        player.anims.play('up', true);
        if (cursors.space.isDown && Date.now() - bulletTimestamp > bulletCooldown) {
            bulletTimestamp = Date.now();
            bullet = this.physics.add.image(player.x + 13, player.y - 24, "bullet1.2");
            for (let index in enemies) {
                const enemy = enemies[index]
                this.physics.add.overlap(bullet, enemy, hitEnemyAsBullet, null, this);
            }
            randomNumberSpray();
            bullet.setVelocity(randomSpray, -1000);
        }
    }
    if (cursors.down.isDown && cursors.left.isUp && cursors.right.isUp && cursors.up.isUp) {
        player.setVelocity(0, 120);
        player.anims.play('down', true);
        if (cursors.space.isDown && Date.now() - bulletTimestamp > bulletCooldown) {
            bulletTimestamp = Date.now();
            bullet = this.physics.add.image(player.x - 11, player.y + 35, "bullet1.2");
            for (let index in enemies) {
                const enemy = enemies[index]
                this.physics.add.overlap(bullet, enemy, hitEnemyAsBullet, null, this);
            }
            randomNumberSpray();
            bullet.setVelocity(randomSpray, 1500);
        }
    }


    if (cursors.left.isUp && cursors.right.isUp && cursors.up.isUp && cursors.down.isUp) {
        player.setVelocity(0, 0);
        player.anims.stop();
    }


}

function randomNumberSpray() {
    randomSpray = Math.floor(Math.random() * 200 - Math.random() * 200);
}


function randomNumberEnemyCoord() { //TODO distance from player
    const enemyX = Math.floor(Math.random() * 600 - Math.random() * 600);
    const enemyY = Math.floor(Math.random() * 600 - Math.random() * 600);

    return {
        x: enemyX,
        y: enemyY
    }
}



function hitEnemyAsPlayer(physicsImage, enemy) {
    enemy.disableBody(true, true);
    live = live - 1;
    liveText.setText("Lives: " + live);
}

function hitEnemyAsBullet(bullet, enemy) {
    bullet.disableBody(true, true);
    enemy.disableBody(true, true);
    score = score + 100;
    let tempString = "";
    for (let i = 0; i < 9 - score.toString().length; i++) tempString += "0";
    scoreText.setText("Score: " + tempString + score);
}

function enemyMovement() {
    for (let index in enemies) {
        const enemy = enemies[index];

        const x = -(enemy.x - player.x);
        const y = -(enemy.y - player.y);
        enemy.setVelocity(x > 150 || x < 150 ? x / 2 : x / 2.5, x > 150 || x < 150 ? y / 2 : y / 2.5);
    }

}

function createPlayer(game) {
    player = game.physics.add.sprite(300, 300, 'player');
    player.setBounce(0);
    player.setCollideWorldBounds(true);

    game.anims.create({
        key: 'left',
        frames: game.anims.generateFrameNumbers('player', {start: 9, end: 17}),
        frameRate: 10,
        repeat: -1
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