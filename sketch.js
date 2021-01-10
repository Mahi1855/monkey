var bananaimg,bananaGroup,obstacleGroup,obstacleimg
var backgroundimg,scene,ground,player,player_running
var score,groundimg



function preload(){
backgroundimg = loadImage("jungle.png")  
player_running = loadAnimation("Monkey_01","Monkey_02","Monkey_03","Monkey_04","Monkey_05","Monkey_06","Monkey_07","Monkey_08","Monkey_09","Monkey_10") 
  
  
bananaimg = loadImage("banana.png")  
obstacleimg = loadImage("stone.png")
}

  function setup() {
  createCanvas(400, 400);
scene = createSprite(200,200)
scene.addImage("imi",backgroundimg)
}

function draw() {
  background(220);
}