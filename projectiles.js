//# Anything functions relating to projectiles.

function deleteProjectiles()
{
    while(projectiles.length >= 1) projectiles[0].remove();
}

function createProjectiles()
{
    var currentProjectile;
  
    timeSinceFired += deltaTime / 1000;
    
    if(gameStatus == "Running" && timeSinceFired >= 1 / rateOfFire && (projectileNumber > projectiles.length))
    {
        timeSinceFired = 0;

        currentProjectile = new Sprite();
        currentProjectile.x = origin.position.x;
        currentProjectile.y = origin.position.y;
        currentProjectile.width = projectileWidth;
        currentProjectile.height = projectileLength;
        currentProjectile.Shape = projectileShape;
        currentProjectile.direction = projectileDirection - 90;
        currentProjectile.speed = projectileSpeed;
        currentProjectile.setSpeed = projectileSpeed;
        currentProjectile.rotation = projectileDirection;
        currentProjectile.collider = "none";
        currentProjectile.outline = projectileOutline;

        if(projectileColorType == "Random") currentProjectile.Color = color(random(255), random(255), random(255));

        else if(projectileColorType == "Rainbow") currentProjectile.Color = color(red, green, blue);

        else currentProjectile.Color = projectileColor;
 
        currentProjectile.draw = function()
        {

            if(this.outline == 0)
            {
                fill(this.Color);
                noStroke();
            }
            else
            {
                fill(0, 0);
                stroke(this.Color);
                strokeWeight(this.outline);
            }
            
            
            
            if(this.Shape == "Square")
            {
                rect(0, 0, this.width, this.height);
            }

            else if(this.Shape == "Circle")
            {
                ellipse(0, 0, this.width, this.height);
            }

        }
        
        projectiles.push(currentProjectile);

    }
    
}
