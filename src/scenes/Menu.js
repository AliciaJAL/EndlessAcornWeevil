class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    preload() {
        // load images/tile sprites
        this.load.image('backGrass', './assets/Background.png')
        this.load.image('Mushroom', './assets/Mushroom.png')
		this.load.image('bird', './assets/Bird.png')
		this.load.image('menuImage', './assets/Menu.png')
		
		
        // load spritesheet
        this.load.spritesheet('player', './assets/AcornSheet.png', {
            frameWidth: 640
            //frameHeight: 512
        })
			

        // load audio
        this.load.audio('birdFlap', '.assets/birds-flapping-wings-14763.mp3')
		this.load.audio('birdCaw', '.assets/raven-call-72946.mp3')
		this.load.audio('footsteps', 'assets/footsteps-dirt-01-73777.mp3')
		this.load.audio('collect', '.assets/collect-points-190037.mp3')
		this.load.audio('click', 'assets/cartoon-142268.mp3')
		
		
        
    }

    create() {
		this.menuImage = this.add.sprite(0, 0, "menuImage").setOrigin(0.5, 0.5)

		
		this.menuImage.setSize(window.innerWidth, window.innerHeight);

		
	
		this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

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
		
		}

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.keySPACE)) {
			this.sound.play('click')
            this.scene.start('playScene')
			
        }
		this.menuImage.setDisplaySize(window.innerHeight * 2488 / 1677, window.innerHeight)
		this.menuImage.setPosition(window.innerWidth/2, window.innerHeight/2)		
    }
}
