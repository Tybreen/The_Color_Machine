//# The setup function. It runs when the game loads. (Before the draw function)

function setup() 
{

    setInterval(function() { FPS = Math.floor(getFrameRate()) }, 500);
    
    createCanvas(windowWidth, windowHeight);

    textAlign(CENTER);
    rectMode(CORNERS);

    if(window.matchMedia('(prefers-color-scheme: dark)').matches) BackgroundColor = "Black";
    else BackgroundColor = "White";

    OriginX_Pix = width / 2;
    OriginY_Pix = height / 2; 

    ButtonHeight = (3 * height) / 80;
    ButtonWidth = (8 * ButtonHeight) / 3;

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

    Origin.draw = function()
    {
        fill(120);
        noStroke();

        if(ProjectileShape == "Square")
        {
            noStroke();
            rect(0, 0, this.width, this.height);
        }

        else if(ProjectileShape == "Circle")
        {
            noStroke();
            ellipse(0, 0, this.width, this.height);
        }
    }
    

    // UI Hide Button:
    UIHide_Sprite = new Sprite(offsetOffWall, offsetBetweenButtons + ButtonHeight, ButtonWidth, ButtonHeight, "static");
    //UIHide_Sprite.mouseOver = function() { cursor(HAND) };
    //UIHide_Sprite.mouseOut = function() { cursor(ARROW) };

    UIHide_Sprite.draw = function()
    {
        fill(120);
        noStroke();
        rect(0, 0, ButtonWidth, ButtonHeight, 2);
    }
    createMyButtonGroup(0);
    createMyButtonGroup(1);

}
