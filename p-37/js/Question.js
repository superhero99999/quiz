class Question {
  constructor() {
    this.input=createInput("name")
    this.input2=createInput("enter option")

    this.button = createButton('Submit');
    this.question= createElement('h3');
    this.option1= createElement('h4');
    this.option2= createElement('h5');
    this.option3= createElement('h6');
    this.option4= createElement('h7');
    this.reset=createButton("reset")
  }

  hide(){
    this.input.hide()
    this.button.hide()
    this.input2.hide()
  }
  display(){
    var title = createElement('h2')
    title.html("My quiz game");
    title.position(displayWidth/2-50,0);
    this.question.html("qustion:what is the answer when one is added to the same number?")
    this.question.position(150,80)

    this.option1.html("optionA:11 ")
    this.option1.position(150,100)

    this.option2.html("optionB:1 ")
    this.option2.position(150,120 )
    this.option3.html("optionC:00 ")
    this.option3.position(150,140)

    this.option4.html("optionD:02 ")
    this.option4.position(150,180)

    this.input.position(150,230);
    this.button.position(290,300);
    this.input2.position(350,230)
    this.reset.position(displayWidth-100,10);

    this.button.mousePressed(()=>{
      this.input.hide();
      this. button.hide();
this.input2.hide()
      player.name = this.input.value();
      player.answer=this.input2.value()
      playerCount+=1;
      player.index=playerCount
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-70,displayHeight/2)
    });
   this.reset.mousePressed(()=>{
     player.updateCount(0)
     game.update(0)
    // player.update()
     //Player.updatecaratend(player.rank)
  })
}
}