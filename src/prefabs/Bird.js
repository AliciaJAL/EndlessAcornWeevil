class Bird extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.scene = scene;
        // Add the bird sprite to the scene
        this.scene.add.existing(this);

        // Add any other properties or methods for the bird here
        this.speed = 100;  // Speed of the bird's movement
    }

    // Update method for the bird (you can make the bird move or animate)
    update(time, delta) {
        this.x += this.speed * delta / 1000;  // Move the bird horizontally
        if (this.x > window.innerWidth) { // If the bird goes off-screen, reset position
            this.x = -this.width;
        }
    }
}
