/*
#---Plan:

*--General:
    --Adjust button sizing to screen.  ? √ ?  (I have to test on a phone... Waiting for release)
    //--Color picker hand cursor is not working right.

*--Features:
    //--Pause feature.
    //--Colliders ???

#---Notes:

    --Disabled the logo/playIntro() for p5play.

*/

console.log("Date last updated: 1-9-24");

//* Main Vars:

var gameStatus = "Stopped";

var instructionText = true;

var uiHide = false;

var mouseMode = "ARROW";

var uiGroup = 1;
var createdGroup1 = false;
var createdGroup2 = false;
var createdGroup0 = false;

var buttonWidth = 80;
var buttonHeight = 30;

var offsetOffWall = 60;
var offsetBetweenButtons = 30;

var colorPicker;

var fps;

var red = 255;
var green = 0;
var blue = 0;

var offsetX_SS = 0;
var offsetY_SS = 0;

var timeSinceFired = 0;

//* Groups:

var projectiles;

var standardButtons;
var settingsButtons;
var presetButtons;

//* Sprites:

var origin;

var uiHide_Sprite;
var backgroundColor_Sprite;
var openPresets_Sprite;
var start_Sprite;

var originX_Sprite;
var originY_Sprite;
var projectileShape_Sprite;
var projectileLength_Sprite;
var projectileWidth_Sprite;
var projectileColorType_Sprite;
var rainbowSpeed_Sprite;
var projectileOutline_Sprite;
var projectileNumber_Sprite;
var rateOfFire_Sprite;
var projectileSpeed_Sprite;
var projectileDirection_Sprite;
var projectileSpinSpeed_Sprite;
var screenSquare_Sprite;
var projectileCollisionWithWallMode_Sprite;

var preset1_Sprite;
var preset2_Sprite;
var preset3_Sprite;
var preset4_Sprite;
var preset5_Sprite;
var preset6_Sprite;
var preset7_Sprite;
var preset8_Sprite;
var preset9_Sprite;
var preset10_Sprite;
var preset11_Sprite;
var preset12_Sprite;

var save1_Sprite;
var load1_Sprite;
var save2_Sprite;
var load2_Sprite;

//* Statuses:

var backgroundColor = "Black";

var originX_Pix;
var originY_Pix;
var originX_Per = 50;
var originY_Per = 50;
var projectileShape = "Square";
var projectileLength = 30;
var projectileWidth = 10;
var projectileColorType = "Color";
var projectileColor = 120;
var rainbowSpeed = 0;
var projectileOutline = 0;
var projectileNumber = 3000;
var rateOfFire = 1;
var projectileSpeed = 1;
var projectileDirection = 0;
var projectileSpinSpeed = 0;
var screenSquare = "False";
var projectileCollisionWithWallMode = "None";

var startText = "Start";

// Saved Statuses:

var backgroundColor_Save_1;

var originX_Per_Save_1;
var originY_Per_Save_1;
var projectileShape_Save_1;
var projectileLength_Save_1;
var projectileWidth_Save_1;
var projectileColorType_Save_1;
var projectileColor_Save_1;
var rainbowSpeed_Save_1;
var projectileOutline_Save_1;
var projectileNumber_Save_1;
var rateOfFire_Save_1;
var projectileSpeed_Save_1;
var projectileDirection_Save_1;
var projectileSpinSpeed_Save_1;
var screenSquare_Save_1;
var projectileCollisionWithWallMode_Save_1;

var backgroundColor_Save_2;

var originX_Per_Save_2;
var originY_Per_Save_2;
var projectileShape_Save_2;
var projectileLength_Save_2;
var projectileWidth_Save_2;
var projectileColorType_Save_2;
var projectileColor_Save_2;
var rainbowSpeed_Save_2;
var projectileOutline_Save_2;
var projectileNumber_Save_2;
var rateOfFire_Save_2;
var projectileSpeed_Save_2;
var projectileDirection_Save_2;
var projectileSpinSpeed_Save_2;
var screenSquare_Save_2;
var projectileCollisionWithWallMode_Save_2;


// "Well hello there." -General Kenobi

/*

#Credits:

*--Thank you Mom for helping me push through.

*--Thank you Codey and Riley for the help.

*/
