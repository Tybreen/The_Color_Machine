//# The setup function. It runs when the game loads. (Before the draw function)

function setup() 
{

    setInterval(function() { fps = Math.floor(getFrameRate()) }, 500);
    
    createCanvas(windowWidth, windowHeight);

    textAlign(CENTER);
    rectMode(CORNERS);

    if(window.matchMedia('(prefers-color-scheme: dark)').matches) backgroundColor = "Black";
    else backgroundColor = "White";

    originX_Pix = width / 2;
    originY_Pix = height / 2; 

    buttonHeight = (3 * height) / 80;
    buttonWidth = (8 * buttonHeight) / 3;

    offsetOffWall = buttonHeight * 2;
    offsetBetweenButtons = buttonHeight;

    projectiles = new Group();

    standardButtons = new Group();
    settingsButtons = new Group();
    presetButtons = new Group();

    this.introText = createDiv("The Color Machine!<br/><br/>This is a Game about Creativity. There is NO Goal to the Game. You can adjust the Settings on the Right and Left to make any Pattern you'd like! There are already premade Presets. If you Click them they will show you a Few Examples. Just click the Preset Menu button and choose a present.<br/><br/>When you're Ready to Run your Project just hit START.");
    this.introText.style('font-size', String(buttonHeight * 2/3) + "px");
    this.introText.style("text-align", "center");
    this.introText.style("margin", "150px 250px");
    if(backgroundColor == "Black") this.introText.style("color", "White");
    else this.introText.style("color", "Black");
    this.introText.position(0, -50);


    // origin:

    origin = new Sprite(originX_Pix, originY_Pix, 10, 10, "none");

    origin.draw = function()
    {
        fill(120);
        noStroke();

        if(projectileShape == "Square")
        {
            noStroke();
            rect(0, 0, this.width, this.height);
        }

        else if(projectileShape == "Circle")
        {
            noStroke();
            ellipse(0, 0, this.width, this.height);
        }
    }
    

    // UI Hide Button:
    uiHide_Sprite = new Sprite(offsetOffWall, offsetBetweenButtons + buttonHeight, buttonWidth, buttonHeight, "static");

    uiHide_Sprite.draw = function()
    {
        fill(120);
        noStroke();
        rect(0, 0, buttonWidth, buttonHeight, 2);
    }
    createButtonGroup(0);
    createButtonGroup(1);

}
