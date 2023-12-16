//# The draw function. It runs every frame.

function draw()
{

    if(BackgroundColor == "Black") background(0);
    else if(BackgroundColor == "White") background(255);

    if(ProjectileCollisionWithWallMode == "None") Cleaner();
    else if(ProjectileCollisionWithWallMode == "Bounce") Bounce();
    else if(ProjectileCollisionWithWallMode == "Loop") Loop();

    if(ProjectileSpinSpeed != 0 && GameStatus == "Running") OriginSpinSpeedProcessing();

    if(GameStatus == "Idle" && Projectiles.length == 0) SetGameStatus("Stopped");

    if(createdGroup0) standardButtonsControls();
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

    ChangeMouseStatusForButton(UIHide_Sprite);
    ChangeMouseStatusForButton(BackgroundColor_Sprite);
    ChangeMouseStatusForButton(OpenPresets_Sprite);
    ChangeMouseStatusForButton(Start_Sprite);

    ChangeMouseStatusForButtons(settingsButtons);
    ChangeMouseStatusForButtons(presetButtons);

    ChangeMouseStatus(); // TODO
    
    //if(ProjectileTrails != 0) CreateTrails();

    if(RainbowSpeed != 0 && ProjectileColorType == "Rainbow" && GameStatus == "Running")
    {
        if(Blue <= 0 && Red >= 255) Green += Number(RainbowSpeed);
        if(Blue <= 0 && Green >= 255) Red -= Number(RainbowSpeed);
        if(Red <= 0 && Green >= 255) Blue += Number(RainbowSpeed);
        if(Red <= 0 && Blue >= 255) Green -= Number(RainbowSpeed);
        if(Green <= 0 && Blue >= 255) Red += Number(RainbowSpeed);
        if(Green <= 0 && Red >= 255) Blue -= Number(RainbowSpeed);
    }

    //FPS:

    fill(120);
    textSize( Math.floor(ButtonHeight / 2) );
    text("FPS " + FPS, width - ButtonHeight, ButtonHeight / 2);


    if(!InstructionText) this.Text.remove();

    if(BackgroundColor == "Black") fill("White");
    else if(BackgroundColor == "White") fill("Black");

    textSize( Math.floor(ButtonHeight / 2) );
    if(UIHide) CreateText("UI", "Show", 1, 1);

    else if(!UIHide) CreateText("UI", "Hide", 1, 1);


    if((!UIHide && UIGroup == 1) && ColorPicker == null) CreateColorPicker();
    
    else if((UIHide || UIGroup == 2) && ColorPicker != null) 
    {
        ColorPicker.remove();
        ColorPicker = null;
    }

    if(UIHide_Sprite.mouse.released())
    {
        if(UIHide)
        {
            UIHide = false;
            createMyButtonGroup(0);
        }

        else if(!UIHide) UIHide = true;
    }

    if(UIHide)
    {   
        if(createdGroup1) deleteButtonGroup(1);
        if(createdGroup2) deleteButtonGroup(2);
        if(createdGroup0) deleteButtonGroup(0);
    }


    if(!UIHide)
    {
        standardButtons.draw();

        // Group 1:

        if(UIGroup == 1) 
        {

            if(!createdGroup1)
            {
                deleteButtonGroup(2);
                createMyButtonGroup(1);
            }
            
            settingsButtons.draw();
            
        
            // Left Texts:

            textSize( Math.floor(ButtonHeight / 2.6) );
            CreateText("Projectile Shape", ProjectileShape, 1, 4);
            textSize( Math.floor(ButtonHeight / 2.6) );
            CreateText("Projectile Length", ProjectileLength, 1, 5);
            textSize( Math.floor(ButtonHeight / 2.6) );
            CreateText("Projectile Width", ProjectileWidth, 1, 6);
            textSize( Math.floor(ButtonHeight / 3.3) );
            CreateText("Projectile Color Type", ProjectileColorType, 1, 7);
            textSize( Math.floor(ButtonHeight / 2.5) );
            CreateText("Projectile Color", "", 1, 8);
            textSize( Math.floor(ButtonHeight / 2.6) );
            CreateText("Rainbow Speed", RainbowSpeed, 1, 9);
            textSize( Math.floor(ButtonHeight / 2.8) );
            CreateText("Projectile Outline", ProjectileOutline, 1, 10);


            // Right Texts:

            textSize( Math.floor(ButtonHeight / 2) );
            CreateText("Origin X", OriginX_Per + "%", 2, 1);
            textSize( Math.floor(ButtonHeight / 2) );
            CreateText("Origin Y", OriginY_Per + "%", 2, 2);
            textSize( Math.floor(ButtonHeight / 2) );
            CreateText("Rate of Fire", RateOfFire + " per Sec", 2, 3);
            textSize( Math.floor(ButtonHeight / 3.5) );
            CreateText("Number of Projectiles", ProjectileNumber, 2, 4);
            textSize( Math.floor(ButtonHeight / 2.7) );
            CreateText("Projectile Speed", ProjectileSpeed, 2, 5);
            textSize( Math.floor(ButtonHeight / 2.6) );
            CreateText("Origin Direction", Math.floor(ProjectileDirection), 2, 6);
            textSize( Math.floor(ButtonHeight / 3) );
            CreateText("Origin Spin Speed", ProjectileSpinSpeed, 2, 7);
            textSize( Math.floor(ButtonHeight / 2.5) );
            CreateText("Square Screen", ScreenSquare, 2, 8);
            textSize( Math.floor(ButtonHeight / 3) );
            CreateText("With Wall Mode", ProjectileCollisionWithWallMode, 2, 9);
            textSize( Math.floor(ButtonHeight / 3) );
            text("Projectile Collision", width - offsetOffWall, (ButtonHeight * 9) + (offsetBetweenButtons * 9) /* <-- Order of Buttons*/ - (ButtonHeight * 17/20));
            
        }
        
        // Group 2:

        else if(UIGroup == 2)
        {
            if(createdGroup1) 
            {
                deleteButtonGroup(1);
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

        textSize( Math.floor(ButtonHeight / 3) );
        if(BackgroundColor == "Black") CreateText("Background Color","Black", 1, 2);
        else if(BackgroundColor == "White") CreateText("Background Color", "White", 1, 2);

        if(UIGroup == 1) var o = "Open";
        else if(UIGroup == 2) o = "Close";

        CreateText("Presets", o, 1, 3);

        textSize( Math.floor(ButtonHeight / 2.5) );
        CreateText(Projectiles.length + " Projectiles", StartText, 2, 10);


    }

}
