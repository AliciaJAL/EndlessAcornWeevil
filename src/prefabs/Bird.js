class Bird extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture = "bird") {
        super(scene, x, y, texture)
        this.scene = scene;
        // Add the bird sprite to the scene
        this.scene.add.existing(this)
		this.scene = scene
    }
	createPhysicsBody(x,y) {
		this.box2dBody = this.scene.world.createBody({
			type: "dynamic",
			position: planck.Vec2(x, y),
			})
		}

    // Update method for the bird (you can make the bird move or animate)
    update(time, dt) {
		this.setScale(window.innerWidth/1750)
    

		  // Update the angle with random speed
		  this.scene.circle.angle += this.scene.circle.speed * dt;
		  this.scene.circle.radius += Math.sin(time / 1000) * 50; 
  
  
		  let prevX = this.x;
		  let prevY = this.y;
  
  
		  // Apply circular motion using sine and cosine
		  this.x = this.scene.circle.centerX + Math.cos(this.scene.circle.angle) * this.scene.circle.radius;
		  this.y = this.scene.circle.centerY + Math.sin(this.scene.circle.angle) * this.scene.circle.radius;
		  
		  
		  // Calculate angle of movement (rotation)
		  let angle = Math.atan2(this.y - prevY, this.x - prevX);
		  this.scene.bird.rotation = angle;
  
    }
}
