// Name: Alicia Landa
// The Acorn Weevil Game
// Date: 2/3/25
// 30+ Hours
// Creative Tilt: Instead of using matter or arcade physics engine, I challenged myself to use Box2D becuase it's industry standard.
// I'm proud of the detailed background. I like how it looks like a painting then the player is cute and cartoony. 
let config = {
    type: Phaser.AUTO,
	width: window.innerWidth,  // Dynamically set to the window size
    height: window.innerHeight, // Dynamically set to the window size
    scale: {
        mode: Phaser.Scale.RESIZE, // Fit the game to the screen
        autoCenter: Phaser.Scale.CENTER_BOTH // Center the game canvas
    },

    scene: [ Load, Menu, Play, GameOver ]
}

let game = new Phaser.Game(config)

/*
[x] Use multiple Scene classes (dictated by your game's style) (1)
[x] Properly transition between Scenes and allow the player to restart w/out having to reload the page (1)
[x] Include in-game instructions using text or other means (e.g., tooltips, tutorial, diagram, etc.) (1)
[x] Have some form of player input/control appropriate to your game design (1)
[x] Include one or more animated characters that use a texture atlas/sprite sheet* (1)
[x] Simulate scrolling with a tileSprite (or equivalent means) (1)
[x] Implement proper collision detection (via Arcade Physics or a custom routine) (1)
[x] Have looping background music* (1)
[x] Use a minimum of four sound effects for key mechanics, UI, and/or significant events appropriate to your game design (1)
[x] Use randomness to generate escalating challenge, e.g. terrain, pickups, etc. (1)
[x] Include some metric of accomplishment that a player can improve over time, e.g., score, survival time, etc. (1)
[x] Be theoretically endless (1)
[x]Be playable for at least 15 seconds for a new player of low to moderate skill (1)
[x] Run without significant crashes or errors (1)
[x] Include in-game credits for all roles, assets, music, etc. (1)
*/