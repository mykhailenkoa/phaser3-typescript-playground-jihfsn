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

    // Set the line style
    graphics.lineStyle(10, 0xff0000, 1, 0.5, true);

    // Draw the first line
    graphics.moveTo(50, 50);
    graphics.lineTo(250, 250);

    // Draw the second line
    graphics.moveTo(250, 50);
    graphics.lineTo(50, 250);

    // Set the rounded corners for both lines
    graphics.lineCap = 'round';
    graphics.lineJoin = 'round';
}
