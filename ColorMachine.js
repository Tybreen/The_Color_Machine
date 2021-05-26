// Main Vars:

var CanvasWidth;
var CanvasHeight;

var Black = 0;
var White = 255;

var NumOfButtons = 1;
var NumOfTexts = 0;

var TimeSinceFired = 0;

var GameStatus = "Stopped";

var InstructionText = true;

var UIHide = false;

var FPS;

// Sprites:

var Origin;
var CurrentProjectile;
var Projectiles;
var Buttons;

// Button Sprites:

var BackgroundColor_Sprite;
var OriginX_Sprite;
var OriginY_Sprite;
var ProjectileShape_Sprite;
var ProjectileWidth_Sprite;
var ProjectileLength_Sprite;
var ProjectileColor_Sprite;
var ProjectileNumber_Sprite;
var RateOfFire_Sprite;
var ProjectileSpeed_Sprite;
var ProjectileDirection_Sprite;
var ProjectileSpinSpeed_Sprite;
var ProjectileCollisionWithWallMode_Sprite;
var Start_Sprite;
var UIHide_Sprite;
var Preset1_Sprite;
var Preset2_Sprite;
var Preset3_Sprite;


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
var ProjectileNumber = Infinity;
var RateOfFire = 1;
var ProjectileSpeed = 1;
var ProjectileDirection = 0;
var ProjectileSpinSpeed = 0;
var ProjectileCollisionWithWallMode = "None";
var StartText = "Start";



function preload() {
    
    
}




function CreateButton() {

    var CurrentButton;

    CurrentButton = createSprite(CanvasWidth - 60, 50 * NumOfButtons, 80, 30);
  
    CurrentButton.shapeColor = color(120);
  
    CurrentButton.onMouseOver = function() { cursor(HAND) };
  
    CurrentButton.onMouseOut = function() { cursor(ARROW) };

    NumOfButtons++;

    Buttons.add(CurrentButton);

    return CurrentButton;

}

function CreateText(Name, Status) {

    NumOfTexts++;

    text(Name, CanvasWidth - 60, 50 * NumOfTexts - 16);

    textSize(15);

    text(Status, CanvasWidth - 60, 50 * NumOfTexts + 5);

    textSize(10);
}


function CreateProjectile() {
  
    TimeSinceFired += deltaTime / 1000;

    //TimeSinceFired = 0;
    
    if(GameStatus == "Running" && TimeSinceFired >= 1 / RateOfFire && ProjectileNumber > Projectiles.length || GameStatus == "Running" && TimeSinceFired >= 1 / RateOfFire && ProjectileNumber == Infinity) {
      
      TimeSinceFired = 0;
      
      CurrentProjectile = createSprite(Origin.position.x, Origin.position.y , ProjectileLength, ProjectileWidth);

      CurrentProjectile.Shape = ProjectileShape;

      if(ProjectileColor != "Random" && ProjectileColor != "random") {

        CurrentProjectile.Color = ProjectileColor;
      }

      else CurrentProjectile.Color = color(random(255), random(255), random(255));
  
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

    setInterval(function() { FPS = Math.floor(getFrameRate()) }, 200);
    
    createCanvas(CanvasWidth, CanvasHeight);

    textAlign(CENTER);

    textSize(10);

    OriginX_Pix = CanvasWidth / 2;
    OriginY_Pix = CanvasHeight / 2;   

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


    Projectiles = new Group();
    Buttons = new Group();


    // UI Hide:

    UIHide_Sprite = createSprite(60, 50, 80, 30);

    UIHide_Sprite.shapeColor = color(120);

    UIHide_Sprite.onMouseOver = function() { cursor(HAND) };

    UIHide_Sprite.onMouseOut = function() { cursor(ARROW) };


    // Background Button:

    BackgroundColor_Sprite = createSprite(60, 100, 80, 30);

    BackgroundColor_Sprite.shapeColor = color(120);

    BackgroundColor_Sprite.onMouseOver = function() { cursor(HAND) };

    BackgroundColor_Sprite.onMouseOut = function() { cursor(ARROW) };

    Buttons.add(BackgroundColor_Sprite);

    
    // Presets Button:

    // 1:

    Preset1_Sprite = createSprite(60, 150, 80, 30);

    Preset1_Sprite.shapeColor = color(120);

    Preset1_Sprite.onMouseOver = function() { cursor(HAND) };

    Preset1_Sprite.onMouseOut = function() { cursor(ARROW) };

    Buttons.add(Preset1_Sprite);

    // 2:

    Preset2_Sprite = createSprite(60, 200, 80, 30);

    Preset2_Sprite.shapeColor = color(120);

    Preset2_Sprite.onMouseOver = function() { cursor(HAND) };

    Preset2_Sprite.onMouseOut = function() { cursor(ARROW) };

    Buttons.add(Preset2_Sprite);

    // 3:

    Preset3_Sprite = createSprite(60, 250, 80, 30);

    Preset3_Sprite.shapeColor = color(120);

    Preset3_Sprite.onMouseOver = function() { cursor(HAND) };

    Preset3_Sprite.onMouseOut = function() { cursor(ARROW) };

    Buttons.add(Preset3_Sprite);

    // Buttons:
    OriginX_Sprite = CreateButton();
    OriginY_Sprite = CreateButton();
    ProjectileShape_Sprite = CreateButton();
    ProjectileWidth_Sprite = CreateButton();
    ProjectileLength_Sprite = CreateButton();
    ProjectileColor_Sprite = CreateButton();
    ProjectileNumber_Sprite = CreateButton();
    RateOfFire_Sprite = CreateButton();
    ProjectileSpeed_Sprite = CreateButton();
    ProjectileDirection_Sprite = CreateButton();
    ProjectileSpinSpeed_Sprite = CreateButton();
    ProjectileCollisionWithWallMode_Sprite = CreateButton();
    Start_Sprite = CreateButton();


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

        OriginX_Per = PromptsForButtons("Origin X", OriginX_Per);

        OriginX_Pix = (OriginX_Per / 100) * CanvasWidth;

        Origin.position.x = OriginX_Pix;
    }

    OriginY_Sprite.onMouseReleased = function() {
        
        OriginY_Per = PromptsForButtons("Origin Y", OriginY_Per);

        OriginY_Pix = (OriginY_Per / 100) * CanvasHeight;

        Origin.position.y = OriginY_Pix;
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

    ProjectileColor_Sprite.onMouseReleased = function() { ProjectileColor = PromptsForButtons("Projectile Color OR Random", ProjectileColor) };

    ProjectileNumber_Sprite.onMouseReleased = function() { ProjectileNumber = PromptsForButtons("Number of Projectiles allowed on Screen", ProjectileNumber) };

    RateOfFire_Sprite.onMouseReleased = function() {
        RateOfFire = PromptsForButtons("Rate of Fire", RateOfFire);
        if(RateOfFire > 100) RateOfFire = 100;
    }

    ProjectileSpeed_Sprite.onMouseReleased = function() { ProjectileSpeed = PromptsForButtons("Projectile Speed", ProjectileSpeed) };

    ProjectileDirection_Sprite.onMouseReleased = function() { ProjectileDirection = PromptsForButtons("Origin Direction  0 to 360", ProjectileDirection) };

    ProjectileSpinSpeed_Sprite.onMouseReleased = function() { ProjectileSpinSpeed = PromptsForButtons("Origin Spin Speed", ProjectileSpinSpeed) };


    // UI Hide:

    UIHide_Sprite.onMouseReleased = function() {

        if(UIHide) {
            UIHide = false;
        }

        else if(!UIHide) {
            UIHide = true;
        }

    }


    // Preset Actions:

    Preset1_Sprite.onMouseReleased = function() {

        OriginX_Per = 50;
        OriginY_Per = 50;

        OriginX_Pix = (OriginX_Per / 100) * CanvasWidth;
        Origin.position.x = OriginX_Pix;

        OriginY_Pix = (OriginY_Per / 100) * CanvasHeight;
        Origin.position.y = OriginY_Pix;

        ProjectileShape = "Circle";
        ProjectileWidth = 30;
        ProjectileLength = 15;
        ProjectileColor = "Random";
        ProjectileNumber = Infinity;
        RateOfFire = 100;
        ProjectileSpeed = .2;
        ProjectileDirection = 0;
        ProjectileSpinSpeed = 50;
        ProjectileCollisionWithWallMode = "None";
    }

    Preset2_Sprite.onMouseReleased = function() {

        OriginX_Per = 50;
        OriginY_Per = 50;

        OriginX_Pix = (OriginX_Per / 100) * CanvasWidth;
        Origin.position.x = OriginX_Pix;

        OriginY_Pix = (OriginY_Per / 100) * CanvasHeight;
        Origin.position.y = OriginY_Pix;

        ProjectileShape = "Square";
        ProjectileWidth = 20;
        ProjectileLength = 5;
        ProjectileColor = "DarkGreen";
        ProjectileNumber = 100;
        RateOfFire = 5;
        ProjectileSpeed = 1;
        ProjectileDirection = 0;
        ProjectileSpinSpeed = 3;
        ProjectileCollisionWithWallMode = "Bounce";
    }

    Preset3_Sprite.onMouseReleased = function() {

        OriginX_Per = 0;
        OriginY_Per = 100;

        OriginX_Pix = (OriginX_Per / 100) * CanvasWidth;
        Origin.position.x = OriginX_Pix;

        OriginY_Pix = (OriginY_Per / 100) * CanvasHeight;
        Origin.position.y = OriginY_Pix;

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

}

function PromptsForButtons(Text, Var2) {

    var Var = prompt(Text);

    if(Var == null || Var == "") {
        Var = Var2;
    }

    return Var;
}



function OriginSpinSpeedProcessing() {

    ProjectileDirection += Number(ProjectileSpinSpeed) / 10;

    if(ProjectileDirection >= 360) {
        ProjectileDirection -= 360;
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

    if(BackgroundColor == "Black") background(Black);
    else if(BackgroundColor == "White") background(White);

    drawSprites(Origin);
    drawSprite(UIHide_Sprite);
    drawSprites(Projectiles);

    CreateProjectile();

    if(ProjectileCollisionWithWallMode == "None") Cleaner();

    if(ProjectileCollisionWithWallMode == "Bounce") Bounce();

    else if(ProjectileCollisionWithWallMode == "Loop") Loop();

    if(ProjectileSpinSpeed > 0 && GameStatus == "Running") OriginSpinSpeedProcessing();


    // consoles:


    //console.error(deltaTime);
    //console.error(GameStatus);
    //console.log(Projectiles.length);
    //console.log(ProjectileDirection);
    //console.error(getFrameRate());


    //FPS:

    fill(120)

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

    

    if(BackgroundColor == "Black") {
        fill(White);
    }
    else if(BackgroundColor == "White") {
        fill(Black);
    }

    textSize(15);

    text("UI", 60, 34);

    if(UIHide) {
        text("Show", 60, 54);
    }

    if(!UIHide) {
        text("Hide", 60, 54);
    }
    

    if(!UIHide) {

        drawSprites(Buttons);


        // Left Texts:

        textSize(15);

        if(BackgroundColor == "Black") {
            text("White", 60, 105);
        }
        else if(BackgroundColor == "White") {
            text("Black", 60, 105);
        }

        text("Preset 1", 60, 134);
        text("Preset 2", 60, 184);
        text("Preset 3", 60, 234);

        text("Click", 60, 155);
        text("Click", 60, 205);
        text("Click", 60, 255);

        textSize(10);

        text("Background Color", 60, 84);


        // Right Texts:

        CreateText("Origin X", OriginX_Per + "%");
        CreateText("Origin Y", OriginY_Per + "%");
        CreateText("Projectile Shape", ProjectileShape);
        CreateText("Projectile Width", ProjectileWidth);
        CreateText("Projectile Length", ProjectileLength);
        CreateText("Projectile Color", ProjectileColor);
        textSize(8);
        CreateText("Number of Projectiles", ProjectileNumber);
        CreateText("Rate of Fire", RateOfFire + " per Sec");
        CreateText("Projectile Speed", ProjectileSpeed);
        CreateText("Origin Direction", Math.floor(ProjectileDirection));
        textSize(9);
        CreateText("Origin Spin Speed", ProjectileSpinSpeed);
        CreateText("With Wall Mode", ProjectileCollisionWithWallMode);
        text("Projectile Collision", CanvasWidth - 60, 50 * NumOfTexts - 26);
        CreateText(Projectiles.length + " Projectiles", StartText);

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