class Weevil extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y, texture = "player") {
        super(scene, x, y, texture) // call Sprite parent class
        scene.add.existing(this)           // add Weevil to existing scene
		this.scene = scene
		this.moveSpeed = 600
	}

	createPhysicsBody(x,y) {
	this.box2dBody = this.scene.world.createBody({
		type: "dynamic",
		position: planck.Vec2(x, y),
		})
	}

	checkCollide() {
		let pos = this.box2dBody.getPosition()
		console.log(this.scene)
		for (let bird of this.scene.birds) {
			let otherPos = bird.box2dBody.getPosition()
			let dx = pos.x - otherPos.x
			let dy = pos.y - otherPos.y
			let dist = Math.sqrt(dx*dx + dy*dy)
			console.log(dist)
			if (dist < 100) return true
		}
		return false
	}


	update(time,dt) {

		if (time > 3 && this.checkCollide() && !(this.scene.crouchKey.isDown)) {
			this.scene.sound.play('birdCaw', {volume: 2})
			return this.scene.scene.start('gameOverScene')
		}
 

		let scrollSpeed = 200 * this.scene.unit

		// Check if player is out of bounce	
		if (this.x < -5 || this.y < this.scene.unit*this.scene.aspectRatio || this.x > 1800 || this.y > 1000) {
			this.scene.sound.play('footsteps', {volume: 4})
			return this.scene.scene.start('gameOverScene')
		}
		
		this.setDisplaySize(this.scene.unit * 100, this.scene.unit * 100)
		

		// on weevil physics update (tells the physics system how the charater is moving)
		if ( !(this.scene.crouchKey.isDown)) {
		this.box2dBody.setLinearVelocity(planck.Vec2
			(this.scene.rightKey.isDown - this.scene.leftKey.isDown,	// left-right velocity
				this.scene.downKey.isDown - this.scene.upKey.isDown)	// up-down velocity
			.mul(this.moveSpeed).add({x: -(scrollSpeed), y: 0}))
		}

		this.scene.world.step(dt); // Run physics simulation

		// on weevil update (renders changes to the sprite position)
		let aproxPos = this.box2dBody.getPosition().clone()
		if (aproxPos) {
			this.setPosition(aproxPos.x * this.scene.unit, aproxPos.y * this.scene.unit);
		} 
		

		// Animation
		if (this.scene.leftKey.isDown || this.scene.rightKey.isDown || this.scene.upKey.isDown || this.scene.downKey.isDown) {
			if (this.anims.currentAnim && this.anims.currentAnim.key !== 'walking') {
				this.play('walking')
			}
		} else {
		   
				this.play('idle')
			
		}
	
		if (this.scene.crouchKey.isDown) {
			this.play('crouch')
			this.box2dBody.setLinearVelocity(planck.Vec2
				(this.scene.rightKey.isDown - this.scene.leftKey.isDown,	// left-right velocity
					this.scene.downKey.isDown - this.scene.upKey.isDown)	// up-down velocity
				.mul(0).add({x: -(scrollSpeed), y: 0}))
		}

	}
}