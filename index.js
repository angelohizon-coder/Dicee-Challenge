function numberGenerator() {
  var number = Math.ceil(Math.random() * 6);
  return number;
}

function diceGenerator(classSelector) {
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    number = numberGenerator();
    if(number === 1) {
      document.querySelector(classSelector).setAttribute("src", "images/dice1.png");
    }
    else if(number === 2) {
      document.querySelector(classSelector).setAttribute("src", "images/dice2.png");
    }
    else if(number === 3) {
      document.querySelector(classSelector).setAttribute("src", "images/dice3.png");
    }
    else if(number === 4) {
      document.querySelector(classSelector).setAttribute("src", "images/dice4.png");
    }
    else if(number === 5) {
      document.querySelector(classSelector).setAttribute("src", "images/dice5.png");
    }
    else{
      document.querySelector(classSelector).setAttribute("src", "images/dice6.png");
    }
  }

  return number;
}

function numberComparer(imageOneNumber, imageTwoNumber) {
  if(imageOneNumber > imageTwoNumber) {
    document.querySelector(".imgLeft").setAttribute("src", "images/philippines.png");
    document.querySelector("h1").textContent = 'Player 1 Wins';
  }
  else if(imageOneNumber < imageTwoNumber) {
    document.querySelector(".imgRight").setAttribute("src", "images/philippines.png");
    document.querySelector("h1").textContent = 'Player 2 Wins';
  }
  else {
    document.querySelector("h1").textContent = 'Draw';
  }
}

var imageOneNumber = diceGenerator(".img1");
var imageTwoNumber = diceGenerator(".img2");

numberComparer(imageOneNumber, imageTwoNumber);
