/*
# Notes:

*--General:
    --Adjust button sizing to screen.  ? √ ?  (I have to test on a phone... Waiting for release)
    --Have projectile speed, adjust, depending on delta time. OR Using new World object in updated p5.
    --Adjust/fix Instruction Text.
    --Color picker hand cursor is not working right.

*--Features:
    --Pause feature.
    --Colliders ???

*--Re-organize code:
    -Lower case vars AND functions.
    -Fix groups. (Maybe (WHAT???) ) 
    -Fix "_Save" AND "_Sprite".
    
*/

//* Main Vars:

var GameStatus = "Stopped";

var InstructionText = true;

var UIHide = false;

var mouseMode = "ARROW";

var UIGroup = 1;
var createdGroup1 = false;
var createdGroup2 = false;
var createdGroup0 = false;

var ButtonWidth = 80; // 80
var ButtonHeight = 30; // 30

var offsetOffWall = 60; // 60
var offsetBetweenButtons = 30; // 50

var ColorPicker;

var FPS;

var Red = 255;
var Green = 0;
var Blue = 0;

var offsetX_SS = 0;
var offsetY_SS = 0;

var TimeSinceFired = 0;

//* Groups:

var Projectiles;
//var Trails;
var standardButtons;
var settingsButtons;
var presetButtons;

// var Background = {};
// Background.save = ...;

//* Sprites:

var Origin;

var UIHide_Sprite;
var BackgroundColor_Sprite;
var OpenPresets_Sprite;
var Start_Sprite;

var OriginX_Sprite;
var OriginY_Sprite;
var ProjectileShape_Sprite;
var ProjectileLength_Sprite;
var ProjectileWidth_Sprite;
var ProjectileColorType_Sprite;
var RainbowSpeed_Sprite;
var ProjectileOutline_Sprite;
var ProjectileNumber_Sprite;
var RateOfFire_Sprite;
var ProjectileSpeed_Sprite;
var ProjectileDirection_Sprite;
var ProjectileSpinSpeed_Sprite;
var ScreenSquare_Sprite;
var ProjectileCollisionWithWallMode_Sprite;

var Preset1_Sprite;
var Preset2_Sprite;
var Preset3_Sprite;
var Preset4_Sprite;
var Preset5_Sprite;
var Preset6_Sprite;
var Preset7_Sprite;
var Preset8_Sprite;
var Preset9_Sprite;
var Preset10_Sprite;
var Preset11_Sprite;
var Preset12_Sprite;

var Save1_Sprite;
var Load1_Sprite;
var Save2_Sprite;
var Load2_Sprite;

//* Statuses:

var BackgroundColor = "Black";

var OriginX_Pix;
var OriginY_Pix;
var OriginX_Per = 50;
var OriginY_Per = 50;
var ProjectileShape = "Square";
var ProjectileLength = 30;
var ProjectileWidth = 10;
var ProjectileColorType = "Color";
var ProjectileColor = 120;
var RainbowSpeed = 0;
var ProjectileOutline = 0;
var ProjectileNumber = Infinity;
var RateOfFire = 1;
var ProjectileSpeed = 1;
var ProjectileDirection = 0;
var ProjectileSpinSpeed = 0;
var ScreenSquare = "False";
var ProjectileCollisionWithWallMode = "None";
//var ProjectileTrails = 10;

var StartText = "Start";

// Saved Statuses:

var BackgroundColor_Save_1;

var OriginX_Pix_Save_1;
var OriginY_Pix_Save_1;
var OriginX_Per_Save_1;
var OriginY_Per_Save_1;
var ProjectileShape_Save_1;
var ProjectileLength_Save_1;
var ProjectileWidth_Save_1;
var ProjectileColorType_Save_1;
var ProjectileColor_Save_1;
var RainbowSpeed_Save_1;
var ProjectileOutline_Save_1;
var ProjectileNumber_Save_1;
var RateOfFire_Save_1;
var ProjectileSpeed_Save_1;
var ProjectileDirection_Save_1;
var ProjectileSpinSpeed_Save_1;
var ScreenSquare_Save_1;
var ProjectileCollisionWithWallMode_Save_1;

var BackgroundColor_Save_2;

var OriginX_Pix_Save_2;
var OriginY_Pix_Save_2;
var OriginX_Per_Save_2;
var OriginY_Per_Save_2;
var ProjectileShape_Save_2;
var ProjectileLength_Save_2;
var ProjectileWidth_Save_2;
var ProjectileColorType_Save_2;
var ProjectileColor_Save_2;
var RainbowSpeed_Save_2;
var ProjectileOutline_Save_2;
var ProjectileNumber_Save_2;
var RateOfFire_Save_2;
var ProjectileSpeed_Save_2;
var ProjectileDirection_Save_2;
var ProjectileSpinSpeed_Save_2;
var ScreenSquare_Save_2;
var ProjectileCollisionWithWallMode_Save_2;


// "Well hello there." -General Kenobi

/*

#Credits:

*--Thank you Mom for helping me push through.

*--Thank you Codey and Riley for the help.

*/
