class Mushroom extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y, texture = "player") {
        super(scene, x, y, texture) // call Sprite parent class
        scene.add.existing(this)           // add Mushroom to existing scene
		this.scene = scene

        this.body.setSize(this.width / 2, this.height / 2)
        this.body.setCollideWorldBounds(true)
		}

	update(time, dt){
		this.mushroom.x -= scrollSpeed * dt


		if (this.mushroom.x < 0) {
            this.mushroom.destroy();
			create();
        }
	}

	create() {
		this.randomMushX = Phaser.Math.Between(this.minX, this.maxX);
		this.randomMushY = Phaser.Math.Between(this.minY, this.maxY);
		this.mushroom = this.add.sprite(this.randomMushX, this.randomMushY, 'Mushroom').setScale(0.10);
	}
}
