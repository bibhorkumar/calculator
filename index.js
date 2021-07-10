var screen=document.getElementById("screen");
var buttons=document.querySelectorAll("button");
var screenValue="";

for(item of buttons){
    item.addEventListener("click", function(){

        var buttonText=this.innerHTML;
        
        calculation(buttonText);
        
    });
}

document.addEventListener("keydown", function(event){

    keyPressed=event.key;

    if(keyPressed=="Backspace"){
        keyPressed="C";
    }
    if(keyPressed=="Enter"){
        keyPressed="=";
    }
    console.log(keyPressed);
    calculation(keyPressed);
    

});

function calculation(buttonValue){

    if(buttonValue=="X"){
        buttonValue='*';
        screenValue +=buttonValue;
        screen.value=screenValue;
    }
    else if(buttonValue=="C"){
        buttonValue="";
        screenValue =buttonValue;
        screen.value=screenValue;
    }
    else if(buttonValue=="="){
        screen.value=eval(screenValue);
    }
    else{
        screenValue +=buttonValue;
        screen.value=screenValue;
    }

}

