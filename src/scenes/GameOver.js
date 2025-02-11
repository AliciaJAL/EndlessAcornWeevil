class GameOver extends Phaser.Scene {

	static playStartTime = 0

    constructor() {
        super('gameOverScene')
		
    }

	create() {
		this.gameOver = this.add.sprite(0, 0, "gameOver").setOrigin(0.5, 0.5)
		this.gameOver.setSize(window.innerWidth, window.innerHeight);


		this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

	}

	update(time, dt) {
		time /= 1000
		dt /= 1000
	
	
        if (Phaser.Input.Keyboard.JustDown(this.keySPACE)) {
			this.sound.play('click', {volume: 1})
            this.scene.start('playScene')
			Menu.playStartTime = time
			
        }
		this.gameOver.setDisplaySize(window.innerHeight * 2488 / 1677, window.innerHeight)
		this.gameOver.setPosition(window.innerWidth/2, window.innerHeight/2)	
	
		}	
}