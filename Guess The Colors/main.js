function randomColor() {
    return Math.floor(Math.random() * (256 - 1)) + 1;
}
function randomDiv() {
    return Math.floor(Math.random() * (6 - 1)) + 1;
}
coinQuantity = 0;
var redNumber = randomColor();
var greenNumber = randomColor();
var blueNumber = randomColor();
document.getElementById("colorText").innerHTML = (`RGB (${redNumber}, ${greenNumber}, ${blueNumber})`)
correctDiv = randomDiv();
switch(correctDiv){
    case 1:
        document.getElementById("colorOne").style.backgroundColor = (`rgb(${redNumber}, ${greenNumber}, ${blueNumber})`);
        document.getElementById("colorTwo").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorThree").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorFour").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorFive").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`); 
    break;
    case 2:
        document.getElementById("colorOne").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorTwo").style.backgroundColor = (`rgb(${redNumber}, ${greenNumber}, ${blueNumber})`);
        document.getElementById("colorThree").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorFour").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorFive").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`); 
    break;
    case 3:
        document.getElementById("colorOne").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorTwo").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorThree").style.backgroundColor = (`rgb(${redNumber}, ${greenNumber}, ${blueNumber})`);
        document.getElementById("colorFour").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorFive").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`); 
    break;
    case 4:
        document.getElementById("colorOne").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorTwo").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorThree").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorFour").style.backgroundColor = (`rgb(${redNumber}, ${greenNumber}, ${blueNumber})`);
        document.getElementById("colorFive").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`); 
    break;
    case 5:
        document.getElementById("colorOne").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorTwo").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorThree").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorFour").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
        document.getElementById("colorFive").style.backgroundColor = (`rgb(${redNumber}, ${greenNumber}, ${blueNumber})`); 
       break;
}
var repeat = () => {
    var redNumber = randomColor();
    var greenNumber = randomColor();
    var blueNumber = randomColor();
    document.getElementById("colorText").innerHTML = (`RGB (${redNumber}, ${greenNumber}, ${blueNumber})`)
    correctDiv = randomDiv();
    switch(correctDiv){
        case 1:
            document.getElementById("colorOne").style.backgroundColor = (`rgb(${redNumber}, ${greenNumber}, ${blueNumber})`);
            document.getElementById("colorTwo").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorThree").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorFour").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorFive").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`); 
        break;
        case 2:
            document.getElementById("colorOne").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorTwo").style.backgroundColor = (`rgb(${redNumber}, ${greenNumber}, ${blueNumber})`);
            document.getElementById("colorThree").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorFour").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorFive").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`); 
        break;
        case 3:
            document.getElementById("colorOne").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorTwo").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorThree").style.backgroundColor = (`rgb(${redNumber}, ${greenNumber}, ${blueNumber})`);
            document.getElementById("colorFour").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorFive").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`); 
        break;
        case 4:
            document.getElementById("colorOne").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorTwo").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorThree").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorFour").style.backgroundColor = (`rgb(${redNumber}, ${greenNumber}, ${blueNumber})`);
            document.getElementById("colorFive").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`); 
        break;
        case 5:
            document.getElementById("colorOne").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorTwo").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorThree").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorFour").style.backgroundColor = (`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);
            document.getElementById("colorFive").style.backgroundColor = (`rgb(${redNumber}, ${greenNumber}, ${blueNumber})`); 
        break;
    }
}

var colorClicked = (divID) => {
    if(correctDiv == divID){
        coinQuantity += 3;
        document.getElementById("coinCounter").innerHTML = (coinQuantity);
        repeat();
    } else {
        coinQuantity -= 2;
        document.getElementById("coinCounter").innerHTML = (coinQuantity);
    }
}
