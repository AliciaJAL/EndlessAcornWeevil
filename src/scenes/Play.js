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
		this.player.setPosition(cx, cy)

		// this.bird = this.add.sprite(0, cy, 'bird').setScale(0.5)

		// Circular motion parameters
		this.circle = {
            centerX: cx,   // Circle center (can change over time)
            centerY: cy,
            radius: Phaser.Math.Between(50, window.innerHeight), // Radius
            angle: Math.random() * Math.PI * 2,  // Starting angle
            speed: Phaser.Math.FloatBetween(0.5, 2) // Speed (radians per second)
        };

		// Bird sprite setup
		this.bird = new Bird(this, 0, 0)
		this.bird.createPhysicsBody(0,0)
		this.bird.setPosition(0, 0)

		

		this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
		this.crouchKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT)

		// Set camera bounds to prevent scrolling beyond the background
		this.cameras.main.setBounds(0, 0, this.backgroundWidth, this.backgroundHeight);
    }

    update(time, dt) {
		time /= 1000
		dt /= 1000
		this.player.update(time,dt)
		this.bird.update(time,dt)


		this.unit = window.innerWidth/1000
		//this.aspectRatio = 2488 / 1677

		this.backGrass.setDisplaySize(window.innerWidth , window.innerHeight)

		let scrollSpeed = 200 * this.unit

		if (time+1 % 30 == 0) {
			scrollSpeed = 200 * this.unit
		}

		this.backGrass.tilePositionX += scrollSpeed * dt

      
	
	}
}