class Play extends Phaser.Scene {

    constructor() {
        super('playScene')
		
    }

	init() {
		this.world = planck.World(planck.Vec2(0, 0)) // Gravity

	}

    create() {
		
        // Upload Background
		this.backGrass = this.add.tileSprite(window.innerWidth/2, window.innerHeight/2,window.innerWidth, window.innerHeight, "backGrass")
		this.backgroundWidth = window.innerWidth*this.aspectRatio; 
		this.backgroundHeight = window.innerHeight; 
		
		let minX = 100, maxX = window.innerWidth;
		let minY = 200, maxY =  window.innerHeight;

		let randomMushX = Phaser.Math.Between(minX, maxX);
		let randomMushY = Phaser.Math.Between(minY, maxY);

		this.mushroom = this.add.sprite(randomMushX, randomMushY, 'Mushroom').setScale(0.10);


		this.unit = window.innerWidth/1000
		this.aspectRatio = 2488 / 1526
		
		let cy = 300 // units
		let cx = 350 * this.aspectRatio // units
		// this.player = this.add.sprite(config.width, config.height, 'player')
		// this.player.setPosition(cx, cy)
		
		this.player = new Weevil(this, cx, cy)
		this.player.createPhysicsBody(cx,cy)

		//let randomBirdX = Phaser.Math.Between(minX, maxX);
		// let randomBirdY = Phaser.Math.Between(minY, maxY);
		// this.bird = this.add.sprite(0, cy, 'bird').setScale(0.5)

		// Bird sprite setup
        this.bird = this.add.sprite(0, cy, 'bird').setScale(0.5)

		

		this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
		this.crouchKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT)

		// Set up the camera to follow the player
        //this.cameras.main.startFollow(this.player);
       // this.cameras.main.setFollowOffset(0, 0); // Adjust if needed (e.g., follow the player exactly)

        // Define a left boundary (threshold) for the player to be destroyed if it's too far left
        this.leftBoundary = 100; // If the player moves 100px left of the camera, it gets destroyed
 
		 // Set camera bounds to prevent scrolling beyond the background
		 this.cameras.main.setBounds(0, 0, this.backgroundWidth, this.backgroundHeight);
    }

    update(time, dt) {
		time /= 1000
		dt /= 1000
		this.player.update(time,dt)


		this.unit = window.innerWidth/1000
		//this.aspectRatio = 2488 / 1677

		this.backGrass.setDisplaySize(window.innerWidth , window.innerHeight)

		let scrollSpeed = 200 * this.unit
		this.backGrass.tilePositionX += scrollSpeed * dt
		

	
	}
}