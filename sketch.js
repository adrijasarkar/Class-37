var database
var game , form
var player
var playerCount,gameState = 0

function setup(){
createCanvas (400,400)
//linking database
database = firebase.database()
form = new Form ()
form.display()

}