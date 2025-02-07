class Play extends Phaser.Scene {

    constructor() {
        super('playScene')
		
    }

	init() {
		this.world = planck.World(planck.Vec2(0, 0)) // Gravity

	}

    create() {
		
        // Upload Sprites
        this.backGrass = this.add.sprite(0, 0, "backGrass").setOrigin(0.5, 0.5)

		
		this.backGrass.setSize(window.innerWidth, window.innerHeight)
		this.backGrass.setPosition(window.innerWidth/2, window.innerHeight/2)	

		
		let minX = 100, maxX = window.innerWidth;
		let minY = 200, maxY =  window.innerHeight;

		let randomMushX = Phaser.Math.Between(minX, maxX);
		let randomMushY = Phaser.Math.Between(minY, maxY);


		this.mushroom = this.add.sprite(randomMushX, randomMushY, 'Mushroom').setScale(0.10);

		this.unit = window.innerWidth/1000
		this.aspectRatio = 2488 / 1677

		let cy = 500 // units
		let cx = 500 * this.aspectRatio // units
		this.player = this.add.sprite(config.width, config.height, 'player')
		this.player.setPosition(cx, cy)
		

		this.box2dBody = this.world.createBody({
			type: "dynamic",
			position: planck.Vec2(cx, cy),
		})
		
		// anims hooks it to animation manager
		this.anims.create({
			key: 'idle',
			frameRate: 0,
			repeat: -1, //this repeats infinitly
			frames: this.anims.generateFrameNumbers('player', {
				start: 0,
				end: 0
			})

		})

		this.anims.create({
			key: 'crouch',
			frameRate: 5,
			repeat: -1, 
			frames: this.anims.generateFrameNumbers('player', {
				start: 4,
				end: 4
			})

		})

		this.anims.create({
			key: 'walking',
			frameRate: 5,
			repeat: -1, //this repeats infinitly
			frames: this.anims.generateFrameNumbers('player', {
				start: 0,
				end: 2
			})

		})

		let randomBirdX = Phaser.Math.Between(minX, maxX);
		let randomBirdY = Phaser.Math.Between(minY, maxY);
		this.bird = this.add.sprite(randomBirdX, randomBirdY, 'bird').setScale(0.5)
		

		this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
		this.crouchKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT)

	

    }

    update(time, dt) {
		time /= 1000
		dt /= 1000

		this.unit = window.innerWidth/1000
		//this.aspectRatio = 2488 / 1677


		this.backGrass.tilePositionX += 2
		this.backGrass.setDisplaySize(window.innerHeight*this.aspectRatio , window.innerHeight)

		
		this.time.addEvent({
			delay: 2000, // Spawns every 2 seconds
			callback: () => {
				let randomX = Phaser.Math.Between(150, window.inner*this.aspectRatio)
				let randomY = Phaser.Math.Between(150, window.innerHeight*this.aspectRatio)
				this.add.sprite(randomX, randomY, 'Mushroom').setScale(0.20)
				;
			},
			loop: true
		});

		this.player.setDisplaySize(this.unit * 100, this.unit * 100)


		// on weeble physics update (tells the physics system how the charater is moving)
		this.box2dBody.setLinearVelocity(planck.Vec2(this.rightKey.isDown - this.leftKey.isDown, this.downKey.isDown - this.upKey.isDown).mul(300))


		this.world.step(dt); // Run physics simulation

		// on weeble update (renders changes to the sprite position)
		let aproxPos = this.box2dBody.getPosition().clone()
		// console.log(aproxPos)
		this.player.setPosition(aproxPos.x * this.unit, aproxPos.y * this.unit)
		// console.log(this.player)
		/*
		let playerMovement
		playerVector.length() ? playerMovement = 'walk' : playerMovement = 'idle'
		*/
		
		let fowardForce = 0
        let steeringForce = 0
        if (this.alive) {
            fowardForce = this.wheelAcc * (World.upKey.isDown - 1.25 * World.downKey.isDown)
            steeringForce = World.rightKey.isDown - World.leftKey.isDown
        }

		// Animation
		if (this.leftKey.isDown || this.rightKey.isDown || this.upKey.isDown || this.downKey.isDown) {
			if (this.player.anims.currentAnim && this.player.anims.currentAnim.key !== 'walking') {
				this.player.play('walking'); 
			}
		} else {
		   
				this.player.play('idle'); 
			
		}
	
		if (this.crouchKey.isDown) {
			this.player.play('crouch');
		}
    
	}
}