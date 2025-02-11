class Menu extends Phaser.Scene {

	static playStartTime = 0

    constructor() {
        super('menuScene')
    }
	/*
    preload() {
        // load images/tile sprites
        this.load.image('backGrass', './assets/Background.png')
        this.load.image('Mushroom', './assets/Mushroom.png')
		this.load.image('bird', './assets/Bird.png')
		this.load.image('gameOver', './assets/GameOver.png')
		this.load.image('menuImage', './assets/Menu.png')
		
		
        // load spritesheet
        this.load.spritesheet('player', './assets/AcornSheet.png', {
            frameWidth: 640
            //frameHeight: 512
        })
			

        // load audio
        this.load.audio('birdFlap', 'assets/birds-flapping-wings-14763.mp3')
		this.load.audio('birdCaw', 'assets/raven-call-72946.mp3')
		this.load.audio('restart', 'assets/collect-points-190037.mp3')
		this.load.audio('click', 'assets/cartoon-142268.mp3')
		this.load.audio('backGround', 'assets/nature-creation-239785.mp3')
		
		
        
    }
	*/

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


		this.music = this.sound.add('backGround', { 
			loop: true, 
			detune: 0, // Ensures no pitch distortions
			rate: 1,   // Default playback speed
			volume: 0.5
		});
		this.music.play()
		
		
		}

    update(time, dt) {
		time /= 1000
		dt /= 1000
	

        if (Phaser.Input.Keyboard.JustDown(this.keySPACE)) {
			this.music.pause()
			this.sound.play('birdFlap', {volume: 1})
			this.music.resume()
            this.scene.start('playScene')
			Menu.playStartTime = time
			
        }
		this.menuImage.setDisplaySize(window.innerHeight * 2488 / 1677, window.innerHeight)
		this.menuImage.setPosition(window.innerWidth/2, window.innerHeight/2)		
    }
}
