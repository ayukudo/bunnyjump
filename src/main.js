const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 620,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 }
    }
  },
  scene: [BunnyJumpScene]
};

new Phaser.Game(config);