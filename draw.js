//# The draw function. It runs every frame.

function draw()
{

    if(backgroundColor == "Black") background(0);
    else if(backgroundColor == "White") background(255);

    if(projectileCollisionWithWallMode == "None") cleaner();
    else if(projectileCollisionWithWallMode == "Bounce") bounceManager();
    else if(projectileCollisionWithWallMode == "Loop") loopManager();

    if(projectileSpinSpeed != 0 && gameStatus == "Running") originSpinSpeedProcessing();

    if(gameStatus == "Idle" && projectiles.length == 0) setGameStatus("Stopped");

    if(createdGroup0) standardButtonsControls();
    if(createdGroup1) settingsButtonsControls();
    if(createdGroup2) presetButtonsControls();

    origin.draw();
    
    projectiles.draw();

    uiHide_Sprite.draw();

    createProjectiles();

    changeMouseStatusForButton(uiHide_Sprite);

    changeMouseStatusForButtons(standardButtons);
    changeMouseStatusForButtons(settingsButtons);
    changeMouseStatusForButtons(presetButtons);

    changeMouseStatus();
    

    if(rainbowSpeed != 0 && projectileColorType == "Rainbow" && gameStatus == "Running")
    {
        if(blue <= 0 && red >= 255) green += Number(rainbowSpeed);
        if(blue <= 0 && green >= 255) red -= Number(rainbowSpeed);
        if(red <= 0 && green >= 255) blue += Number(rainbowSpeed);
        if(red <= 0 && blue >= 255) green -= Number(rainbowSpeed);
        if(green <= 0 && blue >= 255) red += Number(rainbowSpeed);
        if(green <= 0 && red >= 255) blue -= Number(rainbowSpeed);
    }

    //FPS:

    fill(120);
    textSize(buttonHeight / 2);
    text("FPS " + fps, width - buttonHeight, buttonHeight / 2);


    if(!instructionText) this.introText.remove();

    if(backgroundColor == "Black") fill("White");
    else if(backgroundColor == "White") fill("Black");

    textSize( Math.floor(buttonHeight / 2) );
    if(uiHide) createText("UI", "Show", 1, 1);

    else if(!uiHide) createText("UI", "Hide", 1, 1);


    if((!uiHide && uiGroup == 1) && colorPicker == null) createMyColorPicker();
    
    else if((uiHide || uiGroup == 2) && colorPicker != null) 
    {
        colorPicker.remove();
        colorPicker = null;
    }

    if(uiHide_Sprite.mouse.released())
    {
        if(uiHide)
        {
            uiHide = false;
            createButtonGroup(0);
        }

        else if(!uiHide) uiHide = true;
    }

    if(uiHide)
    {   
        if(createdGroup1) deleteButtonGroup(1);
        if(createdGroup2) deleteButtonGroup(2);
        if(createdGroup0) deleteButtonGroup(0);
    }


    if(!uiHide)
    {
        standardButtons.draw();

        // Group 1:

        if(uiGroup == 1) 
        {

            if(!createdGroup1)
            {
                deleteButtonGroup(2);
                createButtonGroup(1);
            }
            
            settingsButtons.draw();
            
        
            // Left Texts:

            textSize( Math.floor(buttonHeight / 2.6) );
            createText("Projectile Shape", projectileShape, 1, 4);
            textSize( Math.floor(buttonHeight / 2.6) );
            createText("Projectile Length", projectileLength, 1, 5);
            textSize( Math.floor(buttonHeight / 2.6) );
            createText("Projectile Width", projectileWidth, 1, 6);
            textSize( Math.floor(buttonHeight / 3.3) );
            createText("Projectile Color Type", projectileColorType, 1, 7);
            textSize( Math.floor(buttonHeight / 2.5) );
            createText("Projectile Color", "", 1, 8);
            textSize( Math.floor(buttonHeight / 2.6) );
            createText("Rainbow Speed", rainbowSpeed, 1, 9);
            textSize( Math.floor(buttonHeight / 2.8) );
            createText("Projectile Outline", projectileOutline, 1, 10);


            // Right Texts:

            textSize( Math.floor(buttonHeight / 2) );
            createText("Origin X", originX_Per + "%", 2, 1);
            textSize( Math.floor(buttonHeight / 2) );
            createText("Origin Y", originY_Per + "%", 2, 2);
            textSize( Math.floor(buttonHeight / 2) );
            createText("Rate of Fire", rateOfFire, 2, 3);
            textSize( Math.floor(buttonHeight / 3.5) );
            createText("Number of Projectiles", projectileNumber, 2, 4);
            textSize( Math.floor(buttonHeight / 2.7) );
            createText("Projectile Speed", projectileSpeed, 2, 5);
            textSize( Math.floor(buttonHeight / 2.6) );
            createText("Origin Direction", Math.floor(projectileDirection), 2, 6);
            textSize( Math.floor(buttonHeight / 3) );
            createText("Origin Spin Speed", projectileSpinSpeed, 2, 7);
            textSize( Math.floor(buttonHeight / 2.5) );
            createText("Square Screen", screenSquare, 2, 8);
            textSize( Math.floor(buttonHeight / 3) );
            createText("With Wall Mode", projectileCollisionWithWallMode, 2, 9);
            textSize( Math.floor(buttonHeight / 3) );
            text("Projectile Collision", width - offsetOffWall, (buttonHeight * 9) + (offsetBetweenButtons * 9) /* <-- Order of Buttons*/ - (buttonHeight * 17/20));
            
        }
        
        // Group 2:

        else if(uiGroup == 2)
        {
            if(!createdGroup2)
            {
                deleteButtonGroup(1);
                createButtonGroup(2);
            }

            presetButtons.draw();

            createText("Preset 1", "Click", 1, 4);
            createText("Preset 2", "Click", 1, 5);
            createText("Preset 3", "Click", 1, 6);
            createText("Preset 4", "Click", 1, 7);
            createText("Preset 5", "Click", 1, 8);
            createText("Preset 6", "Click", 1, 9);
            createText("Preset 7", "Click", 1, 10);

            createText("Preset 8", "Click", 2, 1);
            createText("Preset 9", "Click", 2, 2);
            createText("Preset 10", "Click", 2, 3);
            createText("Preset 11", "Click", 2, 4);
            createText("Preset ???", "Click", 2, 5);


            if(backgroundColor_Save_1 == null)
            {
                createText("Save 1", "Save", 2, 6);
                createText("Load 1", "Can't Load", 2, 7);
            }
            else
            {
                createText("Save 1", "Saved", 2, 6);
                createText("Load 1", "Load", 2, 7);
            }

            if(backgroundColor_Save_2 == null)
            {
                createText("Save 2", "Save", 2, 8);
                createText("Load 2", "Can't Load", 2, 9);
            }
            else
            {
                createText("Save 2", "Saved", 2, 8);
                createText("Load 2", "Load", 2, 9);
            }

        }

        textSize( Math.floor(buttonHeight / 3) );
        if(backgroundColor == "Black") createText("Background Color","Black", 1, 2);
        else if(backgroundColor == "White") createText("Background Color", "White", 1, 2);

        if(uiGroup == 1) var o = "Open";
        else if(uiGroup == 2) o = "Close";

        createText("Presets", o, 1, 3);
        if(instructionText) 

        textSize( Math.floor(buttonHeight / 2.5) );
        createText(projectiles.length + " Projectiles", startText, 2, 10);
        
        if(instructionText) 
        {
            fill("lime")
            // For Preset Button.
            createText("", "                                            <---------------", 1, 3);
            // For Start Button.
            createText("", "--------------->                                            ", 2, 10);
        }

    }

}
