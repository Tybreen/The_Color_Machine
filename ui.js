//# Anything functions relating to the UI.



//* Color Picker:

function CreateColorPicker()
{
    ColorPicker = createColorPicker(ProjectileColor);
    ColorPicker.position((offsetOffWall - 5) - (ButtonWidth / 2), (ButtonHeight * 8) + (offsetBetweenButtons * 8) /* <-- Order of Buttons*/ - (ButtonHeight / 2) - 5 );
    ColorPicker.size(ButtonWidth * (1 + 1/8), ButtonHeight * (1 + 1/3));
    ColorPicker.input(() => { ProjectileColor = ColorPicker.value() });

    //console.log("file: ColorMachine.js:1374 ~ mouseMode:", mouseMode);

    ColorPicker.mouseOver(() => 
    {
        mouseMode = "HAND";
        console.log("enter");
    });

    ColorPicker.mouseOut(() => 
    {
        mouseMode = "ARROW";
        console.log("exit");
    });
}

//* Creation/Deletion of Buttons

function CreateButton(side, order, group, Hide=false)
{

    var Side;

    if(side == 1) Side = offsetOffWall;
    else if(side == 2) Side = width - offsetOffWall;

    if(!Hide) {

        var CurrentButton;

        CurrentButton = new Sprite(Side, (ButtonHeight * order) + (offsetBetweenButtons * order), ButtonWidth, ButtonHeight, "static");

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
        ProjectileOutline_Sprite = CreateButton(1, 10, 1);
        
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

    else if(group == 2)
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
    else if(group == 0)
    {
        BackgroundColor_Sprite = CreateButton(1, 2, 0);
        OpenPresets_Sprite = CreateButton(1, 3, 0);
        Start_Sprite = CreateButton(2, 10, 0);

        createdGroup0 = true;
    }

}

function deleteButtonGroup(group)
{
    if(group == 1)
    {
        settingsButtons.removeAll();
        
        createdGroup1 = false;
    }

    else if(group == 2)
    {
        presetButtons.removeAll();
        
        createdGroup2 = false;
    }

    else if(group == 0)
    {
        standardButtons.removeAll();
        
        createdGroup0 = false;
    }
}

//* Button Controls:

function standardButtonsControls()
{
    if(BackgroundColor_Sprite.mouse.released())
    {
        if(BackgroundColor == "Black")
        {
            BackgroundColor = "White";
        }
    
        else if(BackgroundColor == "White")
        {
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
        if(GameStatus == "Stopped")
        {
            SetGameStatus("Running");
        }

        else if(GameStatus == "Running")
        {
            SetGameStatus("Idle");
        }

        else if(GameStatus == "Idle")
        {
            SetGameStatus("Stopped");
            DeleteProjectiles();
        }

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

        if(ProjectileShape == "Square")
        {
            ProjectileShape = "Circle";
        }

        else if(ProjectileShape == "Circle")
        {
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

    if(ProjectileLength_Sprite.mouse.released())
    { 
        ProjectileLength = PromptsForButtons("Projectile Length", ProjectileLength);
    }
    if(ProjectileWidth_Sprite.mouse.released())
    { 
        ProjectileWidth = PromptsForButtons("Projectile Width", ProjectileWidth);
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

    if(ProjectileOutline_Sprite.mouse.released()) { ProjectileOutline = PromptsForButtons("Projectile Outline   0 for OFF", ProjectileOutline) };

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

function PromptsForButtons(Text, Var2) {
  var Var = prompt(Text);

  if (Var == null || Var == "") Var = Var2;

  return Var;
}

//* Text:

function CreateText(Name, Status, side, order)
{
    var Side;

    if(side == 1) Side = offsetOffWall;
    else if(side == 2) Side = width - offsetOffWall;

    text(Name, Side, (ButtonHeight * order) + (offsetBetweenButtons * order) - (ButtonHeight / 30 * 16));

    textSize( Math.floor(ButtonHeight / 2) );

    text(Status, Side, (ButtonHeight * order) + (offsetBetweenButtons * order) + (ButtonHeight / 30 * 5));

}
