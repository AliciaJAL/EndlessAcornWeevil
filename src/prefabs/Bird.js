class Bird extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture = "bird", radius = 400) {
        super(scene, x, y, texture)
        
        // Add the bird sprite to the scene
        scene.add.existing(this)
		this.scene = scene

		this.box2dBody = this.scene.world.createBody({
			type: "dynamic",
			position: planck.Vec2(x, y),
		})

		this.x0 = x
		this.y0 = y
		this.flyRad = radius
		this.omega = 0.5 
		this.theta = 0
		
    }

    // Update method for the bird (you can make the bird move or animate)
    update(time, dt) {
		let unit = this.scene.unit
		this.setDisplaySize(200*unit, 200*unit)

		this.theta += this.omega * dt
		let newX = this.x0 + Math.cos(this.theta)*this.flyRad
		let newY = this.y0 + Math.sin(this.theta)*this.flyRad
		this.box2dBody.setPosition({x: newX, y: newY});

		let boxPos = this.box2dBody.getPosition()

		this.setPosition(boxPos.x * unit, boxPos.y * unit)
		  
		this.rotation = this.theta + 3.14159/2


		this.omega *= 1.02**dt
		
    }
}
