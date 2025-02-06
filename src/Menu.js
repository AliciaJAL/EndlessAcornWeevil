class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    preload() {
        // load images/tile sprites
        this.load.image('backGrass', './assets/BackGrass.png')
        this.load.image('mushroom', './assets/Mushroom.png')
		// this.load.image('weevil', './assets/AcornSheet.png')
		this.load.image('menuImage', './assets/Menu.png')
		
		
        // load spritesheet
        this.load.spritesheet('player', './assets/AcornSheet.png', {
            frameWidth: 640
            //frameHeight: 512
        })
			

        // load audio
        // this.load.audio('sfx-select', './assets/sfx-select.wav')
		
        
    }

    create() {
		this.menuImage = this.add.sprite(0, 0, "menuImage").setOrigin(0.5, 0.5)

		
		this.menuImage.setSize(window.innerWidth, window.innerHeight);

		
		/*
        // Animation configuration
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
            frameRate: 30
        })
			*/
		
			// define keys
		// keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
		// keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
		this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
		}

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.keySPACE)) {
            this.scene.start('playScene')
			
        }
		this.menuImage.setDisplaySize(window.innerHeight * 2488 / 1677, window.innerHeight)
		this.menuImage.setPosition(window.innerWidth/2, window.innerHeight/2)		
    }

}