const ctx = document.getElementById("myCanvas").getContext("2d");
const canvas = document.getElementById("myCanvas");
let posValue = 0;
let Protag;
let Display;
let Scale;
let Rock = [];
let RockCount = 30;
let menuSelect = 0;
//0 is a title screen, 1 is navigating, 2 is fight screen, 3 is player menu
let screenSpace = 0;
let menuBuild = [];
let fightMenuBuild = [];
let frameCount = 0;
let bottomTextInput = "";
let fightTurn = 0;
let damageMult = 1;
let protagDefense = 1;

function init() {
  Scale = canvas.width / 20;
  Protag = new Player();
  Display = new ScreenMode();
  for (i = 0; i < RockCount; i++) {
    Rock[i] = new Stone(
      Scale * parseInt(random(1, canvas.width / Scale - 1)),
      Scale * parseInt(random(1, canvas.height / Scale - 1))
    );
  }
  for (i = 0; i < 3; i++) {
    menuBuild[i] = new SelectionTier(
      Scale * 15,
      canvas.height - Scale * (5.5 - [i] * 1.5)
    );
  }
  window.requestAnimationFrame(draw);
}

function draw() {
  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
  //looping code

  if(Protag.currentVital[0] < 0){
    death();
  }

  ctx.fillStyle = "black";
  ctx.fillText(bottomTextInput, Scale * 2.5, canvas.height - (Scale/2));

  if (screenSpace === 0) {
    bottomTextInput = "Welcome to Game, Press Z to begin"
  }
  if (screenSpace == 1) {
    Display.game();
    bottomTextInput = "Explore the field to encounter enemies"
  }
  if (screenSpace == 2) {
    for (i = 0; i < fightMenuBuild.length; i++) {
      fightMenuBuild[i].selected = false;
      fightMenuBuild[menuSelect].selected = true;
      fightMenuBuild[i].draw();
    }
    Display.fight();
  }
  if (screenSpace == 3) {
    for (i = 0; i < menuBuild.length; i++) {
      menuBuild[i].selected = false;
      menuBuild[menuSelect].selected = true;
      menuBuild[i].draw();
    }
    Display.menu();
  }
  ctx.fillStyle = "rgba(200, 200, 200, 0.2)";
  rect(0, 0, canvas.width, canvas.height);
  frameCount++;
  window.requestAnimationFrame(draw);
}

class Player {
  constructor() {
    this.position = [0, 0];
    this.exp = [0, 0];
    this.vitalMax = [100, 100, 5];
    this.currentVital = [100, 100];
    this.scale = Scale;
  }
  draw() {
    ctx.fillStyle = "black";
    rect(this.position[0], this.position[1], this.scale, this.scale);
  }
  motion(direction) {
    //directions are 0 = up 1 = left 2 = down 3 = right
    if (direction === 0) {
      this.position[1] += this.scale * -1;
      if (this.position[1] < 0) {
        this.position[1] = canvas.height - this.scale;
        regenField();
      }
      for (i = 0; i < RockCount; i++) {
        if (this.hitDetect(Rock[i])) {
          this.position[1] += this.scale;
        }
      }
    }
    if (direction == 1) {
      this.position[0] += this.scale * -1;
      if (this.position[0] < 0) {
        this.position[0] = canvas.width - this.scale;
        regenField();
      }
      for (i = 0; i < RockCount; i++) {
        if (this.hitDetect(Rock[i])) {
          this.position[0] += this.scale;
        }
      }
    }
    if (direction == 2) {
      this.position[1] += this.scale;
      if (this.position[1] > canvas.height - this.scale) {
        this.position[1] = 0;
        regenField();
      }
      for (i = 0; i < RockCount; i++) {
        if (this.hitDetect(Rock[i])) {
          this.position[1] += this.scale * -1;
        }
      }
    }
    if (direction == 3) {
      this.position[0] += this.scale;
      if (this.position[0] > canvas.width - this.scale) {
        this.position[0] = 0;
        regenField();
      }
      for (i = 0; i < RockCount; i++) {
        if (this.hitDetect(Rock[i])) {
          this.position[0] += this.scale * -1;
        }
      }
    }
  }
  hitDetect(target) {
    if (
      this.position[0] == target.position[0] &&
      this.position[1] == target.position[1]
    ) {
      return true;
    }
  }
  damageDetect(damage) {
    this.currentVital[0] += -1 * damage;
  }
}

class ScreenMode {
  game() {
    ctx.fillStyle = "black";
    Protag.draw();
    for (i = 0; i < RockCount; i++) {
      ctx.fillStyle = "grey";
      Rock[i].draw();
    }
  }
  fight() {
    ctx.fillStyle = "black";
    rect(Scale * 2.5, Scale * 2, Scale * 3, Scale * 3);
    fightMenu();
  }
  menu() {
    playerMenu();
  }
}

//makes the random obsticals on the field
class Stone {
  constructor(x, y) {
    this.position = [x, y];
    this.scale = Scale;
  }
  draw() {
    rect(this.position[0], this.position[1], this.scale, this.scale);
  }
}

//heals the player and haves a higher chance of fight
function campOut() {
  bottomTextInput = "Got a good nights rest"
  Protag.currentVital[0] += Protag.vitalMax[0] / 2;
  if (Protag.currentVital[0] > Protag.vitalMax[0]) {
    Protag.currentVital[0] = Protag.vitalMax[0];
  }
  Protag.currentVital[1] = Protag.vitalMax[1];
  fightturn = 1;
  protagDefense = 0.5;
  encounterChance(60);
}

//allows for single button to be used for multiple actions
function Affirm() {
  if (screenSpace == 3) {
    if (menuSelect == 0 && Protag.exp[1] >= 100) {
      levelUP();
    } else if (menuSelect == 1) {
      campOut();
    } else if (menuSelect == 2) {
      screenSpace = 1;
      menuSelect = 0;
      while (menuBuild.length > 3) {
        menuBuild.pop();
      }
    }
    if (Protag.exp[1] >= 100 && menuSelect == 3) {
      menuSelect = 0;
      Protag.exp[0] += 1;
      Protag.exp[1] += -100;
      Protag.vitalMax[0] += 10;
      Protag.currentVital[0] += 10;
      if (Protag.exp[1] < 100) {
        while (menuBuild.length > 3) {
          menuBuild.pop();
        }
      }
      bottomTextInput = "You grow stronger"
    }
    if (Protag.exp[1] >= 100 && menuSelect == 4) {
      menuSelect = 0;
      Protag.exp[0] += 1;
      Protag.exp[1] += -100;
      Protag.vitalMax[1] += 10;
      Protag.currentVital[1] += 10;
      if (Protag.exp[1] < 100) {
        while (menuBuild.length > 3) {
          menuBuild.pop();
        }
      }
      bottomTextInput = "You grow stronger"
    }
    if (Protag.exp[1] >= 100 && menuSelect == 5) {
      menuSelect = 0;
      Protag.exp[0] += 1;
      Protag.exp[1] += -100;
      Protag.vitalMax[2] += 5;
      if (Protag.exp[1] < 100) {
        while (menuBuild.length > 3) {
          menuBuild.pop();
        }
      }
      bottomTextInput = "You grow stronger"
    }
  } else if (screenSpace == 1) {
    screenSpace = 3;
  }

  if(screenSpace == 2){
    combatGO();
  }
}

//regenerates the field everytime you leave the bounds
function regenField() {
  for (i = 0; i < RockCount; i++) {
    Rock[i].position[0] = Scale * parseInt(random(1, canvas.width / Scale - 1));
    Rock[i].position[1] =
      Scale * parseInt(random(1, canvas.height / Scale - 1));
  }
}

//makes bottom of screen menu
function playerMenu() {
  ctx.fillStyle = "black";
  ctx.fillText("Level: " + Protag.exp[0], Scale * 2, canvas.height - Scale * 5.5);
  ctx.fillText(
    "Experience: " + Protag.exp[1],
    Scale * 2,
    canvas.height - Scale * 4.5
  );
  ctx.fillText(
    "Health: " + Protag.currentVital[0] + "/" + Protag.vitalMax[0],
    Scale * 2,
    canvas.height - Scale * 3.5
  );
  ctx.fillText(
    "Stamina: " + Protag.currentVital[1] + "/" + Protag.vitalMax[1],
    Scale * 2,
    canvas.height - Scale * 2.5
  );
  ctx.fillText(
    "Strength: " + Protag.vitalMax[2],
    Scale * 2,
    canvas.height - Scale * 1.5
  );
  menuBuild[0].text = "Level UP";
  menuBuild[1].text = "Camp";
  menuBuild[2].text = "Exit";
  ctx.fillStyle = "rgba(180, 180, 180, 1)";
  rect(0, canvas.height - Scale * 6, canvas.width, Scale * 6);
  Protag.draw();
  for (i = 0; i < RockCount; i++) {
    ctx.fillStyle = "grey";
    Rock[i].draw();
  }
}

//brings the levelup screen
function levelUP() {
  bottomTextInput = "Select what to improve"
  menuBuild[3] = new SelectionTier(Scale * 11, canvas.height - Scale * 5.5);
  menuBuild[4] = new SelectionTier(Scale * 11, canvas.height - Scale * 4);
  menuBuild[5] = new SelectionTier(Scale * 11, canvas.height - Scale * 2.5);

  menuBuild[3].text = "Health";
  menuBuild[4].text = "Stamina";
  menuBuild[5].text = "Strength";
}

//menu segments
class SelectionTier {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.text = "";
    this.size = Scale;
    this.selected = false;
  }
  draw() {
    ctx.fillStyle = "black";
    ctx.fillText(this.text, this.x + 2, this.y + this.size / 2);
    if (this.selected) {
      ctx.fillStyle = "red";
    } else {
      ctx.fillStyle = "rgba(0, 0, 200, 0)";
    }
    rect(this.x, this.y, this.size * 2, this.size);
  }
}

//makes a percent chance of encountering monster
function encounterChance(encounterValue) {
  let monsterChance = parseInt(random(1,100))
  if(monsterChance <= encounterValue){
    screenSpace = 2;
    randomMonster();
    bottomTextInput = backgroundMonster.constructor.name + " wants to fight"
  }
}

//menu for fight controls
function fightMenu(){
  if(backgroundMonster.Health > 0){
    ctx.fillStyle = "grey";
    rect(canvas.width - Scale * 8, Scale * 2,Scale * 2,Scale * 2);
    ctx.fillStyle = "black";
    ctx.fillText(backgroundMonster.Sound, 5 + canvas.width - Scale * 6, Scale * 2.1);

    if(fightTurn == 1){
      Protag.currentVital[0] += (-1 * backgroundMonster.Power/protagDefense)
      protagDefense = 1;
      fightTurn = 0;
    }

  }else{
    Protag.exp[1] += 20;
    screenSpace = 1
  }
  
  let protagHealthPer = Protag.currentVital[0]/Protag.vitalMax[0];
  if(protagHealthPer < 0){
    protagHealthPer = 0;
  }
  if(protagHealthPer > 1){
    protagHealthPer = 1;
  }
  let protagEndPer = Protag.currentVital[1]/Protag.vitalMax[1];
  if(protagEndPer < 0){
    protagEndPer = 0;
  }
  if(protagEndPer > 1){
    protagEndPer = 1;
  }

  for(i=0;i<4;i++){
    fightMenuBuild[i] = new SelectionTier(
      Scale * 15,
      canvas.height - Scale * (8 - [i] * 1.5)
    );
  }

  fightMenuBuild[0].text = "Attack"
  fightMenuBuild[1].text = "Strong Attack"
  fightMenuBuild[2].text = "Defend"
  fightMenuBuild[3].text = "Flee"

  //health bar
  ctx.fillStyle = "black";
  ctx.fillText("Health", Scale * 2.5, canvas.height - Scale * 8.1);
  ctx.fillStyle = "rgba(0, 255 , 0 ,1)";
  rect(Scale * 2, canvas.height - Scale * 8,(Scale * 4) * protagHealthPer,Scale)
  ctx.fillStyle = "rgba(255, 0, 0, 1)";
  rect(Scale * 2, canvas.height - Scale * 8, Scale * 4, Scale);

  //stamina bar
  ctx.fillStyle = "black";
  ctx.fillText("Stamina", Scale * 2.5, canvas.height - Scale * 6.1);
  ctx.fillStyle = "rgba(0, 255 , 0 ,1)";
  rect(Scale * 2, canvas.height - Scale * 6,(Scale * 4) * protagEndPer,Scale)
  ctx.fillStyle = "rgba(255, 0, 0, 1)";
  rect(Scale * 2, canvas.height - Scale * 6, Scale * 4, Scale);
  ctx.fillStyle = "rgba(180, 180, 180, 1)";

  rect(0, canvas.height - Scale * 9, canvas.width, Scale * 9);
}

//handles fight elements
function combatGO(){
  if(fightTurn === 0){
    if(menuSelect === 0){
      let hitChance = ((((Protag.vitalMax[1]-100)/10)/(Protag.vitalMax[2]/5))+1)*100
      if(hitChance >= parseInt(random(1,100))){
        if(Protag.currentVital[1]<=0){
          damageMult = 0;
          bottomTextInput = "You are too weak to fight"
        }else{
          damageMult = 1;
          Protag.currentVital[1] += -10
        }
        backgroundMonster.Health += (-1 * Protag.vitalMax[2])*damageMult
        fightTurn = 1;
        menuSelect = 0;
      }else{
        Protag.currentVital[1] += -10
        fightTurn = 1;
        bottomTextInput = "missed"
      }
    }
    if(menuSelect == 1){
      let hitChance = ((((Protag.vitalMax[1]-100)/10)/(Protag.vitalMax[2]/5))+1)*50
      if(hitChance >= parseInt(random(1,100))){
        if(Protag.currentVital[1]<=0){
          damageMult = 0;
          bottomTextInput = "You are too weak to fight"
        }else{
          damageMult = 2;
          Protag.currentVital[1] += -20
        }
        backgroundMonster.Health += (-1 * Protag.vitalMax[2])*damageMult
        fightTurn = 1;
        menuSelect = 0;
      }else{
        Protag.currentVital[1] += -20
        fightTurn = 1;
        bottomTextInput = "missed"
      }
    }
    if(menuSelect == 2){
      protagDefense = 2;
      fightTurn = 1;
    }
    if(menuSelect == 3){
      let randomChance = 80 - Protag.exp[0]
      if(randomChance < 0){
        randomChance = 0;
      }
      if(randomChance >= parseInt(random(1,100))){
        screenSpace = 1;
        menuSelect = 0;
      }else{
        bottomTextInput = "Failed to flee"
        fightTurn = 1;
      }
    }
  }
}

function death(){
  ctx.fillStyle = "black";
  rect(0,0,canvas.width,canvas.height);
  location.reload();
}

//returns random value within specified range
function random(min, max) {
  return Math.random() * (max - min) + min;
}

function rect(x, y, w, h) {
  ctx.beginPath();
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = "black";
  ctx.rect(x, y, w, h);
  ctx.stroke();
}

//controls
window.addEventListener("keyup", function (e) {
  //gamescreen navigation
  //directions are 0 = up 1 = left 2 = down 3 = right
  if (screenSpace == 1) {
    if (e.key == "ArrowUp") {
      Protag.motion(0);
      encounterChance(15);
    }
    if (e.key == "ArrowLeft") {
      Protag.motion(1);
      encounterChance(15);
    }
    if (e.key == "ArrowDown") {
      Protag.motion(2);
      encounterChance(15);
    }
    if (e.key == "ArrowRight") {
      Protag.motion(3);
      encounterChance(15);
    }
  }

  //menu navigation
  if (screenSpace == 3) {
    if (menuBuild.length > 3) {
      if (e.key == "ArrowDown") {
        if (menuSelect == menuBuild.length - 1) {
          menuSelect = 3;
        } else {
          menuSelect += 1;
        }
      }
      if (e.key == "ArrowUp") {
        if (menuSelect == 3) {
          menuSelect = menuBuild.length - 1;
        } else {
          menuSelect += -1;
        }
      }
    } else {
      if (e.key == "ArrowUp") {
        if (menuSelect === 0) {
          menuSelect = menuBuild.length - 1;
        } else {
          menuSelect += -1;
        }
      }
      if (e.key == "ArrowDown") {
        if (menuSelect == menuBuild.length - 1) {
          menuSelect = 0;
        } else {
          menuSelect += 1;
        }
      }
    }
  }

  //fight menu navigation
  if (screenSpace == 2) {
    if(fightTurn === 0){
      if (e.key == "ArrowUp") {
        if (menuSelect === 0) {
          menuSelect = fightMenuBuild.length - 1;
        } else {
          menuSelect += -1;
        }
      }
      if (e.key == "ArrowDown") {
        if (menuSelect == fightMenuBuild.length - 1) {
          menuSelect = 0;
        } else {
          menuSelect += 1;
        }
      }
    }
  }

  if (e.key == "z") {
    Affirm();

    if (screenSpace == 3 && menuBuild.length > 3) {
      menuSelect = 3;
    }
    //game start button
    if (screenSpace === 0) {
      screenSpace = 1;
    }
  }
});

init();