/*
#---Plan:

// Main Vars:

var CanvasWidth;
var CanvasHeight;

var NumOfButtons = 1;
var NumOfTexts = 0;

var TimeSinceFired = 0;

var GameStatus = "Stopped";

var InstructionText = true;

var UIHide = false;

var ColorPicker;

var FPS;

var Saved = false;

var Red = 255;
var Green = 0;
var Blue = 0;

// Sprites:

var Origin;
var CurrentProjectile;

// Groups:

var Projectiles;
var Buttons;

// Button Sprites:

// var Background = {};
// Background.save = ...;

var UIHide_Sprite;
var BackgroundColor_Sprite;
var Preset1_Sprite;
var Preset2_Sprite;
var Preset3_Sprite;
var Save_Sprite;
var Load_Sprite;

var OriginX_Sprite;
var OriginY_Sprite;
var ProjectileShape_Sprite;
var ProjectileWidth_Sprite;
var ProjectileLength_Sprite;
var ProjectileColorType_Sprite;
var ProjectileColor_Sprite;
var RainbowSpeed_Sprite;
var ProjectileNumber_Sprite;
var RateOfFire_Sprite;
var ProjectileSpeed_Sprite;
var ProjectileDirection_Sprite;
var ProjectileSpinSpeed_Sprite;
var ProjectileCollisionWithWallMode_Sprite;
var Start_Sprite;


// Statuses:

var BackgroundColor = "Black";

var OriginX_Pix;
var OriginY_Pix;
var OriginX_Per = 50;
var OriginY_Per = 50;
var ProjectileShape = "Square";
var ProjectileWidth = 10;
var ProjectileLength = 10;
var ProjectileColorType = "Color";
var ProjectileColor = 120;
var RainbowSpeed = 0;
var ProjectileNumber = Infinity;
var RateOfFire = 1;
var ProjectileSpeed = 1;
var ProjectileDirection = 0;
var ProjectileSpinSpeed = 0;
var ProjectileCollisionWithWallMode = "None";
var StartText = "Start";


// Saved Statuses:

var BackgroundColor_Save;

var OriginX_Pix_Save;
var OriginY_Pix_Save;
var OriginX_Per_Save;
var OriginY_Per_Save;
var ProjectileShape_Save;
var ProjectileWidth_Save;
var ProjectileLength_Save;
var ProjectileColorType_Save;
var ProjectileColor_Save;
var RainbowSpeed_Save;
var ProjectileNumber_Save;
var RateOfFire_Save;
var ProjectileSpeed_Save;
var ProjectileDirection_Save;
var ProjectileSpinSpeed_Save;
var ProjectileCollisionWithWallMode_Save;
var StartText_Save;


function preload() {
    
    
}



function RecreateColorPicker() {

    ColorPicker = createColorPicker(ProjectileColor);
    ColorPicker.position(15, 430);
    ColorPicker.size(84, 40);
    ColorPicker.input(() => { ProjectileColor = ColorPicker.value() });
}


function CreateButton(side, Hide) {

    var Side;

    NumOfButtons++; 

    if(side == 1) Side = 60;
    else if(side == 2) Side = CanvasWidth - 60;

    if(!Hide) {

        var CurrentButton;

        CurrentButton = createSprite(Side, 50 * NumOfButtons, 80, 30);
    
        //CurrentButton.shapeColor = color(120);

        CurrentButton.draw = function() {

            fill(120);
            rect(0, 0, 80, 30, 2);
        }

        CurrentButton.onMouseOver = function() { if(!UIHide) cursor(HAND) };
        CurrentButton.onMouseOut = function() { cursor(ARROW) };

        Buttons.add(CurrentButton);
    }

    return CurrentButton;

}

function CreateText(Name, Status, side) {

    var Side;

    NumOfTexts++;

    if(side == 1) Side = 60;
    else if(side == 2) Side = CanvasWidth - 60;

    text(Name, Side, 50 * NumOfTexts - 16);

    textSize(15);

    text(Status, Side, 50 * NumOfTexts + 5);

    if(side == 2) textSize(10);
}


function CreateProjectiles() {
  
    TimeSinceFired += deltaTime / 1000;

    //TimeSinceFired = 0;
    
    if(GameStatus == "Running" && TimeSinceFired >= 1 / RateOfFire && ProjectileNumber > Projectiles.length || GameStatus == "Running" && TimeSinceFired >= 1 / RateOfFire && ProjectileNumber == Infinity) {
      
      TimeSinceFired = 0;
      
      CurrentProjectile = createSprite(Origin.position.x, Origin.position.y , ProjectileLength, ProjectileWidth);

      CurrentProjectile.Shape = ProjectileShape;

      if(ProjectileColorType == "Random" || ProjectileColorType == "random") CurrentProjectile.Color = color(random(255), random(255), random(255));

      else if(ProjectileColorType == "Rainbow" || ProjectileColorType == "rainbow") CurrentProjectile.Color = color(Red, Green, Blue);

      else CurrentProjectile.Color = ProjectileColor;
  
      CurrentProjectile.setSpeed(ProjectileSpeed, ProjectileDirection - 90);
      
      CurrentProjectile.rotation = (ProjectileDirection - 90);

      CurrentProjectile.draw = function() {

        fill(this.Color);

        if(this.Shape == "Square") {
            rect(0, 0, this.width, this.height);
        }

        else if(this.Shape == "Circle") {
            ellipse(0, 0, this.width, this.height);
        }

    }
        Projectiles.add(CurrentProjectile);

    }
    
}


function setup() {

    CanvasWidth = windowWidth;
    CanvasHeight = windowHeight;

    setInterval(function() { FPS = Math.floor(getFrameRate()) }, 500);
    
    createCanvas(CanvasWidth, CanvasHeight);

    textAlign(CENTER);

    textSize(10);

    OriginX_Pix = CanvasWidth / 2;
    OriginY_Pix = CanvasHeight / 2; 
    
    Projectiles = new Group();
    Buttons = new Group();

    ColorPicker = createColorPicker(color(120));
    ColorPicker.position(15, 430);
    ColorPicker.size(84, 40);
    ColorPicker.input(() => { ProjectileColor = ColorPicker.value() });

    this.Text = createDiv("The Color Machine!<br/><br/>This is a Game about Creativity. There is NO Goal to the Game. You can adjust the Settings on the Right and Left to make any Pattern you'd like! There are already premade Presets on the Left If you Click them and hit Startthey will show you a Few Examples.<br/><br/>When you're Ready to Run your Project just hit START.");
    this.Text.style('font-size', "20px");
    this.Text.style("text-align", "center");
    this.Text.style("margin", "125px");
    this.Text.style("color", "White")
    this.Text.position(0, -50);

    // Origin:

    Origin = createSprite(OriginX_Pix, OriginY_Pix, 10, 10);

    Origin.draw = function() {

        fill(120);

        if(ProjectileShape == "Square") {
            noStroke();
            rect(OriginX_Pix - this.width / 2, OriginY_Pix - this.height / 2, this.width, this.height);
        }

        else if(ProjectileShape == "Circle") {
            noStroke();
            ellipse(OriginX_Pix, OriginY_Pix, this.width, this.height);
        }
    }

    // UI Hide Button:
    UIHide_Sprite = createSprite(60, 50, 80, 30);
    UIHide_Sprite.onMouseOver = function() { cursor(HAND) };
    UIHide_Sprite.onMouseOut = function() { cursor(ARROW) };
    UIHide_Sprite.draw = function() {
        fill(120);
        rect(0, 0, 80, 30, 2);
    }

    // Background Button:
    BackgroundColor_Sprite = CreateButton(1, false); 

    // Presets Buttons:
    Preset1_Sprite = CreateButton(1, false);
    Preset2_Sprite = CreateButton(1, false);
    Preset3_Sprite = CreateButton(1, false);

    Save_Sprite = CreateButton(1, false);
    Load_Sprite = CreateButton(1, false);

    ProjectileColorType_Sprite = CreateButton(1, false);

    ProjectileColor_Sprite = CreateButton(1, true);

    RainbowSpeed_Sprite = CreateButton(1, false);

    ProjectileCollisionWithWallMode_Sprite = CreateButton(1, false);

    NumOfButtons = 0;

    // Options Buttons:
    OriginX_Sprite = CreateButton(2, false);
    OriginY_Sprite = CreateButton(2, false);
    ProjectileShape_Sprite = CreateButton(2, false);
    ProjectileWidth_Sprite = CreateButton(2, false);
    ProjectileLength_Sprite = CreateButton(2, false);
    RateOfFire_Sprite = CreateButton(2, false);
    ProjectileNumber_Sprite = CreateButton(2, false);
    ProjectileSpeed_Sprite = CreateButton(2, false);
    ProjectileDirection_Sprite = CreateButton(2, false);
    ProjectileSpinSpeed_Sprite = CreateButton(2, false);
    Start_Sprite = CreateButton(2, false);


    //Actions:

    BackgroundColor_Sprite.onMouseReleased = function() {

        if(BackgroundColor == "Black") {
            BackgroundColor = "White";
        }
    
        else if(BackgroundColor == "White") {
            BackgroundColor = "Black";
        }
    }
    
    Start_Sprite.onMouseReleased = function() {

        if(GameStatus == "Stopped") {
            InstructionText = false;
            GameStatus = "Running";
            StartText = "Stop";
        }

        else if(GameStatus == "Running") {
            GameStatus = "Idle";
            StartText = "Reset";
        }

        else if(GameStatus == "Idle") {
            GameStatus = "Stopped";
            StartText = "Start";

            while(Projectiles.length >= 1) {
            Projectiles.get(0).remove();
            }
        }

    }

    OriginX_Sprite.onMouseReleased = function() {

        OriginX_Per = PromptsForButtons("Origin X = Horizontal Axis", OriginX_Per);

        ChangeOriginXPosition()
    }

    OriginY_Sprite.onMouseReleased = function() {
        
        OriginY_Per = PromptsForButtons("Origin Y = Vertical Axis", OriginY_Per);

        ChangeOriginYPosition()
    }

    ProjectileShape_Sprite.onMouseReleased = function() {

        if(ProjectileShape == "Square") {
            ProjectileShape = "Circle";
        }

        else if(ProjectileShape == "Circle") {
            ProjectileShape = "Square"
        }
        
    }

    ProjectileCollisionWithWallMode_Sprite.onMouseReleased = function() {

        if(ProjectileCollisionWithWallMode == "None") {
            ProjectileCollisionWithWallMode = "Bounce";
        }

        else if(ProjectileCollisionWithWallMode == "Bounce") {
            ProjectileCollisionWithWallMode = "Loop";
        }

        else if(ProjectileCollisionWithWallMode == "Loop") {
            ProjectileCollisionWithWallMode = "None";
        }

    }

    ProjectileWidth_Sprite.onMouseReleased = function() { ProjectileWidth = PromptsForButtons("Projectile Width", ProjectileWidth) };

    ProjectileLength_Sprite.onMouseReleased = function() { ProjectileLength = PromptsForButtons("Projectile Length", ProjectileLength) };

    ProjectileColorType_Sprite.onMouseReleased = function() {
        if(ProjectileColorType == "Color") ProjectileColorType = "Random";
        else if(ProjectileColorType == "Random") ProjectileColorType = "Rainbow";
        else if(ProjectileColorType == "Rainbow") ProjectileColorType = "Color";
    }

    RainbowSpeed_Sprite.onMouseReleased = function() {
        RainbowSpeed = PromptsForButtons("Rainbow Speed", RainbowSpeed);
        if(RainbowSpeed > 255) RainbowSpeed = 255;
    }

    ProjectileNumber_Sprite.onMouseReleased = function() {
        ProjectileNumber = PromptsForButtons("Number of Projectiles allowed on Screen OR Infinity", ProjectileNumber);
        if(String(ProjectileNumber).toLowerCase() == "infinity") ProjectileNumber = Infinity;
    }

    RateOfFire_Sprite.onMouseReleased = function() {
        RateOfFire = PromptsForButtons("Rate of Fire", RateOfFire);
        if(RateOfFire > 100) RateOfFire = 100;
    }

    ProjectileSpeed_Sprite.onMouseReleased = function() { ProjectileSpeed = PromptsForButtons("Projectile Speed", ProjectileSpeed) };

    ProjectileDirection_Sprite.onMouseReleased = function() { ProjectileDirection = PromptsForButtons("Origin Direction  0 to 360", ProjectileDirection) };

    ProjectileSpinSpeed_Sprite.onMouseReleased = function() { ProjectileSpinSpeed = PromptsForButtons("Origin Spin Speed   + OR -", ProjectileSpinSpeed) };


    // UI Hide:

    UIHide_Sprite.onMouseReleased = function() {
        if(UIHide) UIHide = false;
        else if(!UIHide) UIHide = true;
    }


    // Preset Actions:

    Preset1_Sprite.onMouseReleased = function() {

        OriginX_Per = 50;
        OriginY_Per = 50;

        ChangeOriginPosition()

        ProjectileShape = "Circle";
        ProjectileWidth = 15;
        ProjectileLength = 45;
        ProjectileColorType = "Rainbow";
        RainbowSpeed = -3;
        ProjectileNumber = Infinity;
        RateOfFire = 100;
        ProjectileSpeed = 1;
        ProjectileDirection = 0;
        ProjectileSpinSpeed = 20;
        ProjectileCollisionWithWallMode = "None";
    }

    Preset2_Sprite.onMouseReleased = function() {

        OriginX_Per = 50;
        OriginY_Per = 50;

        ChangeOriginPosition()

        ProjectileShape = "Square";
        ProjectileWidth = 20;
        ProjectileLength = 5;
        ProjectileColor = "DarkGreen";
        ProjectileNumber = 100;
        RateOfFire = 5;
        ProjectileSpeed = 1;
        ProjectileDirection = 0;
        ProjectileSpinSpeed = -3;
        ProjectileCollisionWithWallMode = "Bounce";
    }

    Preset3_Sprite.onMouseReleased = function() {

        OriginX_Per = 0;
        OriginY_Per = 100;

        ChangeOriginPosition()

        ProjectileShape = "Square";
        ProjectileWidth = 10;
        ProjectileLength = 10;
        ProjectileColorType = "Random";
        ProjectileNumber = 500;
        RateOfFire = 100;
        ProjectileSpeed = .5;
        ProjectileDirection = 0;
        ProjectileSpinSpeed = 50;
        ProjectileCollisionWithWallMode = "Loop";
    }

    Save_Sprite.onMouseReleased = function() {

        OriginX_Per_Save = OriginX_Per;
        OriginY_Per_Save = OriginY_Per;
        ProjectileShape_Save = ProjectileShape;
        ProjectileWidth_Save = ProjectileWidth;
        ProjectileLength_Save = ProjectileLength;
        ProjectileColorType_Save = ProjectileColorType;
        RainbowSpeed_Save = RainbowSpeed;
        ProjectileNumber_Save = ProjectileNumber;
        RateOfFire_Save = RateOfFire;
        ProjectileSpeed_Save = ProjectileSpeed;
        ProjectileDirection_Save = ProjectileDirection;
        ProjectileSpinSpeed_Save = ProjectileSpinSpeed;
        ProjectileCollisionWithWallMode_Save = ProjectileCollisionWithWallMode;
        BackgroundColor_Save = BackgroundColor;

        //Load_Sprite.shapeColor = color(200);

        Saved = true;
    }

    Load_Sprite.onMouseReleased = function() {

        if(Saved == true) {

        OriginX_Per = OriginX_Per_Save;
        OriginY_Per = OriginY_Per_Save;

        ChangeOriginPosition()

        ProjectileShape = ProjectileShape_Save;
        ProjectileWidth = ProjectileWidth_Save;
        ProjectileLength = ProjectileLength_Save;
        ProjectileColorType = ProjectileColorType_Save;
        RainbowSpeed = RainbowSpeed_Save;
        ProjectileNumber = ProjectileNumber_Save;
        RateOfFire = RateOfFire_Save;
        ProjectileSpeed = ProjectileSpeed_Save;
        ProjectileDirection = ProjectileDirection_Save;
        ProjectileSpinSpeed = ProjectileSpinSpeed_Save;
        ProjectileCollisionWithWallMode = ProjectileCollisionWithWallMode_Save;
        BackgroundColor = BackgroundColor_Save;

        }
    }

}

function ChangeOriginPosition() {
    ChangeOriginXPosition();
    ChangeOriginYPosition();
}

function ChangeOriginXPosition() {
    OriginX_Pix = (OriginX_Per / 100) * CanvasWidth;
    Origin.position.x = OriginX_Pix;
}

function ChangeOriginYPosition() {
    OriginY_Pix = (OriginY_Per / 100) * CanvasHeight;
    Origin.position.y = OriginY_Pix;
}



function PromptsForButtons(Text, Var2) {

    var Var = prompt(Text);

    if(Var == null || Var == "") Var = Var2;

    return Var;
}



function OriginSpinSpeedProcessing() {

    if(Number(ProjectileSpinSpeed) > 0) {
        ProjectileDirection += Number(ProjectileSpinSpeed) / 10;

        if(ProjectileDirection >= 360) {
            ProjectileDirection = 0;
        }
    }

    else if(Number(ProjectileSpinSpeed) < 0) {
        ProjectileDirection += Number(ProjectileSpinSpeed) / 10;

        if(ProjectileDirection <= 0) {
            ProjectileDirection = 360;
        }
    }

}

function Bounce() {

    for(var i = 0; i < Projectiles.length; i++) {
        var s = Projectiles[i];
        if(s.position.x < 0) {
          s.position.x = 1;
          s.velocity.x = abs(s.velocity.x);
        }
    
        if(s.position.x > width) {
          s.position.x = width - 1;
          s.velocity.x = -abs(s.velocity.x);
        }
    
        if(s.position.y < 0) {
          s.position.y = 1;
          s.velocity.y = abs(s.velocity.y);
        }
    
        if(s.position.y > height) {
          s.position.y = height - 1;
          s.velocity.y = -abs(s.velocity.y);
        }

        Projectiles[i].rotation = s.getDirection();
    }

}


function Loop() {

    for(var i = 0; i < Projectiles.length; i++) {

        var s = Projectiles[i];
        if(s.position.x < 0) {
            Projectiles[i].position.x = CanvasWidth;
        }
    
        if(s.position.x > width) {
            Projectiles[i].position.x = 0;
        }
    
        if(s.position.y < 0) {
            Projectiles[i].position.y = CanvasHeight;
        }
    
        if(s.position.y > height) {
            Projectiles[i].position.y = 0;
        }


    }
}


function draw() {

    if(BackgroundColor == "Black") background("Black");
    else if(BackgroundColor == "White") background("White");

    drawSprites(Origin);
    drawSprites(Projectiles);
    drawSprite(UIHide_Sprite);

    CreateProjectiles();

    if(ProjectileCollisionWithWallMode == "None") Cleaner();

    else if(ProjectileCollisionWithWallMode == "Bounce") Bounce();

    else if(ProjectileCollisionWithWallMode == "Loop") Loop();

    if(ProjectileSpinSpeed != 0 && GameStatus == "Running") OriginSpinSpeedProcessing();

    if(RainbowSpeed != 0 && ProjectileColorType == "Rainbow" && GameStatus == "Running") {
        if(Blue <= 0 && Red >= 255) Green += Number(RainbowSpeed);
        if(Blue <= 0 && Green >= 255) Red -= Number(RainbowSpeed);
        if(Red <= 0 && Green >= 255) Blue += Number(RainbowSpeed);
        if(Red <= 0 && Blue >= 255) Green -= Number(RainbowSpeed);
        if(Green <= 0 && Blue >= 255) Red += Number(RainbowSpeed);
        if(Green <= 0 && Red >= 255) Blue -= Number(RainbowSpeed);
    }

    // consoles:

    //console.error(deltaTime);
    //console.error(GameStatus);
    //console.log(Projectiles.length);
    //console.log(ProjectileDirection);
    //console.error(getFrameRate());
    //console.log(TimeSinceFired);
    //console.log(ProjectileColor);
    //console.log("Red" + Red);
    //console.log("Green" + Green);
    //console.log("Blue" + Blue);
    //console.log(RainbowSpeed);


*--General:
    --Adjust button sizing to screen.  ? √ ?  (I have to test on a phone... Waiting for release)
    //--Color picker hand cursor is not working right.

*--Features:
    //--Pause feature.
    //--Colliders ???

#---Notes:

    --Disabled the logo/playIntro() for p5play.

*/

console.log("Date last updated: 2-1-24");

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
