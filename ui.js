//# Anything functions relating to the UI.



//* Color Picker:

function createMyColorPicker()
{
    colorPicker = createColorPicker(projectileColor);
    colorPicker.position((offsetOffWall - 5) - (buttonWidth / 2), (buttonHeight * 8) + (offsetBetweenButtons * 8) /* <-- Order of Buttons*/ - (buttonHeight / 2) - 5 );
    colorPicker.size(buttonWidth * (1 + 1/8), buttonHeight * (1 + 1/3));
    colorPicker.input(() => { projectileColor = colorPicker.value() });
}

//* Creation/Deletion of Buttons

function createMyButton(side, order, group, hide=false)
{
    var side;

    if(side == 1) side = offsetOffWall;
    else if(side == 2) side = width - offsetOffWall;

    if(!hide) {

        var currentButton;

        currentButton = new Sprite(side, (buttonHeight * order) + (offsetBetweenButtons * order), buttonWidth, buttonHeight, "static");

        currentButton.draw = function() 
        {
            fill(120);
            noStroke();
            rect(0, 0, buttonWidth, buttonHeight, 2);
        }

        if(group == 1) settingsButtons.push(currentButton);
        else if(group == 2) presetButtons.push(currentButton);
        else if(group == 0) standardButtons.push(currentButton);

    }

    return currentButton;

}

function createButtonGroup(group)
{
    if(group == 1)
    {
        projectileShape_Sprite = createMyButton(1, 4, 1);
        projectileLength_Sprite = createMyButton(1, 5, 1);
        projectileWidth_Sprite = createMyButton(1, 6, 1);
        projectileColorType_Sprite = createMyButton(1, 7, 1);
        rainbowSpeed_Sprite = createMyButton(1, 9, 1);
        projectileOutline_Sprite = createMyButton(1, 10, 1);
        
        originX_Sprite = createMyButton(2, 1, 1);
        originY_Sprite = createMyButton(2, 2, 1);
        rateOfFire_Sprite = createMyButton(2, 3, 1);
        projectileNumber_Sprite = createMyButton(2, 4, 1);
        projectileSpeed_Sprite = createMyButton(2, 5, 1);
        projectileDirection_Sprite = createMyButton(2, 6, 1);
        projectileSpinSpeed_Sprite = createMyButton(2, 7, 1);
        screenSquare_Sprite = createMyButton(2, 8, 1);
        projectileCollisionWithWallMode_Sprite = createMyButton(2, 9, 1);

        createdGroup1 = true;
    }

    else if(group == 2)
    {
        preset1_Sprite = createMyButton(1, 4, 2);
        preset2_Sprite = createMyButton(1, 5, 2);
        preset3_Sprite = createMyButton(1, 6, 2);
        preset4_Sprite = createMyButton(1, 7, 2);
        preset5_Sprite = createMyButton(1, 8, 2);
        preset6_Sprite = createMyButton(1, 9, 2);
        preset7_Sprite = createMyButton(1, 10, 2);
        preset8_Sprite = createMyButton(2, 1, 2);
        preset9_Sprite = createMyButton(2, 2, 2);
        preset10_Sprite = createMyButton(2, 3, 2);
        preset11_Sprite = createMyButton(2, 4, 2);
        preset12_Sprite = createMyButton(2, 5, 2);
        

        save1_Sprite = createMyButton(2, 6, 2);
        load1_Sprite = createMyButton(2, 7, 2);
        save2_Sprite = createMyButton(2, 8, 2);
        load2_Sprite = createMyButton(2, 9, 2);

        createdGroup2 = true;
    }
    else if(group == 0)
    {
        backgroundColor_Sprite = createMyButton(1, 2, 0);
        openPresets_Sprite = createMyButton(1, 3, 0);
        start_Sprite = createMyButton(2, 10, 0);

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
    if(backgroundColor_Sprite.mouse.released())
    {
        if(backgroundColor == "Black") backgroundColor = "White";
        else if(backgroundColor == "White") backgroundColor = "Black";
    }
    

    if(openPresets_Sprite.mouse.released())
    {
        if(uiGroup == 1) uiGroup = 2;
        else if(uiGroup == 2) uiGroup = 1;
    }
    
    if(start_Sprite.mouse.released())
    {
        if(gameStatus == "Stopped") setGameStatus("Running");
        else if(gameStatus == "Running") setGameStatus("Idle");
        else if(gameStatus == "Idle")
        {
            setGameStatus("Stopped");
            deleteProjectiles();
        }
    }
}

function settingsButtonsControls()
{

    if(originX_Sprite.mouse.released())
    {
        originX_Per = promptsForButtons("Origin X = Vertical Axis", originX_Per);
        if(originX_Per > 100) originX_Per = 100;
        else if(originX_Per < 0) originX_Per = 0;

        changeOriginXPosition();
    }

    if(originY_Sprite.mouse.released())
    {
        originY_Per = promptsForButtons("Origin Y = Vertical Axis", originY_Per);
        if(originY_Per > 100) originY_Per = 100;
        else if(originY_Per < 0) originY_Per = 0;

        changeOriginYPosition();
    }

    if(projectileShape_Sprite.mouse.released())
    {
        if(projectileShape == "Square") projectileShape = "Circle";
        else projectileShape = "Square";
    }

    if(screenSquare_Sprite.mouse.released())
    {
        if(screenSquare == "False") screenSquare = "True";
        else screenSquare = "False";
    }

    if(projectileCollisionWithWallMode_Sprite.mouse.released())
    {

        if(projectileCollisionWithWallMode == "None") projectileCollisionWithWallMode = "Bounce";
        else if(projectileCollisionWithWallMode == "Bounce") projectileCollisionWithWallMode = "Loop";
        else if(projectileCollisionWithWallMode == "Loop") projectileCollisionWithWallMode = "None";

    }

    if(projectileLength_Sprite.mouse.released()) projectileLength = promptsForButtons("Projectile Length", projectileLength);

    if(projectileWidth_Sprite.mouse.released()) projectileWidth = promptsForButtons("Projectile Width", projectileWidth);
    
    if(projectileColorType_Sprite.mouse.released())
    {
        if(projectileColorType == "Color") projectileColorType = "Random";
        else if(projectileColorType == "Random") projectileColorType = "Rainbow";
        else if(projectileColorType == "Rainbow") projectileColorType = "Color";
    }

    if(rainbowSpeed_Sprite.mouse.released())
    {
        rainbowSpeed = promptsForButtons("Rainbow Speed   Max 255", rainbowSpeed);
        if(rainbowSpeed > 255) rainbowSpeed = 255;
        else if(rainbowSpeed < -255) rainbowSpeed = -255;
    }

    if(projectileOutline_Sprite.mouse.released()) projectileOutline = promptsForButtons("Projectile Outline   0 for OFF", projectileOutline);

    if(projectileNumber_Sprite.mouse.released())
    {
        projectileNumber = promptsForButtons("Number of Projectiles allowed on Screen OR 0 for Infinity", projectileNumber);
        if(projectileNumber == 0) projectileNumber = Infinity;
    }

    if(rateOfFire_Sprite.mouse.released())
    {
        rateOfFire = promptsForButtons("Rate of Fire   Max 100", rateOfFire);
        if(rateOfFire > 100) rateOfFire = 100;
    }

    if(projectileSpeed_Sprite.mouse.released()) projectileSpeed = promptsForButtons("Projectile Speed", projectileSpeed);

    if(projectileDirection_Sprite.mouse.released()) projectileDirection = Number(promptsForButtons("Origin Direction   0 to 360", projectileDirection));

    if(projectileSpinSpeed_Sprite.mouse.released()) projectileSpinSpeed = promptsForButtons("Origin Spin Speed   + OR -", projectileSpinSpeed);
    
}

function promptsForButtons(text, variable_2) 
{
    var variable = prompt(text);

    if (variable == null || variable == "") variable = variable_2;
    return variable;
}

//* Text:

function createText(name, status, side, order)
{
    var side;

    if(side == 1) side = offsetOffWall;
    else if(side == 2) side = width - offsetOffWall;

    text(name, side, (buttonHeight * order) + (offsetBetweenButtons * order) - (buttonHeight / 30 * 16));

    textSize( Math.floor(buttonHeight / 2) );

    text(status, side, (buttonHeight * order) + (offsetBetweenButtons * order) + (buttonHeight / 30 * 5));

}
