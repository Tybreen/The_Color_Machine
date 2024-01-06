//# All of the presets are written down here.

function presetButtonsControls()
{
    //* Presets:

    if(preset1_Sprite.mouse.released())
    {
        backgroundColor = "Black";
        originX_Per = 50;
        originY_Per = 50;
        projectileShape = "Square";
        projectileLength = 30;
        projectileWidth = 10;
        projectileColorType = "Color";
        projectileColor = "Cyan";
        rainbowSpeed = 0;
        projectileOutline = 0;
        projectileNumber = Infinity;
        rateOfFire = 3;
        projectileSpeed = 3;
        projectileDirection = 30;
        projectileSpinSpeed = 0;
        screenSquare = "False";
        projectileCollisionWithWallMode = "None";

        changeOriginPosition();
        deleteProjectiles();
        setGameStatus("Running");

    }

    if(preset2_Sprite.mouse.released())
    {
        backgroundColor = "Black";
        originX_Per = 75;
        originY_Per = 80;
        projectileShape = "Circle";
        projectileLength = 20;
        projectileWidth = 50;
        projectileColorType = "Random";
        projectileColor = 120;
        rainbowSpeed = 0;
        projectileOutline = 0;
        projectileNumber = 50;
        rateOfFire = 10;
        projectileSpeed = 8;
        projectileDirection = 200;
        projectileSpinSpeed = 0;
        screenSquare = "False";
        projectileCollisionWithWallMode = "Bounce";

        changeOriginPosition();
        deleteProjectiles();
        setGameStatus("Running");
    }

    if(preset3_Sprite.mouse.released())
    {
        backgroundColor = "Black";
        originX_Per = 50;
        originY_Per = 50;
        projectileShape = "Square";
        projectileLength = 50;
        projectileWidth = 10;
        projectileColorType = "Rainbow";
        projectileColor = 120;
        rainbowSpeed = 10;
        projectileOutline = 0;
        projectileNumber = 175;
        rateOfFire = 100;
        projectileSpeed = 55;
        projectileDirection = 246;
        projectileSpinSpeed = 0;
        screenSquare = "False";
        projectileCollisionWithWallMode = "Loop";

        changeOriginPosition();
        deleteProjectiles();
        setGameStatus("Running");
    }

    if(preset4_Sprite.mouse.released())
    {
        backgroundColor = "White";
        originX_Per = 50;
        originY_Per = 50;
        projectileShape = "Circle";
        projectileLength = 45;
        projectileWidth = 15;
        projectileColorType = "Color";
        projectileColor = "Black";
        rainbowSpeed = 0;
        projectileOutline = 2;
        projectileNumber = 25;
        rateOfFire = 10;
        projectileSpeed = 3;
        projectileDirection = 0;
        projectileSpinSpeed = 50;
        screenSquare = "True";
        projectileCollisionWithWallMode = "Bounce";

        changeOriginPosition();
        deleteProjectiles();
        setGameStatus("Running");
    }

    if(preset5_Sprite.mouse.released())
    {
        backgroundColor = "Black";
        originX_Per = 50;
        originY_Per = 50;
        projectileShape = "Circle";
        projectileLength = .2;
        projectileWidth = 300;
        projectileColorType = "Rainbow";
        projectileColor = 120;
        rainbowSpeed = 30;
        projectileOutline = 0;
        projectileNumber = 100;
        rateOfFire = 100;
        projectileSpeed = 150;
        projectileDirection = 2;
        projectileSpinSpeed = 0;
        screenSquare = "False";
        projectileCollisionWithWallMode = "Bounce";

        changeOriginPosition();
        deleteProjectiles();
        setGameStatus("Running");
    }

    if(preset6_Sprite.mouse.released())
    {
        backgroundColor = "Black";
        originX_Per = 50;
        originY_Per = 50;
        projectileShape = "Square";
        projectileLength = 100;
        projectileWidth = 25;
        projectileColorType = "Rainbow";
        projectileColor = 120;
        rainbowSpeed = 15;
        projectileOutline = 1;
        projectileNumber = Infinity;
        rateOfFire = 100;
        projectileSpeed = 2;
        projectileDirection = 0;
        projectileSpinSpeed = 605;
        screenSquare = "False";
        projectileCollisionWithWallMode = "None";

        changeOriginPosition();
        deleteProjectiles();
        setGameStatus("Running");
    }

    if(preset7_Sprite.mouse.released())
    {
        backgroundColor = "Black";
        originX_Per = 0;
        originY_Per = 0;
        projectileShape = "Square";
        projectileLength = 30;
        projectileWidth = 60;
        projectileColorType = "Rainbow";
        projectileColor = 120;
        rainbowSpeed = 10;
        projectileOutline = 0;
        projectileNumber = 100;
        rateOfFire = 100;
        projectileSpeed = 1;
        projectileDirection = 0;
        projectileSpinSpeed = 100;
        screenSquare = "True";
        projectileCollisionWithWallMode = "Loop";

        changeOriginPosition();
        deleteProjectiles();
        setGameStatus("Running");
    }

    if(preset8_Sprite.mouse.released())
    {
        backgroundColor = "Black";
        originX_Per = 50;
        originY_Per = 100;
        projectileShape = "Circle";
        projectileLength = 50;
        projectileWidth = 25;
        projectileColorType = "Rainbow";
        projectileColor = 120;
        rainbowSpeed = 10;
        projectileOutline = 0;
        projectileNumber = 400;
        rateOfFire = 100;
        projectileSpeed = 1;
        projectileDirection = 0;
        projectileSpinSpeed = 605;
        screenSquare = "False";
        projectileCollisionWithWallMode = "Bounce";

        changeOriginPosition();
        deleteProjectiles();
        setGameStatus("Running");
    }

    if(preset9_Sprite.mouse.released())
    {
        backgroundColor = "Black";
        originX_Per = 50;
        originY_Per = 50;
        projectileShape = "Square";
        projectileLength = 10;
        projectileWidth = 300;
        projectileColorType = "Random";
        projectileColor = 120;
        rainbowSpeed = 0;
        projectileOutline = 0;
        projectileNumber = 150;
        rateOfFire = 100;
        projectileSpeed = 1;
        projectileDirection = 0;
        projectileSpinSpeed = 450;
        screenSquare = "True";
        projectileCollisionWithWallMode = "Bounce";

        changeOriginPosition();
        deleteProjectiles();
        setGameStatus("Running");
    }

    if(preset10_Sprite.mouse.released())
    {
        backgroundColor = "Black";
        originX_Per = 50;
        originY_Per = 50;
        projectileShape = "Square";
        projectileLength = 75;
        projectileWidth = 100;
        projectileColorType = "Rainbow";
        rainbowSpeed = 3;
        projectileOutline = 1;
        projectileNumber = Infinity;
        rateOfFire = 100;
        projectileSpeed = 2.75;
        projectileDirection = 0;
        projectileSpinSpeed = 100;
        screenSquare = "False";
        projectileCollisionWithWallMode = "None";

        changeOriginPosition();
        deleteProjectiles();
        setGameStatus("Running");
    }

    if(preset11_Sprite.mouse.released())
    {
        backgroundColor = "Black";
        originX_Per = 50;
        originY_Per = 50;
        projectileShape = "Circle";
        projectileLength = 100;
        projectileWidth = 20;
        projectileColorType = "Rainbow";
        projectileColor = 120;
        rainbowSpeed = 10;
        projectileOutline = 0;
        projectileNumber = 200;
        rateOfFire = 100;
        projectileSpeed = 20;
        projectileDirection = 70;
        projectileSpinSpeed = 900;
        screenSquare = "False";
        projectileCollisionWithWallMode = "Loop";

        changeOriginPosition();
        deleteProjectiles();
        setGameStatus("Running");
    }

    if(preset12_Sprite.mouse.released())
    {
        backgroundColor = "Black";
        originX_Per = 50;
        originY_Per = 50;
        projectileShape = "Square";
        projectileLength = 50;
        projectileWidth = 10;
        projectileColorType = "Rainbow";
        projectileColor = 120;
        rainbowSpeed = 10;
        projectileOutline = 0;
        projectileNumber = 250;
        rateOfFire = 100;
        projectileSpeed = 100;
        projectileDirection = 270;
        projectileSpinSpeed = .1;
        screenSquare = "False";
        projectileCollisionWithWallMode = "Bounce";

        changeOriginPosition();
        deleteProjectiles();
        setGameStatus("Running");
    }
    
    //* Saves:

    if(save1_Sprite.mouse.released())
    {
        backgroundColor_Save_1 = backgroundColor;
        originX_Per_Save_1 = originX_Per;
        originY_Per_Save_1 = originY_Per;
        projectileShape_Save_1 = projectileShape;
        projectileLength_Save_1 = projectileLength;
        projectileWidth_Save_1 = projectileWidth;
        projectileColorType_Save_1 = projectileColorType;
        projectileColor_Save_1 = projectileColor;
        rainbowSpeed_Save_1 = rainbowSpeed;
        projectileOutline_Save_1 = projectileOutline;
        projectileNumber_Save_1 = projectileNumber;
        rateOfFire_Save_1 = rateOfFire;
        projectileSpeed_Save_1 = projectileSpeed;
        projectileDirection_Save_1 = projectileDirection;
        projectileSpinSpeed_Save_1 = projectileSpinSpeed;
        screenSquare_Save_1 = screenSquare;
        projectileCollisionWithWallMode_Save_1 = projectileCollisionWithWallMode;

    }

    if(load1_Sprite.mouse.released())
    {
        if(backgroundColor_Save_1 != null)
        {
            backgroundColor = backgroundColor_Save_1;
            originX_Per = originX_Per_Save_1;
            originY_Per = originY_Per_Save_1;
            projectileShape = projectileShape_Save_1;
            projectileLength = projectileLength_Save_1;
            projectileWidth = projectileWidth_Save_1;
            projectileColorType = projectileColorType_Save_1;
            projectileColor = projectileColor_Save_1;
            rainbowSpeed = rainbowSpeed_Save_1;
            projectileOutline = projectileOutline_Save_1;
            projectileNumber = projectileNumber_Save_1;
            rateOfFire = rateOfFire_Save_1;
            projectileSpeed = projectileSpeed_Save_1;
            projectileDirection = projectileDirection_Save_1;
            projectileSpinSpeed = projectileSpinSpeed_Save_1;
            screenSquare = screenSquare_Save_1;
            projectileCollisionWithWallMode = projectileCollisionWithWallMode_Save_1;

            changeOriginPosition();
            deleteProjectiles();
            setGameStatus("Running");
        }
    }

    if(save2_Sprite.mouse.released())
    {
        backgroundColor_Save_2 = backgroundColor;
        originX_Per_Save_2 = originX_Per;
        originY_Per_Save_2 = originY_Per;
        projectileShape_Save_2 = projectileShape;
        projectileLength_Save_2 = projectileLength;
        projectileWidth_Save_2 = projectileWidth;
        projectileColorType_Save_2 = projectileColorType;
        projectileColor_Save_2 = projectileColor;
        rainbowSpeed_Save_2 = rainbowSpeed;
        projectileOutline_Save_1 = projectileOutline;
        projectileNumber_Save_2 = projectileNumber;
        rateOfFire_Save_2 = rateOfFire;
        projectileSpeed_Save_2 = projectileSpeed;
        projectileDirection_Save_2 = projectileDirection;
        projectileSpinSpeed_Save_2 = projectileSpinSpeed;
        screenSquare_Save_2 = screenSquare;
        projectileCollisionWithWallMode_Save_2 = projectileCollisionWithWallMode;

    }

    if(load2_Sprite.mouse.released())
    {
        if(backgroundColor_Save_2 != null)
        {
            backgroundColor = backgroundColor_Save_2;
            originX_Per = originX_Per_Save_2;
            originY_Per = originY_Per_Save_2;
            projectileShape = projectileShape_Save_2;
            projectileLength = projectileLength_Save_2;
            projectileWidth = projectileWidth_Save_2;
            projectileColorType = projectileColorType_Save_2;
            projectileColor = projectileColor_Save_2;
            rainbowSpeed = rainbowSpeed_Save_2;
            projectileOutline = projectileOutline_Save_2;
            projectileNumber = projectileNumber_Save_2;
            rateOfFire = rateOfFire_Save_2;
            projectileSpeed = projectileSpeed_Save_2;
            projectileDirection = projectileDirection_Save_2;
            projectileSpinSpeed = projectileSpinSpeed_Save_2;
            screenSquare = screenSquare_Save_2;
            projectileCollisionWithWallMode = projectileCollisionWithWallMode_Save_2;

            changeOriginPosition();
            deleteProjectiles();
            setGameStatus("Running");
        }
    }
}
