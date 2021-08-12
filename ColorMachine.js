// Main Vars:

var CanvasWidth;
var CanvasHeight;

var NumOfButtons = 1;
var NumOfTexts = 0;

var TimeSinceFired = 0;

var GameStatus = "Stopped";

var InstructionText = true;

var UIHide = false;

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
var ProjectileColor = "Random";
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




function CreateButton(side) {

    var Side;

    NumOfButtons++;

    if(side == 1) Side = 60;
    else if(side == 2) Side = CanvasWidth - 60;

    var CurrentButton;

    CurrentButton = createSprite(Side, 50 * NumOfButtons, 80, 30);
  
    CurrentButton.shapeColor = color(120);
  
    CurrentButton.onMouseOver = function() { cursor(HAND) };
    CurrentButton.onMouseOut = function() { cursor(ARROW) };

    Buttons.add(CurrentButton);

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

      if(ProjectileColor == "Random" || ProjectileColor == "random") CurrentProjectile.Color = color(random(255), random(255), random(255));

      else if(ProjectileColor == "Rainbow" || ProjectileColor == "rainbow") CurrentProjectile.Color = color(Red, Green, Blue);

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
    UIHide_Sprite.shapeColor = color(120);
    UIHide_Sprite.onMouseOver = function() { cursor(HAND) };
    UIHide_Sprite.onMouseOut = function() { cursor(ARROW) };

    // Background Button:
    BackgroundColor_Sprite = CreateButton(1); 

    // Presets Buttons:
    Preset1_Sprite = CreateButton(1);
    Preset2_Sprite = CreateButton(1);
    Preset3_Sprite = CreateButton(1);

    Save_Sprite = CreateButton(1);
    Load_Sprite = CreateButton(1);

    RainbowSpeed_Sprite = CreateButton(1);

    NumOfButtons = 0;

    // Options Buttons:
    OriginX_Sprite = CreateButton(2);
    OriginY_Sprite = CreateButton(2);
    ProjectileShape_Sprite = CreateButton(2);
    ProjectileWidth_Sprite = CreateButton(2);
    ProjectileLength_Sprite = CreateButton(2);
    ProjectileColor_Sprite = CreateButton(2);
    ProjectileNumber_Sprite = CreateButton(2);
    RateOfFire_Sprite = CreateButton(2);
    ProjectileSpeed_Sprite = CreateButton(2);
    ProjectileDirection_Sprite = CreateButton(2);
    ProjectileSpinSpeed_Sprite = CreateButton(2);
    ProjectileCollisionWithWallMode_Sprite = CreateButton(2);
    Start_Sprite = CreateButton(2);


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

    ProjectileColor_Sprite.onMouseReleased = function() { ProjectileColor = PromptsForButtons("Projectile Color OR Random OR Rainbow:  NO Spaces", ProjectileColor) };

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
        ProjectileColor = "Rainbow";
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
        ProjectileColor = "Random";
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
        ProjectileColor_Save = ProjectileColor;
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
        ProjectileColor = ProjectileColor_Save;
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

    if(RainbowSpeed != 0) {
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
    console.log("Red" + Red);
    //console.log("Green" + Green);
    //console.log("Blue" + Blue);
    //console.log(RainbowSpeed);


    //FPS:

    fill(120);

    text("FPS " + FPS, CanvasWidth - 20, 10);


    if(InstructionText) {

        textSize(50);

        fill(125);

        text("The Color Machine!", CanvasWidth / 2, 50);
        
        textSize(20);

        text("This is a Game about Creativity.", CanvasWidth / 2, 100);

        text("There is NO Goal to the Game.", CanvasWidth / 2, 150);

        text("You can adjust the Settings on the Right", CanvasWidth / 2, 200);

        text("to make any Pattern you'd like!", CanvasWidth / 2, 250);

        text("There are already premade Presets on the Left", CanvasWidth / 2, 300);

        text("If you Click them and hit Start", CanvasWidth / 2, 350);

        text("they will show you a Few Examples.", CanvasWidth / 2, 400);

        text("When you're Ready to Run your Project just hit START.", CanvasWidth / 2, 450);

    }

    

    if(BackgroundColor == "Black") fill("White");
    else if(BackgroundColor == "White") fill("Black");

    textSize(15);

    //text("UI", 60, 34);

    if(UIHide) {
        CreateText("UI", "Show", 1);
        NumOfTexts = 0;
    }
    
    else if(!UIHide) CreateText("UI", "Hide", 1);
    
    

    if(!UIHide) {

        drawSprites(Buttons);

        // Left Texts:

        textSize(10);

        if(BackgroundColor == "Black") CreateText("Background Color","White", 1);
        else if(BackgroundColor == "White") CreateText("Background Color", "Black", 1);

        CreateText("Preset 1", "Click", 1);
        CreateText("Preset 2", "Click", 1);
        CreateText("Preset 3", "Click", 1);

        CreateText("Save", "Click", 1);

        var t = "Not Saved";
        if(Saved == true) t = "Click";

        CreateText("Load", t, 1);

        textSize(11);

        CreateText("Rainbow Speed", RainbowSpeed, 1);

        NumOfTexts = 0;

        // Right Texts:

        textSize(10);
        CreateText("Origin X", OriginX_Per + "%", 2);
        CreateText("Origin Y", OriginY_Per + "%", 2);
        CreateText("Projectile Shape", ProjectileShape, 2);
        CreateText("Projectile Width", ProjectileWidth, 2);
        CreateText("Projectile Length", ProjectileLength, 2);
        CreateText("Projectile Color", ProjectileColor, 2);
        textSize(8);
        CreateText("Number of Projectiles", ProjectileNumber, 2);
        CreateText("Rate of Fire", RateOfFire + " per Sec", 2);
        CreateText("Projectile Speed", ProjectileSpeed, 2);
        CreateText("Origin Direction", Math.floor(ProjectileDirection), 2);
        textSize(9);
        CreateText("Origin Spin Speed", ProjectileSpinSpeed, 2);
        CreateText("With Wall Mode", ProjectileCollisionWithWallMode, 2);
        text("Projectile Collision", CanvasWidth - 60, 50 * NumOfTexts - 26);
        CreateText(Projectiles.length + " Projectiles", StartText, 2);

        NumOfTexts = 0;
    }

}



function Cleaner() {
  
    CleanGroup(Projectiles);
}
  
function CleanGroup(SpriteGroup) {
    
    for(var i = 0; i < SpriteGroup.length;i++) {
      
        var Item = SpriteGroup.get(i);
      
        if(Item.position.x <= -15 || Item.position.x >= CanvasWidth + 15 || Item.position.y <= -15 || Item.position.y >= CanvasHeight + 15) {
        
            Item.remove();
        
            i--;
        
        }
    }
}


/*

//Credits:

/Thank you Mom for helping me push through.

/Thank you Codey for the help.

*/