class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        // loading bar 
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, 300, 350 * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        // load images/tile sprites
        this.load.image('backGrass', './assets/Background.png')
        this.load.image('Mushroom', './assets/Mushroom.png')
		this.load.image('bird', './assets/Bird.png')
		this.load.image('gameOver', './assets/GameOver.png')
		this.load.image('menuImage', './assets/Menu.png')
		
		
        // load spritesheet
        this.load.spritesheet('player', './assets/AcornSheet.png', {
            frameWidth: 640
        })
			

        // load audio
        this.load.audio('birdFlap', 'assets/birds-flapping-wings-14763.mp3')
		this.load.audio('birdCaw', 'assets/raven-call-72946.mp3')
		this.load.audio('click', 'assets/collect-points-190037.mp3')
		this.load.audio('footsteps', 'assets/footsteps-dirt-01-73777.mp3')
		this.load.audio('backGround', 'assets/nature-creation-239785.mp3')
		
		
    }

    create() {
        this.scene.start('menuScene');
    }
}