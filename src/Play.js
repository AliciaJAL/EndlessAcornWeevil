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
		

		
		this.player = this.add.sprite(config.width, config.height, 'player')
		this.player.setPosition(window.innerWidth/2, window.innerHeight/2)	
		

		this.box2dBody = this.world.createBody({
			type: "dynamic",
			position: planck.Vec2(window.innerWidth/1.5, window.innerHeight/1.5),
		})
		
		// anims hooks it to animation manager
		this.anims.create({
			key: 'idle',
			frameRate: 0,
			repeat: -1, //this repeats infinitly
			frames: this.anims.generateFrameNumbers('player', {
				start: 1,
				end: 1
			})

		})

		this.anims.create({
			key: 'crouch',
			frameRate: 5,
			repeat: -1, //this repeats infinitly
			frames: this.anims.generateFrameNumbers('player', {
				start: 3,
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
		//this.background.tilePositionX += 1
		this.backGrass.setDisplaySize(window.innerHeight* 2488 / 1677, window.innerHeight)
		this.backGrass.setPosition(window.innerWidth/2, window.innerHeight/2)	
		this.player.setDisplaySize(this.unit * 150, this.unit * 150)


		// on weeble physics update (tells the physics system how the charater is moving)
		this.box2dBody.setLinearVelocity(planck.Vec2(this.rightKey.isDown - this.leftKey.isDown, this.downKey.isDown - this.upKey.isDown).mul(300))


		this.world.step(dt); // Run physics simulation

		// on weeble update (renders changes to the sprite position)
		let aproxPos = this.box2dBody.getPosition().clone()
		console.log(aproxPos)
		this.player.setPosition(aproxPos.x * this.unit, aproxPos.y * this.unit)
		console.log(this.player)
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
			

		
    }

    
}