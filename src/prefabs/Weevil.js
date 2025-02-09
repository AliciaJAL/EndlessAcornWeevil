class Weevil extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y, texture = "player") {
		console.log("here")
        super(scene, x, y, texture) // call Sprite parent class
        scene.add.existing(this)           // add Weevil to existing scene
		this.scene = scene
	}
	createPhysicsBody(cx,cy) {
	this.box2dBody = this.scene.world.createBody({
		type: "dynamic",
		position: planck.Vec2(cx, cy),
		})
	}
	update(time,dt) {
		// Check if player is out of bounce	
		if (this.x < 0) {
			this.destroy();
		}

		this.setDisplaySize(this.unit * 100, this.unit * 100)

		// on weevil physics update (tells the physics system how the charater is moving)
		this.box2dBody.setLinearVelocity(planck.Vec2
			(this.scene.rightKey.isDown - this.scene.leftKey.isDown,	// left-right velocity
				this.scene.downKey.isDown - this.scene.upKey.isDown)	// up-down velocity
			.mul(300).add({x: -this.scene.scrollSpeed, y: 0}))

		this.scene.world.step(dt); // Run physics simulation

		// on weevil update (renders changes to the sprite position)
		let aproxPos = this.box2dBody.getPosition().clone()
		
		this.setPosition(aproxPos.x * this.unit, aproxPos.y * this.unit)
		
		
		let fowardForce = 0
        let steeringForce = 0
        if (this.alive) {
            fowardForce = this.wheelAcc * (World.upKey.isDown - 1.25 * World.downKey.isDown)
            steeringForce = World.rightKey.isDown - World.leftKey.isDown
        }

		// Animation
		if (this.scene.leftKey.isDown || this.scene.rightKey.isDown || this.scene.upKey.isDown || this.scene.downKey.isDown) {
			if (this.anims.currentAnim && this.anims.currentAnim.key !== 'walking') {
				this.play('walking'); 
			}
		} else {
		   
				this.play('idle'); 
			
		}
	
		if (this.scene.crouchKey.isDown) {
			this.play('crouch');
		}

		}
	}