//# Anything functions relating to Projectiles.

function DeleteProjectiles()
{
    while(Projectiles.length >= 1) Projectiles[0].remove();
}

function CreateProjectiles()
{
    var CurrentProjectile;
  
    TimeSinceFired += deltaTime / 1000;
    
    if(GameStatus == "Running" && TimeSinceFired >= 1 / RateOfFire && (ProjectileNumber > Projectiles.length || ProjectileNumber == Infinity))
    {
        TimeSinceFired = 0;

        CurrentProjectile = new Sprite();
        CurrentProjectile.x = Origin.position.x;
        CurrentProjectile.y = Origin.position.y;
        CurrentProjectile.width = ProjectileWidth;
        CurrentProjectile.height = ProjectileLength;
        CurrentProjectile.Shape = ProjectileShape;
        CurrentProjectile.direction = ProjectileDirection - 90;
        CurrentProjectile.speed = ProjectileSpeed;
        CurrentProjectile.rotation = ProjectileDirection;
        CurrentProjectile.collider = "none";
        CurrentProjectile.outline = ProjectileOutline;

        if(ProjectileColorType == "Random" || ProjectileColorType == "random") CurrentProjectile.Color = color(random(255), random(255), random(255));

        else if(ProjectileColorType == "Rainbow" || ProjectileColorType == "rainbow") CurrentProjectile.Color = color(Red, Green, Blue);

        else CurrentProjectile.Color = ProjectileColor;
 
        CurrentProjectile.draw = function()
        {

            if(this.outline == 0) fill(this.Color);
            else
            {
                fill(0, 0);
                stroke(this.Color);
            }
            strokeWeight(this.outline);
            

            if(this.Shape == "Square")
            {
                rect(0, 0, this.width, this.height);
            }

            else if(this.Shape == "Circle")
            {
                ellipse(0, 0, this.width, this.height);
            }

        }
        
        Projectiles.push(CurrentProjectile);

    }
    
}
