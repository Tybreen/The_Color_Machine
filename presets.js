//# All of the presets are written down here.

function presetButtonsControls()
{
    if(Preset1_Sprite.mouse.released())
    {
        BackgroundColor = "Black";
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Square";
        ProjectileLength = 30;
        ProjectileWidth = 10;
        ProjectileColorType = "Color";
        ProjectileColor = "Cyan";
        RainbowSpeed = 0;
        ProjectileOutline = 0;
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
        BackgroundColor = "Black";
        OriginX_Per = 75;
        OriginY_Per = 80;
        ProjectileShape = "Circle";
        ProjectileLength = 20;
        ProjectileWidth = 50;
        ProjectileColorType = "Random";
        ProjectileColor = 120;
        RainbowSpeed = 0;
        ProjectileOutline = 0;
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
        ProjectileColor = 120;
        RainbowSpeed = 10;
        ProjectileOutline = 0;
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
        RainbowSpeed = 0;
        ProjectileOutline = 2;
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
        BackgroundColor = "Black";
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Circle";
        ProjectileLength = .2;
        ProjectileWidth = 300;
        ProjectileColorType = "Rainbow";
        ProjectileColor = 120;
        RainbowSpeed = 30;
        ProjectileOutline = 0;
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
        BackgroundColor = "Black";
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Square";
        ProjectileLength = 100;
        ProjectileWidth = 25;
        ProjectileColorType = "Rainbow";
        ProjectileColor = 120;
        RainbowSpeed = 15;
        ProjectileOutline = 1;
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
        BackgroundColor = "Black";
        OriginX_Per = 0;
        OriginY_Per = 0;
        ProjectileShape = "Square";
        ProjectileLength = 15;
        ProjectileWidth = 30;
        ProjectileColorType = "Color";
        ProjectileColor = "#11800e";
        RainbowSpeed = 0;
        ProjectileOutline = 0;
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
        BackgroundColor = "Black";
        OriginX_Per = 50;
        OriginY_Per = 100;
        ProjectileShape = "Circle";
        ProjectileLength = 50;
        ProjectileWidth = 25;
        ProjectileColorType = "Rainbow";
        ProjectileColor = 120;
        RainbowSpeed = 10;
        ProjectileOutline = 0;
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
        BackgroundColor = "Black";
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Square";
        ProjectileLength = 10;
        ProjectileWidth = 300;
        ProjectileColorType = "Random";
        ProjectileColor = 120;
        RainbowSpeed = 0;
        ProjectileOutline = 0;
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
        BackgroundColor = "Black";
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Square";
        ProjectileLength = 50;
        ProjectileWidth = 10;
        ProjectileColorType = "Rainbow";
        ProjectileColor = 120;
        RainbowSpeed = 10;
        ProjectileOutline = 0;
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
        BackgroundColor = "Black";
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Circle";
        ProjectileLength = 100;
        ProjectileWidth = 20;
        ProjectileColorType = "Rainbow";
        ProjectileColor = 120;
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
    // TODO:
    if(Preset12_Sprite.mouse.released())
    {
        BackgroundColor = "Black";
        OriginX_Per = 50;
        OriginY_Per = 50;
        ProjectileShape = "Square";
        ProjectileLength = 100;
        ProjectileWidth = 10;
        ProjectileColorType = "Random";
        RainbowSpeed = 0;
        ProjectileOutline = 0;
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
        ProjectileOutline_Save_1 = ProjectileOutline;
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
            ProjectileOutline = ProjectileOutline_Save_1;
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
        ProjectileOutline_Save_1 = ProjectileOutline;
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
            ProjectileOutline = ProjectileOutline_Save_2;
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
