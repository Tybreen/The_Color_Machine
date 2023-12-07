//# Miscellaneous but important functions:

function SetGameStatus(status) {
  if (status == "Running") {
    Red = 255;
    Green = 0;
    Blue = 0;

    GameStatus = "Running";
    StartText = "Stop";
    InstructionText = false;
  } else if (status == "Idle") {
    GameStatus = "Idle";
    StartText = "Reset";
  } else if (status == "Stopped") {
    GameStatus = "Stopped";
    StartText = "Start";
  }
}

/*
function deltaTimeProjectileSpeedChange()
{
    for(i in Projectiles)
    {
        i.setSpeed(i.getSpeed() * (deltaTime * 60));
        if(Projectiles[0]); //console.log(Projectiles[0].getSpeed());
    }
}
*/

function ChangeOriginPosition() {
  ChangeOriginXPosition();
  ChangeOriginYPosition();
}

function ChangeOriginXPosition() {
  OriginX_Pix = (OriginX_Per / 100) * width;
  Origin.position.x = OriginX_Pix;
}

function ChangeOriginYPosition() {
  OriginY_Pix = (OriginY_Per / 100) * height;
  Origin.position.y = OriginY_Pix;
}



function OriginSpinSpeedProcessing() {
  ProjectileDirection += Number(ProjectileSpinSpeed) / 10;

  if (ProjectileDirection >= 360) ProjectileDirection -= 360;
  else if (ProjectileDirection <= 0) ProjectileDirection += 360;
}



function ScreenSquareManager() {
  if (ScreenSquare == "True") {
    if (offsetX_SS == 0 && offsetY_SS == 0) {
      if (width < height) offsetY_SS = (height - width) / 2;
      else offsetX_SS = (width - height) / 2;
    }

    noStroke();
    fill(255, 0, 0, 30);

    if (offsetX_SS != 0) {
      rect(0, 0, offsetX_SS, height);
      rect(width - offsetX_SS, 0, width, height);
    } else {
      rect(0, 0, width, offsetY_SS);
      rect(0, height - offsetY_SS, width, height);
    }
  }

  if (ScreenSquare == "False" && (offsetX_SS != 0 || offsetY_SS != 0)) {
    offsetX_SS = 0;
    offsetY_SS = 0;
  }
}


function Bounce() {
  ScreenSquareManager();

  for (var i = 0; i < Projectiles.length; i++) {
    var s = Projectiles[i];

    if (s.position.x < offsetX_SS) {
      s.position.x = offsetX_SS;
      s.velocity.x = abs(s.velocity.x);
      Projectiles[i].rotation = s.direction - 90;
    }

    if (s.position.x > width - offsetX_SS) {
      s.position.x = width - offsetX_SS;
      s.velocity.x = -abs(s.velocity.x);
      Projectiles[i].rotation = s.direction - 90;
    }

    if (s.position.y < offsetY_SS) {
      s.position.y = offsetY_SS;
      s.velocity.y = abs(s.velocity.y);
      Projectiles[i].rotation = s.direction - 90;
    }

    if (s.position.y > height - offsetY_SS) {
      s.position.y = height - offsetY_SS;
      s.velocity.y = -abs(s.velocity.y);
      Projectiles[i].rotation = s.direction - 90;
    }
  }
}


function Loop() {
  ScreenSquareManager();

  for (var i = 0; i < Projectiles.length; i++) {
    var s = Projectiles[i];

    if (s.position.x < offsetX_SS) {
      Projectiles[i].position.x = width - offsetX_SS;
    }

    if (s.position.x > width - offsetX_SS) {
      Projectiles[i].position.x = offsetX_SS;
    }

    if (s.position.y < offsetY_SS) {
      Projectiles[i].position.y = height - offsetY_SS;
    }

    if (s.position.y > height - offsetY_SS) {
      Projectiles[i].position.y = offsetY_SS;
    }
  }
}


function Cleaner() {
  ScreenSquareManager();

  for (var i = 0; i < Projectiles.length; i++) {
    var Item = Projectiles[i];

    if (
      Item.position.x <= offsetX_SS - ProjectileLength / 2 ||
      Item.position.x >= width - offsetX_SS + ProjectileLength / 2 ||
      Item.position.y <= offsetY_SS - ProjectileLength / 2 ||
      Item.position.y >= height - offsetY_SS + ProjectileLength / 2
    ) {
      Item.remove();
      i--;
    }
  }
}


function ChangeMouseStatus() {
  if (mouseMode == "HAND") cursor(HAND);
  else if (mouseMode == "ARROW") cursor(ARROW);
}


function ChangeMouseStatusForButton(sprite) {
  if (sprite.mouse.hovering()) mouseMode = "HAND";
  else if (sprite.mouse.hovered()) mouseMode = "ARROW";
}


function ChangeMouseStatusForButtons(group) {
  for (var i = 0; i < group.length; i++) {
    ChangeMouseStatusForButton(group[i]);
  }
}
