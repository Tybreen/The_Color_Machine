// Notes:
/*
--Adjust button sizing to screen.
--Have projectile speed, adjust, depending on delta time. OR Using new World object in updated p5.
--Have the option to have a colored outline instead of the whole projectile in one color -- Have the projectile, be translucent to have a colored outline.
--Adjust/fix Instruction Text.
- colliders ???
--Re-organize code:
    -Move { down
    -Lower case vars AND functions
    -Fix groups (Maybe)
    -Fix "_Save" AND "_Sprite"
    
*/

// Main Vars:


var GameStatus = "Stopped";

var InstructionText = true;

var UIHide = false;

var mouseMode = "ARROW";

var UIGroup = 1;
var createdGroup1 = false;
var createdGroup2 = false;

var ButtonWidth = 80; // 80
var ButtonHeight = 30; // 30

var offsetOffWall = 60; // 60
var offsetBetweenButtons = 50; // 50



var ColorPicker;

var FPS;

var Red = 255;
var Green = 0;
var Blue = 0;

var offsetX_SS = 0;
var offsetY_SS = 0;

var TimeSinceFired = 0;

// Sprites:

var Origin;

// Groups:

var Projectiles;
//var Trails;
var standardButtons;
var settingsButtons;
var presetButtons;

// Button Sprites:

// var Background = {};
// Background.save = ...;

var UIHide_Sprite;
var BackgroundColor_Sprite;
var OpenPresets_Sprite;
var Start_Sprite;

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


var OriginX_Sprite;
var OriginY_Sprite;
var ProjectileShape_Sprite;
var ProjectileLength_Sprite;
var ProjectileWidth_Sprite;
var ProjectileColorType_Sprite;
var RainbowSpeed_Sprite;
var ProjectileNumber_Sprite;
var RateOfFire_Sprite;
var ProjectileSpeed_Sprite;
var ProjectileDirection_Sprite;
var ProjectileSpinSpeed_Sprite;
var ScreenSquare_Sprite;
var ProjectileCollisionWithWallMode_Sprite;


// Statuses:

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
var ProjectileNumber_Save_2;
var RateOfFire_Save_2;
var ProjectileSpeed_Save_2;
var ProjectileDirection_Save_2;
var ProjectileSpinSpeed_Save_2;
var ScreenSquare_Save_2;
var ProjectileCollisionWithWallMode_Save_2;


function preload() 
{
    // "Well hello there." -General Kenobi
}



function CreateColorPicker() 
{
    ColorPicker = createColorPicker(ProjectileColor);
    ColorPicker.position((offsetOffWall - 5) - (ButtonWidth / 2), offsetBetweenButtons * 8 /* <-- Order of Buttons*/ - (ButtonHeight / 2) -5 );
    ColorPicker.size(ButtonWidth * (1 + 1/8), ButtonHeight * (1 + 1/3));
    ColorPicker.input(() => { ProjectileColor = ColorPicker.value() });
}

function DeleteProjectiles()
{
    while(Projectiles.length >= 1) Projectiles.get(0).remove();
}

function SetGameStatus(status)
{
    if(status == "Running")
    {
        Red = 255;
        Green = 0;
        Blue = 0;
        
        GameStatus = "Running";
        StartText = "Stop";
        InstructionText = false;
    }
    
    else if(status == "Idle")
    {
        GameStatus = "Idle";
        StartText = "Reset";
    }

    else if(status == "Stopped")
    {
        GameStatus = "Stopped";
        StartText = "Start";
    }
}

function CreateButton(side, order, group, Hide=false) 
{

    var Side;

    if(side == 1) Side = offsetOffWall;
    else if(side == 2) Side = width - offsetOffWall;

    if(!Hide) {

        var CurrentButton;

        CurrentButton = new Sprite(Side, offsetBetweenButtons * order, ButtonWidth, ButtonHeight, "static");    

        CurrentButton.draw = function() 
        {
            fill(120);
            noStroke();
            rect(0, 0, ButtonWidth, ButtonHeight, 2);
        }

        if(group == 1) settingsButtons.push(CurrentButton);
        else if(group == 2) presetButtons.push(CurrentButton);
        else if(group == 0) standardButtons.push(CurrentButton);

    }

    return CurrentButton;

}

function createMyButtonGroup(group)
{
    if(group == 1)
    {
        ProjectileShape_Sprite = CreateButton(1, 4, 1);
        ProjectileLength_Sprite = CreateButton(1, 5, 1);
        ProjectileWidth_Sprite = CreateButton(1, 6, 1);
        ProjectileColorType_Sprite = CreateButton(1, 7, 1);
        RainbowSpeed_Sprite = CreateButton(1, 9, 1);
        
        OriginX_Sprite = CreateButton(2, 1, 1);
        OriginY_Sprite = CreateButton(2, 2, 1);
        RateOfFire_Sprite = CreateButton(2, 3, 1);
        ProjectileNumber_Sprite = CreateButton(2, 4, 1);
        ProjectileSpeed_Sprite = CreateButton(2, 5, 1);
        ProjectileDirection_Sprite = CreateButton(2, 6, 1);
        ProjectileSpinSpeed_Sprite = CreateButton(2, 7, 1);
        ScreenSquare_Sprite = CreateButton(2, 8, 1);
        ProjectileCollisionWithWallMode_Sprite = CreateButton(2, 9, 1);

        createdGroup1 = true;
    }

    if(group == 2)
    {
        Preset1_Sprite = CreateButton(1, 4, 2);
        Preset2_Sprite = CreateButton(1, 5, 2);
        Preset3_Sprite = CreateButton(1, 6, 2);
        Preset4_Sprite = CreateButton(1, 7, 2);
        Preset5_Sprite = CreateButton(1, 8, 2);
        Preset6_Sprite = CreateButton(1, 9, 2);
        Preset7_Sprite = CreateButton(1, 10, 2);
        Preset8_Sprite = CreateButton(2, 1, 2);
        Preset9_Sprite = CreateButton(2, 2, 2);
        Preset10_Sprite = CreateButton(2, 3, 2);
        Preset11_Sprite = CreateButton(2, 4, 2);
        Preset12_Sprite = CreateButton(2, 5, 2);
        

        Save1_Sprite = CreateButton(2, 6, 2);
        Load1_Sprite = CreateButton(2, 7, 2);
        Save2_Sprite = CreateButton(2, 8, 2);
        Load2_Sprite = CreateButton(2, 9, 2);


        

        
        createdGroup2 = true;
    }
}

function deleteGroup(group)
{
    if(group == 1)
    {
        // ProjectileShape_Sprite.remove();
        // // ProjectileShape_Sprite = null;
        // ProjectileLength_Sprite.remove();
        // // ProjectileLength_Sprite = null;
        // ProjectileWidth_Sprite.remove();
        // // ProjectileWidth_Sprite = null;
        // ProjectileColorType_Sprite.remove();
        // // ProjectileColorType_Sprite = null;
        // RainbowSpeed_Sprite.remove();
        // // RainbowSpeed_Sprite = null;
        
        // OriginX_Sprite.remove();
        // // OriginX_Sprite = null;
        // OriginY_Sprite.remove();
        // // OriginY_Sprite = null;
        // RateOfFire_Sprite.remove();
        // // RateOfFire_Sprite = null;
        // ProjectileNumber_Sprite.remove();
        // // ProjectileNumber_Sprite = null;
        // ProjectileSpeed_Sprite.remove();
        // // ProjectileSpeed_Sprite = null;
        // ProjectileDirection_Sprite.remove();
        // // ProjectileDirection_Sprite = null;
        // ProjectileSpinSpeed_Sprite.remove();
        // // ProjectileSpinSpeed_Sprite = null;
        // ScreenSquare_Sprite.remove();
        // // ScreenSquare_Sprite = null;
        // ProjectileCollisionWithWallMode_Sprite.remove();
        // // ProjectileCollisionWithWallMode_Sprite = null;

        presetButtons.removeAll();
        
        createdGroup1 = false;
    }

    if(group == 2)
    {
        // Preset1_Sprite.remove();
        // // Preset1_Sprite = null;
        // Preset2_Sprite.remove();
        // // Preset2_Sprite = null;
        // Preset3_Sprite.remove();
        // // Preset3_Sprite = null;
        // Preset4_Sprite.remove();
        // // Preset4_Sprite = null;
        // Preset5_Sprite.remove();
        // // Preset5_Sprite = null;
        // Preset6_Sprite.remove();
        // // Preset6_Sprite = null;
        // Preset7_Sprite.remove();
        // // Preset7_Sprite = null;
        // Preset8_Sprite.remove();
        // // Preset8_Sprite = null;
        // Preset9_Sprite.remove();
        // // Preset9_Sprite = null;
        // Preset10_Sprite.remove();
        // // Preset10_Sprite = null;
        // Preset11_Sprite.remove();
        // // Preset11_Sprite = null;
        // Preset12_Sprite.remove();
        // // Preset12_Sprite = null;

        // Save1_Sprite.remove();
        // // Save1_Sprite = null;
        // Load1_Sprite.remove();
        // // Load1_Sprite = null;
        // Save2_Sprite.remove();
        // // Save2_Sprite = null;
        // Load2_Sprite.remove();
        // // Load2_Sprite = null;

        presetButtons.removeAll();
        

        createdGroup2 = false;
    }
}

function CreateText(Name, Status, side, order) {

    var Side;

    if(side == 1) Side = offsetOffWall;
    else if(side == 2) Side = width - offsetOffWall;

    text(Name, Side, offsetBetweenButtons * order - 16);

    textSize(15);

    text(Status, Side, offsetBetweenButtons * order + 5);

}


function CreateProjectiles() {

    var CurrentProjectile;
  
    TimeSinceFired += deltaTime / 1000;
    
    if(GameStatus == "Running" && TimeSinceFired >= 1 / RateOfFire && (ProjectileNumber > Projectiles.length || ProjectileNumber == Infinity)) {
      
        TimeSinceFired = 0;
        
        CurrentProjectile = new Sprite(Origin.position.x, Origin.position.y, ProjectileWidth, ProjectileLength, "none");

        CurrentProjectile.Shape = ProjectileShape;

        if(ProjectileColorType == "Random" || ProjectileColorType == "random") CurrentProjectile.Color = color(random(255), random(255), random(255));

        else if(ProjectileColorType == "Rainbow" || ProjectileColorType == "rainbow") CurrentProjectile.Color = color(Red, Green, Blue);

        else CurrentProjectile.Color = ProjectileColor;

        CurrentProjectile.direction = ProjectileDirection - 90;

        CurrentProjectile.speed = ProjectileSpeed;
        
        CurrentProjectile.rotation = ProjectileDirection;

        CurrentProjectile.draw = function() {

            fill(this.Color);
            noStroke();

            if(this.Shape == "Square") {
                rect(0, 0, this.width, this.height);
            }

            else if(this.Shape == "Circle") {
                ellipse(0, 0, this.width, this.height);
            }

        }
        console.log(ProjectileWidth);
        console.log(ProjectileLength);
        Projectiles.push(CurrentProjectile);

    }
    
}
/*
function CreateTrails() {

    var CurrentTrail;

    for(var i = 0; i < Projectiles.length; i++) {

        CurrentTrail = createSprite(i.x, i.y, i.length, i.width);

        CurrentTrail.Shape = i.Shape;

        CurrentTrail.Color = i.Color
      
        CurrentTrail.rotation = i.rotation

        CurrentTrail.draw = function() {

        fill(this.Color);

        if(this.Shape == "Square") {
            rect(0, 0, this.width, this.height);
        }

        else if(this.Shape == "Circle") {
            ellipse(0, 0, this.width, this.height);
        }

        }
        Trails.push(CurrentTrail);
    }
  

    for(var i = 0; i < Trails.length; i++) {

        if(BackgroundColor == "Black") {
            console.log("bug1");
            i.color = color(red(i.color) - ProjectileTrails, green(i.color) - ProjectileTrails, blue(i.color) - ProjectileTrails);
            console.log("bug2");
            if(red(i.color) <= 0) {
                console.log("bug3");
                Trails[i].remove();
                console.log("bug4");
            }
        }

        else if(BackgroundColor == "White") {

            i.color = Trail.color(red(i.color + ProjectileTrails), green(i.color + ProjectileTrails), blue(i.color + ProjectileTrails));
            if(i.color = "White") Trails[i].remove();
        }
        
    }

}*/


function deltaTimeProjectileSpeedChange()
{
    for(i in Projectiles)
    {
        i.setSpeed(i.getSpeed() * (deltaTime * 60));
        if(Projectiles[0]); //console.log(Projectiles[0].getSpeed());
    }
}


function setup() {

    setInterval(function() { FPS = Math.floor(getFrameRate()) }, 500);
    
    createCanvas(windowWidth, windowHeight);

    textAlign(CENTER);
    rectMode(CORNERS);

    if(window.matchMedia('(prefers-color-scheme: dark)').matches) BackgroundColor = "Black";
    else BackgroundColor = "White";

    textSize(10);

    OriginX_Pix = width / 2;
    OriginY_Pix = height / 2; 

    //console.log(width);//////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    Projectiles = new Group();
    //Trails = new Group();
    standardButtons = new Group();
    settingsButtons = new Group();
    presetButtons = new Group();

    this.Text = createDiv("The Color Machine!<br/><br/>This is a Game about Creativity. There is NO Goal to the Game. You can adjust the Settings on the Right and Left to make any Pattern you'd like! There are already premade Presets on the Left If you Click them and hit Start they will show you a Few Examples.<br/><br/>When you're Ready to Run your Project just hit START.");
    this.Text.style('font-size', "20px");
    this.Text.style("text-align", "center");
    this.Text.style("margin", "125px");
    if(BackgroundColor == "Black") this.Text.style("color", "White");
    else this.Text.style("color", "Black");
    this.Text.position(0, -50);


    // Origin:

    Origin = new Sprite(OriginX_Pix, OriginY_Pix, 10, 10, "none");

    Origin.draw = function() {

        fill(120);
        noStroke();

        if(ProjectileShape == "Square") {
            noStroke();
            rect(0, 0, this.width, this.height);
        }

        else if(ProjectileShape == "Circle") {
            noStroke();
            ellipse(0, 0, this.width, this.height);
        }
    }
    

    // UI Hide Button:
    UIHide_Sprite = new Sprite(offsetOffWall, offsetBetweenButtons, ButtonWidth, ButtonHeight, "static");
    //UIHide_Sprite.mouseOver = function() { cursor(HAND) };
    //UIHide_Sprite.mouseOut = function() { cursor(ARROW) };

    UIHide_Sprite.draw = function() {
        fill(120);
        noStroke();
        rect(0, 0, ButtonWidth, ButtonHeight, 2);
    }

    BackgroundColor_Sprite = CreateButton(1, 2, 0);

    // OpenPreset Button:
    
    OpenPresets_Sprite = CreateButton(1, 3, 0);

    // Start Button:

    Start_Sprite = CreateButton(2, 10, 0);


    createMyButtonGroup(1);

}

function standardButtonsControls()
{
    if(BackgroundColor_Sprite.mouse.released())
    {
        if(BackgroundColor == "Black") {
            BackgroundColor = "White";
        }
    
        else if(BackgroundColor == "White") {
            BackgroundColor = "Black";
        }
    }
    

    if(OpenPresets_Sprite.mouse.released())
    {
        if(UIGroup == 1) UIGroup = 2;
        else if(UIGroup == 2) UIGroup = 1;
        
    }
    
    if(Start_Sprite.mouse.released())
    {
        if(GameStatus == "Stopped") {
            SetGameStatus("Running");
        }

        else if(GameStatus == "Running") {
            SetGameStatus("Idle");
        }

        else if(GameStatus == "Idle") {
            
            SetGameStatus("Stopped");
            DeleteProjectiles();
        }

    }

    if(UIHide_Sprite.mouse.released())
    {
        if(UIHide) UIHide = false;
        else if(!UIHide) UIHide = true;
    }
}

function settingsButtonsControls()
{

    if(OriginX_Sprite.mouse.released())
    {
            
        OriginX_Per = PromptsForButtons("Origin X = Vertical Axis", OriginX_Per);
        if(OriginX_Per > 100) OriginX_Per = 100;
        else if(OriginX_Per < 0) OriginX_Per = 0;

        ChangeOriginXPosition();
    }

    if(OriginY_Sprite.mouse.released())
    {
        
        OriginY_Per = PromptsForButtons("Origin Y = Vertical Axis", OriginY_Per);
        if(OriginY_Per > 100) OriginY_Per = 100;
        else if(OriginY_Per < 0) OriginY_Per = 0;

        ChangeOriginYPosition();
    }

    if(ProjectileShape_Sprite.mouse.released())
    {

        if(ProjectileShape == "Square") {
            ProjectileShape = "Circle";
        }

        else if(ProjectileShape == "Circle") {
            ProjectileShape = "Square"
        }
        
    }

    if(ScreenSquare_Sprite.mouse.released())
    {
        if(ScreenSquare == "False") ScreenSquare = "True";
        else if (ScreenSquare == "True") ScreenSquare = "False";
    }

    if(ProjectileCollisionWithWallMode_Sprite.mouse.released())
    {

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

    if(ProjectileLength_Sprite.mouse.released()) { 
        ProjectileLength = PromptsForButtons("Projectile Length", ProjectileLength);
        console.log("console.error();") 
    }
    if(ProjectileWidth_Sprite.mouse.released()) { 
        ProjectileWidth = PromptsForButtons("Projectile Width", ProjectileWidth);
    console.log("console.error();") 
    }
    


    if(ProjectileColorType_Sprite.mouse.released())
    {
        if(ProjectileColorType == "Color") ProjectileColorType = "Random";
        else if(ProjectileColorType == "Random") ProjectileColorType = "Rainbow";
        else if(ProjectileColorType == "Rainbow") ProjectileColorType = "Color";
    }

    if(RainbowSpeed_Sprite.mouse.released())
    {
        RainbowSpeed = PromptsForButtons("Rainbow Speed   Max 255", RainbowSpeed);
        if(RainbowSpeed > 255) RainbowSpeed = 255;
        else if(RainbowSpeed < -255) RainbowSpeed = -255;
    }

    if(ProjectileNumber_Sprite.mouse.released())
    {
        ProjectileNumber = PromptsForButtons("Number of Projectiles allowed on Screen OR 0 for Infinity", ProjectileNumber);
        if(ProjectileNumber == 0) ProjectileNumber = Infinity;
        else if(String(ProjectileNumber).toLowerCase() == "infinity") ProjectileNumber = Infinity;
    }

    if(RateOfFire_Sprite.mouse.released())
    {
        RateOfFire = PromptsForButtons("Rate of Fire   Max 100", RateOfFire);
        if(RateOfFire > 100) RateOfFire = 100;
    }

    if(ProjectileSpeed_Sprite.mouse.released()) { ProjectileSpeed = PromptsForButtons("Projectile Speed", ProjectileSpeed) };

    if(ProjectileDirection_Sprite.mouse.released()) { ProjectileDirection = Number(PromptsForButtons("Origin Direction   0 to 360", ProjectileDirection)) };

    if(ProjectileSpinSpeed_Sprite.mouse.released()) { ProjectileSpinSpeed = PromptsForButtons("Origin Spin Speed   + OR -", ProjectileSpinSpeed) };
    
}

function presetButtonsControls()
{
    if(Preset1_Sprite.mouse.released())
    {
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Square";
        ProjectileLength = 30;
        ProjectileWidth = 10;
        ProjectileColorType = "Color";
        ProjectileColor = "Cyan";
        ProjectileNumber = Infinity;
        RateOfFire = 3;
        ProjectileSpeed = 3;
        ProjectileDirection = 30;
        ProjectileSpinSpeed = 0;
        ScreenSquare = "False";
        ProjectileCollisionWithWallMode = "None";

        ChangeOriginPosition();
        DeleteProjectiles();
        SetGameStatus("Running");
    }

    if(Preset2_Sprite.mouse.released())
    {
        OriginX_Per = 75;
        OriginY_Per = 80;
        ProjectileShape = "Circle";
        ProjectileLength = 20;
        ProjectileWidth = 50;
        ProjectileColorType = "Random";
        ProjectileNumber = 50;
        RateOfFire = 10;
        ProjectileSpeed = 8;
        ProjectileDirection = 200;
        ProjectileSpinSpeed = 0;
        ScreenSquare = "False";
        ProjectileCollisionWithWallMode = "Bounce";

        ChangeOriginPosition();
        DeleteProjectiles();
        SetGameStatus("Running");
    }

    if(Preset3_Sprite.mouse.released())
    {
        BackgroundColor = "Black";
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Square";
        ProjectileLength = 50;
        ProjectileWidth = 10;
        ProjectileColorType = "Rainbow";
        RainbowSpeed = 10;
        ProjectileNumber = 175;
        RateOfFire = 100;
        ProjectileSpeed = 55;
        ProjectileDirection = 246;
        ProjectileSpinSpeed = 0;
        ScreenSquare = "False";
        ProjectileCollisionWithWallMode = "Loop";

        ChangeOriginPosition();
        DeleteProjectiles();
        SetGameStatus("Running");
    }

    if(Preset4_Sprite.mouse.released())
    {
        BackgroundColor = "White";
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Circle";
        ProjectileLength = 45;
        ProjectileWidth = 15;
        ProjectileColorType = "Color";
        ProjectileColor = "Black";
        ProjectileNumber = 25;
        RateOfFire = 10;
        ProjectileSpeed = 3;
        ProjectileDirection = 0;
        ProjectileSpinSpeed = 50;
        ScreenSquare = "True";
        ProjectileCollisionWithWallMode = "Bounce";

        ChangeOriginPosition();
        DeleteProjectiles();
        SetGameStatus("Running");
    }

    if(Preset5_Sprite.mouse.released())
    {
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Circle";
        ProjectileLength = .2;
        ProjectileWidth = 300;
        ProjectileColorType = "Rainbow";
        RainbowSpeed = 30;
        ProjectileNumber = 100;
        RateOfFire = 100;
        ProjectileSpeed = 150;
        ProjectileDirection = 2;
        ProjectileSpinSpeed = 0;
        ScreenSquare = "False";
        ProjectileCollisionWithWallMode = "Bounce";

        ChangeOriginPosition();
        DeleteProjectiles();
        SetGameStatus("Running");
    }

    if(Preset6_Sprite.mouse.released())
    {
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Square";
        ProjectileLength = 100;
        ProjectileWidth = 25;
        ProjectileColorType = "Rainbow";
        RainbowSpeed = 15;
        ProjectileNumber = Infinity;
        RateOfFire = 100;
        ProjectileSpeed = 2;
        ProjectileDirection = 0;
        ProjectileSpinSpeed = 605;
        ScreenSquare = "False";
        ProjectileCollisionWithWallMode = "None";

        ChangeOriginPosition();
        DeleteProjectiles();
        SetGameStatus("Running");
    }

    if(Preset7_Sprite.mouse.released())
    {
        OriginX_Per = 0;
        OriginY_Per = 0;
        ProjectileShape = "Square";
        ProjectileLength = 15;
        ProjectileWidth = 30;
        ProjectileColorType = "Color";
        ProjectileColor = "#11800e";
        ProjectileNumber = 100;
        RateOfFire = 100;
        ProjectileSpeed = .5;
        ProjectileDirection = 0;
        ProjectileSpinSpeed = 100;
        ScreenSquare = "True";
        ProjectileCollisionWithWallMode = "Loop";

        ChangeOriginPosition();
        DeleteProjectiles();
        SetGameStatus("Running");
    }

    if(Preset8_Sprite.mouse.released())
    {
        OriginX_Per = 50;
        OriginY_Per = 100;
        ProjectileShape = "Circle";
        ProjectileLength = 50;
        ProjectileWidth = 25;
        ProjectileColorType = "Rainbow";
        RainbowSpeed = 10;
        ProjectileNumber = 400;
        RateOfFire = 100;
        ProjectileSpeed = 1;
        ProjectileDirection = 0;
        ProjectileSpinSpeed = 605;
        ScreenSquare = "False";
        ProjectileCollisionWithWallMode = "Bounce";

        ChangeOriginPosition();
        DeleteProjectiles();
        SetGameStatus("Running");
    }

    if(Preset9_Sprite.mouse.released())
    {
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Square";
        ProjectileLength = 10;
        ProjectileWidth = 300;
        ProjectileColorType = "Random";
        ProjectileNumber = 150;
        RateOfFire = 100;
        ProjectileSpeed = 1;
        ProjectileDirection = 0;
        ProjectileSpinSpeed = 450;
        ScreenSquare = "True";
        ProjectileCollisionWithWallMode = "Bounce";

        ChangeOriginPosition();
        DeleteProjectiles();
        SetGameStatus("Running");
    }

    if(Preset10_Sprite.mouse.released())
    {
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Square";
        ProjectileLength = 50;
        ProjectileWidth = 10;
        ProjectileColorType = "Rainbow";
        RainbowSpeed = 10;
        ProjectileNumber = 250;
        RateOfFire = 100;
        ProjectileSpeed = 100;
        ProjectileDirection = 270;
        ProjectileSpinSpeed = .1;
        ScreenSquare = "False";
        ProjectileCollisionWithWallMode = "Bounce";

        ChangeOriginPosition();
        DeleteProjectiles();
        SetGameStatus("Running");
    }

    if(Preset11_Sprite.mouse.released())
    {
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Circle";
        ProjectileLength = 100;
        ProjectileWidth = 20;
        ProjectileColorType = "Rainbow";
        RainbowSpeed = 10;
        ProjectileNumber = 200;
        RateOfFire = 100;
        ProjectileSpeed = 20;
        ProjectileDirection = 60;
        ProjectileSpinSpeed = 900;
        ScreenSquare = "False";
        ProjectileCollisionWithWallMode = "Loop";

        ChangeOriginPosition();
        DeleteProjectiles();
        SetGameStatus("Running");
    }

    if(Preset12_Sprite.mouse.released())
    {
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Square";
        ProjectileLength = 100;
        ProjectileWidth = 10;
        ProjectileColorType = "Random";
        ProjectileNumber = Infinity;
        RateOfFire = 100;
        ProjectileSpeed = 2;
        ProjectileDirection = 0;
        ProjectileSpinSpeed = 10800020;
        ScreenSquare = "False";
        ProjectileCollisionWithWallMode = "None";

        ChangeOriginPosition();
        DeleteProjectiles();
        SetGameStatus("Running");
    }

    if(Save1_Sprite.mouse.released())
    {
        BackgroundColor_Save_1 = BackgroundColor;
        OriginX_Per_Save_1 = OriginX_Per;
        OriginY_Per_Save_1 = OriginY_Per;
        ProjectileShape_Save_1 = ProjectileShape;
        ProjectileLength_Save_1 = ProjectileLength;
        ProjectileWidth_Save_1 = ProjectileWidth;
        ProjectileColorType_Save_1 = ProjectileColorType;
        ProjectileColor_Save_1 = ProjectileColor;
        RainbowSpeed_Save_1 = RainbowSpeed;
        ProjectileNumber_Save_1 = ProjectileNumber;
        RateOfFire_Save_1 = RateOfFire;
        ProjectileSpeed_Save_1 = ProjectileSpeed;
        ProjectileDirection_Save_1 = ProjectileDirection;
        ProjectileSpinSpeed_Save_1 = ProjectileSpinSpeed;
        ScreenSquare_Save_1 = ScreenSquare;
        ProjectileCollisionWithWallMode_Save_1 = ProjectileCollisionWithWallMode;

    }

    if(Load1_Sprite.mouse.released())
    {
        if(BackgroundColor_Save_1 != null)
        {
            BackgroundColor = BackgroundColor_Save_1;
            OriginX_Per = OriginX_Per_Save_1;
            OriginY_Per = OriginY_Per_Save_1;
            ProjectileShape = ProjectileShape_Save_1;
            ProjectileLength = ProjectileLength_Save_1;
            ProjectileWidth = ProjectileWidth_Save_1;
            ProjectileColorType = ProjectileColorType_Save_1;
            ProjectileColor = ProjectileColor_Save_1;
            RainbowSpeed = RainbowSpeed_Save_1;
            ProjectileNumber = ProjectileNumber_Save_1;
            RateOfFire = RateOfFire_Save_1;
            ProjectileSpeed = ProjectileSpeed_Save_1;
            ProjectileDirection = ProjectileDirection_Save_1;
            ProjectileSpinSpeed = ProjectileSpinSpeed_Save_1;
            ScreenSquare = ScreenSquare_Save_1;
            ProjectileCollisionWithWallMode = ProjectileCollisionWithWallMode_Save_1;

            ChangeOriginPosition();
            DeleteProjectiles();
            SetGameStatus("Running");
        }
    }

    if(Save2_Sprite.mouse.released())
    {
        BackgroundColor_Save_2 = BackgroundColor;
        OriginX_Per_Save_2 = OriginX_Per;
        OriginY_Per_Save_2 = OriginY_Per;
        ProjectileShape_Save_2 = ProjectileShape;
        ProjectileLength_Save_2 = ProjectileLength;
        ProjectileWidth_Save_2 = ProjectileWidth;
        ProjectileColorType_Save_2 = ProjectileColorType;
        ProjectileColor_Save_2 = ProjectileColor;
        RainbowSpeed_Save_2 = RainbowSpeed;
        ProjectileNumber_Save_2 = ProjectileNumber;
        RateOfFire_Save_2 = RateOfFire;
        ProjectileSpeed_Save_2 = ProjectileSpeed;
        ProjectileDirection_Save_2 = ProjectileDirection;
        ProjectileSpinSpeed_Save_2 = ProjectileSpinSpeed;
        ScreenSquare_Save_2 = ScreenSquare;
        ProjectileCollisionWithWallMode_Save_2 = ProjectileCollisionWithWallMode;

    }

    if(Load2_Sprite.mouse.released())
    {
        if(BackgroundColor_Save_2 != null)
        {
            BackgroundColor = BackgroundColor_Save_2;
            OriginX_Per = OriginX_Per_Save_2;
            OriginY_Per = OriginY_Per_Save_2;
            ProjectileShape = ProjectileShape_Save_2;
            ProjectileLength = ProjectileLength_Save_2;
            ProjectileWidth = ProjectileWidth_Save_2;
            ProjectileColorType = ProjectileColorType_Save_2;
            ProjectileColor = ProjectileColor_Save_2;
            RainbowSpeed = RainbowSpeed_Save_2;
            ProjectileNumber = ProjectileNumber_Save_2;
            RateOfFire = RateOfFire_Save_2;
            ProjectileSpeed = ProjectileSpeed_Save_2;
            ProjectileDirection = ProjectileDirection_Save_2;
            ProjectileSpinSpeed = ProjectileSpinSpeed_Save_2;
            ScreenSquare = ScreenSquare_Save_2;
            ProjectileCollisionWithWallMode = ProjectileCollisionWithWallMode_Save_2;

            ChangeOriginPosition();
            DeleteProjectiles();
            SetGameStatus("Running");
        }
    }
}


function ChangeOriginPosition() {
    ChangeOriginXPosition();
    ChangeOriginYPosition();
}

function ChangeOriginXPosition() {
    OriginX_Pix = (OriginX_Per / 100) * width;
    Origin.position.x = OriginX_Pix;
}

function ChangeOriginYPosition() {
    OriginY_Pix = (OriginY_Per / 100) * height;
    Origin.position.y = OriginY_Pix;
}



function PromptsForButtons(Text, Var2) {

    var Var = prompt(Text);

    if(Var == null || Var == "") Var = Var2;

    return Var;
}



function OriginSpinSpeedProcessing() {

    ProjectileDirection += Number(ProjectileSpinSpeed) / 10;

    if(Number(ProjectileSpinSpeed) > 0 && ProjectileDirection >= 360) ProjectileDirection -= 360;
    else if(Number(ProjectileSpinSpeed) < 0 && ProjectileDirection <= 0) ProjectileDirection += 360;

}

function ChangeMouseStatus(sprite, CheckUIHide)
{
    //console.log(sprite.mouse.hovers())
    if(sprite.mouse.hovers()) mouseMode = "HAND";
    else if(sprite.mouse.hovered()) mouseMode = "ARROW";
    
    if(mouseMode == "HAND")
    {
        if(CheckUIHide && !UIHide) cursor(HAND);
        else cursor(HAND);
    }

    else if(mouseMode == "ARROW") cursor(ARROW);
}

function ChangeMouseStatusForButtons(group)
{
    for(s in group)
    {
        //console.log(settingsButtons);
        ChangeMouseStatus(s, true);
    }
}

function ScreenSquareManager()
{
    if(ScreenSquare == "True")
    {

        if(offsetX_SS == 0 && offsetY_SS == 0)
        {
            if(width < height) offsetY_SS = (height - width) / 2;
            else offsetX_SS = (width - height) / 2;
        }

        noStroke();
        fill(255, 0, 0, 30);

        if(offsetX_SS != 0) 
        {
            rect(0, 0, offsetX_SS, height);
            rect(width - offsetX_SS, 0, width, height);
        }

        else
        {
            rect(0, 0, width, offsetY_SS);
            rect(0, height - offsetY_SS, width, height);
        }

    }

    if(ScreenSquare == "False" && (offsetX_SS != 0 || offsetY_SS != 0))
    {
        offsetX_SS = 0;
        offsetY_SS = 0;
    }

}


function Bounce() 
{

    ScreenSquareManager();

    for(var i = 0; i < Projectiles.length; i++) 
    {

        var s = Projectiles[i];

        if(s.position.x < offsetX_SS) {
          s.position.x = offsetX_SS;
          s.velocity.x = abs(s.velocity.x);
        }
    
        if(s.position.x > width - offsetX_SS) {
          s.position.x = width - offsetX_SS;
          s.velocity.x = -abs(s.velocity.x);
        }
    
        if(s.position.y < offsetY_SS) {
          s.position.y = offsetY_SS;
          s.velocity.y = abs(s.velocity.y);
        }
    
        if(s.position.y > height - offsetY_SS) {
          s.position.y = height - offsetY_SS;
          s.velocity.y = -abs(s.velocity.y);
        }

        Projectiles[i].rotation = s.getDirection();
    }

}


function Loop() {

    ScreenSquareManager();

    for(var i = 0; i < Projectiles.length; i++) 
    {

        var s = Projectiles[i];

        if(s.position.x < offsetX_SS) {
            Projectiles[i].position.x = width - offsetX_SS;
        }
    
        if(s.position.x > width - offsetX_SS) {
            Projectiles[i].position.x = offsetX_SS;
        }
    
        if(s.position.y < offsetY_SS) {
            Projectiles[i].position.y = height - offsetY_SS;
        }
    
        if(s.position.y > height - offsetY_SS) {
            Projectiles[i].position.y = offsetY_SS;
        }


    }
}


function Cleaner() {

    ScreenSquareManager();
    
    for(var i = 0; i < Projectiles.length;i++) {
        
        var Item = Projectiles.get(i);
      
        if(Item.position.x <= offsetX_SS - (ProjectileLength / 2) || Item.position.x >= (width - offsetX_SS) + (ProjectileLength / 2) || Item.position.y <= offsetY_SS - (ProjectileLength / 2) || Item.position.y >= (height - offsetY_SS) + (ProjectileLength / 2)) {
        
            Item.remove();
            i--;
        }
    }
}


function draw() {

    //world.step(1/240);

    if(BackgroundColor == "Black") background(0);
    else if(BackgroundColor == "White") background(255);


    if(ProjectileCollisionWithWallMode == "None") Cleaner();
    else if(ProjectileCollisionWithWallMode == "Bounce") Bounce();
    else if(ProjectileCollisionWithWallMode == "Loop") Loop();

    if(ProjectileSpinSpeed != 0 && GameStatus == "Running") OriginSpinSpeedProcessing();

    if(GameStatus == "Idle" && Projectiles.length == 0) SetGameStatus("Stopped");


    standardButtonsControls();
    if(createdGroup1) settingsButtonsControls();
    if(createdGroup2) presetButtonsControls();

    //deltaTimeProjectileSpeedChange();

    Origin.draw();

    /*if(ProjectileTrails > 0) 
    {
        console.log(Origin.OriginX_Pix);
        beginLayer();
        if(BackgroundColor == "Black") background(0, ProjectileTrails);
        else if(BackgroundColor == "White") background(255, ProjectileTrails);

    }*/

    
    Projectiles.draw();

    //endLayer();
    //drawSprites(Trails);

    UIHide_Sprite.draw();

    CreateProjectiles();

    ChangeMouseStatus(UIHide_Sprite, false);
    ChangeMouseStatus(BackgroundColor_Sprite, true);
    ChangeMouseStatus(OpenPresets_Sprite, true);
    ChangeMouseStatus(Start_Sprite, true);

    //ChangeMouseStatusForButtons(settingsButtons);
    //ChangeMouseStatusForButtons(presetButtons);
    
    //if(ProjectileTrails != 0) CreateTrails();

    if(RainbowSpeed != 0 && ProjectileColorType == "Rainbow" && GameStatus == "Running") {
        if(Blue <= 0 && Red >= 255) Green += Number(RainbowSpeed);
        if(Blue <= 0 && Green >= 255) Red -= Number(RainbowSpeed);
        if(Red <= 0 && Green >= 255) Blue += Number(RainbowSpeed);
        if(Red <= 0 && Blue >= 255) Green -= Number(RainbowSpeed);
        if(Green <= 0 && Blue >= 255) Red += Number(RainbowSpeed);
        if(Green <= 0 && Red >= 255) Blue -= Number(RainbowSpeed);
    }

    //FPS:

    fill(120);

    text("FPS " + FPS, width - 20, 10);


    if(!InstructionText) this.Text.remove();

    if(BackgroundColor == "Black") fill("White");
    else if(BackgroundColor == "White") fill("Black");

    textSize(15);

    if(UIHide) CreateText("UI", "Show", 1, 1);

    else if(!UIHide) CreateText("UI", "Hide", 1, 1);


    if((!UIHide && UIGroup == 1) && ColorPicker == null) CreateColorPicker();
    
    else if((UIHide || UIGroup == 2) && ColorPicker != null) 
    {
        ColorPicker.remove();
        ColorPicker = null;
    }

    


    if(!UIHide) {

        standardButtons.draw();

        // Group 1:

        if(UIGroup == 1) 
        {

            if(!createdGroup1)
            {
                deleteGroup(2);
                createMyButtonGroup(1);
                //console.log(createdGroup1);
            }
            
            settingsButtons.draw();
            
        
            // Left Texts:

            textSize(11);
            CreateText("Projectile Shape", ProjectileShape, 1, 4);
            textSize(11);
            CreateText("Projectile Length", ProjectileLength, 1, 5);
            textSize(11);
            CreateText("Projectile Width", ProjectileWidth, 1, 6);
            textSize(8);
            CreateText("Projectile Color Type", ProjectileColorType, 1, 7);
            textSize(11);
            CreateText("Projectile Color", "", 1, 8);
            textSize(11);
            CreateText("Rainbow Speed", RainbowSpeed, 1, 9);

        
            //console.log( (offsetBetweenButtons - ButtonWidth) / 2 * (11/10) );
            // Right Texts:

            textSize( (offsetBetweenButtons - ButtonWidth) / 2 * (11/10) ); // 11
            CreateText("Origin X", OriginX_Per + "%", 2, 1);
            textSize(11);
            CreateText("Origin Y", OriginY_Per + "%", 2, 2);
            textSize(11);
            CreateText("Rate of Fire", RateOfFire + " per Sec", 2, 3);
            textSize(8);
            CreateText("Number of Projectiles", ProjectileNumber, 2, 4);
            textSize(10);
            CreateText("Projectile Speed", ProjectileSpeed, 2, 5);
            textSize(10);
            CreateText("Origin Direction", Math.floor(ProjectileDirection), 2, 6);
            textSize(9);
            CreateText("Origin Spin Speed", ProjectileSpinSpeed, 2, 7);
            textSize(11);
            CreateText("Square Screen", ScreenSquare, 2, 8);
            textSize(9);
            CreateText("With Wall Mode", ProjectileCollisionWithWallMode, 2, 9);
            textSize(9);
            text("Projectile Collision", width - offsetOffWall, offsetBetweenButtons * 9/* <-- Order of Buttons*/ - 26);
            
        }
        
        // Group 2:

        else if(UIGroup == 2)
        {
            if(createdGroup1) 
            {
                deleteGroup(1);
                createMyButtonGroup(2);
            }

            presetButtons.draw();

            CreateText("Preset 1", "Click", 1, 4);
            CreateText("Preset 2", "Click", 1, 5);
            CreateText("Preset 3", "Click", 1, 6);
            CreateText("Preset 4", "Click", 1, 7);
            CreateText("Preset 5", "Click", 1, 8);
            CreateText("Preset 6", "Click", 1, 9);
            CreateText("Preset 7", "Click", 1, 10);

            CreateText("Preset 8", "Click", 2, 1);
            CreateText("Preset 9", "Click", 2, 2);
            CreateText("Preset 10", "Click", 2, 3);
            CreateText("Preset 11", "Click", 2, 4);
            CreateText("Preset ???", "Click", 2, 5);


            if(BackgroundColor_Save_1 == null)
            {
                CreateText("Save 1", "Save", 2, 6);
                CreateText("Load 1", "Can't Load", 2, 7);
            }
            else
            {
                CreateText("Save 1", "Saved", 2, 6);
                CreateText("Load 1", "Load", 2, 7);
            }

            if(BackgroundColor_Save_2 == null)
            {
                CreateText("Save 2", "Save", 2, 8);
                CreateText("Load 2", "Can't Load", 2, 9);
            }
            else
            {
                CreateText("Save 2", "Saved", 2, 8);
                CreateText("Load 2", "Load", 2, 9);
            }

        }

        textSize(10);
        if(BackgroundColor == "Black") CreateText("Background Color","Black", 1, 2);
        else if(BackgroundColor == "White") CreateText("Background Color", "White", 1, 2);

        if(UIGroup == 1) var o = "Open";
        else if(UIGroup == 2) o = "Close";

        CreateText("Presets", o, 1, 3);

        textSize(12);
        CreateText(Projectiles.length + " Projectiles", StartText, 2, 10);


    }

}


/*

//Credits:

/Thank you Mom for helping me push through.

/Thank you Codey for the help.

*/