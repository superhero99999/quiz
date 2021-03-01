class Quiz {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      question = new Question()
      question.display();
    }

  
  }

  play(){
  question.hide();
  background(rgb(198,135,103));
    
    Player.getPlayerInfo();
    fill(0)
    textSize(30)
   text("result of the quiz",)
   text("------------------------------",320,650)
    if(allPlayers !== undefined){
      debugger
      
      var display_answer=230
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);

      for(var plr in allPlayers){
        debugger
        var correctanswer="4"
      
       
        if (correctanswer === allPlayers[plr].answer){
          stroke(10);
          fill("green");
        }
        else{
          fill("red");

        }

        display_answer+=30;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].answer, 250,display_answer)
      }

    }

  }
}