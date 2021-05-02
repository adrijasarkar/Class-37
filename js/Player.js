class Player {
    constructor(){
        this.index=0
        this.name=null
        this.distance=0

    }
    //reading player count from database
    getCount(){
        var referance = database.ref("playerCount")
        referance.on("value",(data)=>{
        playerCount=data.val()
        })
    }
    //writing(updating) playerCount to database
    updateCount(count){
        database.ref("/").update({playerCount:count})
    }
}