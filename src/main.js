// Endlesss Runner: Acorn Weevil
// Name: Alicia Landa
// Date: 2/3/25
// 30+ Hours
// Creative Tilt: I learned how to use Box2D instead of matter or arcade for physics.
// Also the art style has cartoony character with more detailed background
let config = {
    type: Phaser.AUTO,
	width: window.innerWidth,  // Dynamically set to the window size
    height: window.innerHeight, // Dynamically set to the window size
    scale: {
        mode: Phaser.Scale.RESIZE, // Fit the game to the screen
        autoCenter: Phaser.Scale.CENTER_BOTH // Center the game canvas
    },

    scene: [ Menu,Play ]
}

let game = new Phaser.Game(config)

/*
[x] Use multiple Scene classes (dictated by your game's style) (1)
Properly transition between Scenes and allow the player to restart w/out having to reload the page (1)
Include in-game instructions using text or other means (e.g., tooltips, tutorial, diagram, etc.) (1)
[x] Have some form of player input/control appropriate to your game design (1)
[x] Include one or more animated characters that use a texture atlas/sprite sheet* (1)
[x] Simulate scrolling with a tileSprite (or equivalent means) (1)
Implement proper collision detection (via Arcade Physics or a custom routine) (1)
Have looping background music* (1)
Use a minimum of four sound effects for key mechanics, UI, and/or significant events appropriate to your game design (1)
[x] Use randomness to generate escalating challenge, e.g. terrain, pickups, etc. (1)
Include some metric of accomplishment that a player can improve over time, e.g., score, survival time, etc. (1)
[x] Be theoretically endless (1)
Be playable for at least 15 seconds for a new player of low to moderate skill (1)
[x] Run without significant crashes or errors (1)
Include in-game credits for all roles, assets, music, etc. (1)
*/