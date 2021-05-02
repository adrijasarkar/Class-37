class Game{
    constructor(){

    }
      //reading player count from database
      getState(){
        var referance = database.ref("gameState")
        referance.on("value",(data)=>{
        gameState=data.val()
        })
    }
    //writing(updating) playerCount to database
    update(state){
        database.ref("/").update({gameState:state})
    }
    start(){
        if(gameState===0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }
    play(){
        text("gameStart",200,200)
    }
}