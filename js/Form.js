class Form{
    constructor(){
        
    }
    display(){
        var title = createElement("h2")
        title.html("CAR RACING v1")
        title.position(460,20)
    
        var input = createInput("NAME")
        input.position (360,200)

        var button = createButton("NEXT")
        button.position(650,300)

        button.mousePressed(function(){
            var NAME = input.value()
            var title = createElement("h3")
        title.html("HELLO " + NAME)
        title.position(400,300)
        
        })

        
    }
}