class Game {
  constructor() {
    this.leader=createElement("h2")
    this.leader1=createElement("h2")
    this.leader2=createElement("h2")
  }

  getState(){
    database.ref("gameState").on("value",function(data){
      gameState=data.val()
    })
  }
  updateState(value){
    database.ref("/").update({
      gameState:value
    })
  }
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount();
    car1=createSprite(width/2-150,height-100)
    car1.addImage(car1img)
    car1.scale=0.07;
    car2=createSprite(width/2+150,height-100)
    car2.addImage(car2img)
    car2.scale=0.07;
    cars=[car1,car2]
  }
  play(){
    form.hidden()
    Player.getPlayersInfo()
    this.leader.html("Leaderboard")
    this.leader.position(width/3-60,40)
    this.leader1.position(width/3-60,80)
    this.leader2.position(width/3-60,130)
    
    if(allPlayers!==undefined){
    background("cyan")
    image(trackimg,0,-height*5,width,height*6)
    this.showleader()
    var index=0
    for(var i in allPlayers)
    {
      index++;
      cars[index-1].position.x=allPlayers[i].positionX;
      cars[index-1].position.y=(height-allPlayers[i].positionY)
      if(index===player.index)
{
  camera.position.y=cars[index-1].position.y
}
      
    }
    if(keyIsDown(UP_ARROW)){
      player.positionY+=10;
      player.updateDistance()
    }
    if(keyIsDown(LEFT_ARROW) && player.positionX>width/3-50){
      player.positionX-=5;
      player.updateDistance()
    }
    if(keyIsDown(RIGHT_ARROW)&& player.positionX<width/2+260){
      player.positionX+=5;
      player.updateDistance()
    }
    drawSprites()
    }
  }

  showleader(){
    var player=Object.values(allPlayers)
    var leader1 =player[0].rank+"   "+player[0].name+"   "+player[0].score;
    var leader2 =player[1].rank+"   "+player[1].name+"   "+player[1].score;
    this.leader1.html(leader1)
    this.leader2.html(leader2)
  }
}
