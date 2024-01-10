//# Miscellaneous but important functions:

function setGameStatus(status)
{
    if(status == "Running") 
    {
        red = 255;
        green = 0;
        blue = 0;
  
        gameStatus = "Running";
        startText = "Stop";
        if(instructionText) instructionText = false;
    }

    else if(status == "Idle")
    {
        gameStatus = "Idle";
        startText = "Reset";
    }
    else if(status == "Stopped")
    {
        gameStatus = "Stopped";
        startText = "Start";
    }
}
  
function changeOriginPosition()
{
    changeOriginXPosition();
    changeOriginYPosition();
}
  
function changeOriginXPosition()
{
    originX_Pix = (originX_Per / 100) * width;
    origin.position.x = originX_Pix;
}
  
function changeOriginYPosition()
{
    originY_Pix = (originY_Per / 100) * height;
    origin.position.y = originY_Pix;
}
  
  
  
function originSpinSpeedProcessing()
{
    projectileDirection += projectileSpinSpeed / 10;
  
    if (projectileDirection >= 360) projectileDirection -= 360;
    else if (projectileDirection <= 0) projectileDirection += 360;
}
  
  
  
function screenSquareManager()
{
    if(screenSquare == "True")
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
  
    if(screenSquare == "False" && (offsetX_SS != 0 || offsetY_SS != 0))
    {
      offsetX_SS = 0;
      offsetY_SS = 0;
    }
}
  
  
function bounceManager()
{
    screenSquareManager();
  
    for (var i = 0; i < projectiles.length; i++)
    {
        var s = projectiles[i];
  
        if(s.position.x < offsetX_SS)
        {
            s.position.x = offsetX_SS;
            s.velocity.x = abs(s.velocity.x);
            projectiles[i].rotation = s.direction - 90;
        }
  
        if (s.position.x > width - offsetX_SS)
        {
            s.position.x = width - offsetX_SS;
            s.velocity.x = -abs(s.velocity.x);
            projectiles[i].rotation = s.direction - 90;
        }
  
        if(s.position.y < offsetY_SS)
        {
        s.position.y = offsetY_SS;
        s.velocity.y = abs(s.velocity.y);
        projectiles[i].rotation = s.direction - 90;
        }
  
        if(s.position.y > height - offsetY_SS)
        {
        s.position.y = height - offsetY_SS;
        s.velocity.y = -abs(s.velocity.y);
        projectiles[i].rotation = s.direction - 90;
        }
    }
}
  

function loopManager()
{
    screenSquareManager();
  
    for(var i = 0; i < projectiles.length; i++)
    {
        var s = projectiles[i];
  
        if (s.position.x < offsetX_SS)
        {
            projectiles[i].position.x = width - offsetX_SS;
        }
  
        if(s.position.x > width - offsetX_SS)
        {
            projectiles[i].position.x = offsetX_SS;
        }
  
        if (s.position.y < offsetY_SS)
        {
            projectiles[i].position.y = height - offsetY_SS;
        }
  
        if(s.position.y > height - offsetY_SS)
        {
        projectiles[i].position.y = offsetY_SS;
        }
    }
}
  
  
function cleaner()
{
    screenSquareManager();
  
    for(var i = 0; i < projectiles.length; i++)
    {
        var item = projectiles[i];
  
        if(item.position.x <= offsetX_SS - projectileLength / 2 || item.position.x >= width - offsetX_SS + projectileLength / 2 || item.position.y <= offsetY_SS - projectileLength / 2 || item.position.y >= height - offsetY_SS + projectileLength / 2)
        {
            item.remove();
            i--;
        }
    }
}
  

function changeMouseStatus()
{
    if(mouseMode == "HAND") cursor(HAND);
    else if(mouseMode == "ARROW") cursor(ARROW);
}
  
  
function changeMouseStatusForButton(sprite)
{
    if(sprite.mouse.hovering()) mouseMode = "HAND";
    if(sprite.mouse.hovered()) mouseMode = "ARROW";
  
}
  
  
function changeMouseStatusForButtons(group)
{
    for(var i = 0; i < group.length; i++)
    {
        changeMouseStatusForButton(group[i]);
    }
}
  