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

		//this.mushroom = new Mushroom (this, randomMushX, randomMushY);


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

		// Bird sprite setup
		this.birds = [
			new Bird(this, 0, cy), 
			//new Bird(this, 200, cy), 
			new Bird(this, cx, 0), 
			new Bird(this, cx+cx, cy+cy),
			// new Bird(this, 200, 200),
			//new Bird(this, 800, 500, 'bird', 500), 
			//new Bird(this, 400, 900, 'bird', 600), 
			//new Bird(this, 1100, 700, 'bird', 800), 
		]
		

		

		this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
		this.crouchKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT)

		// Set camera bounds to prevent scrolling beyond the background
		this.cameras.main.setBounds(0, 0, this.backgroundWidth, this.backgroundHeight)

		

		this.timerText = this.add.text(window.innerWidth - 100, 20, 'Time: 0', {
			fontSize: '30px',
			fill: '#ffffff'
		}).setOrigin(1, 0); // Align text to top-right corner
		
		this.elapsedTime = 0; // Initialize timer
		

    }

    update(time, dt) {
		time /= 1000
		dt /= 1000
		this.player.update(time,dt)

		for (let bird of this.birds) bird.update(time, dt)

		this.elapsedTime += dt / 1000; // Convert from milliseconds to seconds
		this.timerText.setText('Time: ' + Math.round(time)); // Show 2 decimal places

		this.scale.on('resize', (gameSize) => {
			this.timerText.setPosition(gameSize.width - 100, 20);
		});

		if (this.userDataA === "bird" && this.userDataB === "player" || this.userDataA === "player" && this.userDataB === "bird") {
			console.log("Bird collided with Player!")
		}
		this.unit = window.innerWidth/1000
		//this.aspectRatio = 2488 / 1677

		this.backGrass.setDisplaySize(window.innerWidth , window.innerHeight)

		let scrollSpeed = 200 * this.unit

		
		scrollSpeed += 5
		

		this.backGrass.tilePositionX += scrollSpeed * dt

      
	
	}
}