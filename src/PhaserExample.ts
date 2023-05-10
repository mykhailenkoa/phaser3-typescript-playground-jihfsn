var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

export var game = new Phaser.Game(config);



function create ()
{
    // Create a new graphics object
    const graphics = this.add.graphics();

    // line 1
    graphics.lineStyle(10, 0xff0000, 1);
    graphics.beginPath();
    graphics.moveTo(100, 100);
    graphics.lineTo(300, 300);
    graphics.strokePath();

    // line 2
    graphics.lineStyle(10, 0xff0000, 1);
    graphics.beginPath();
    graphics.moveTo(300, 100);
    graphics.lineTo(100, 300);
    graphics.strokePath();
}
