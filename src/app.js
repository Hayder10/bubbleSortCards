/* eslint-disable */
import "bootstrap";
import "./style.css";

/* Numbers and Suits of the Deck */
const suits = ["spade", "heart", "diamond", "clover"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

/* Main Function */
function generateCardArray(number) {
  let cardArray = [];
  for (let i = 0; i < number; i++) {
    cardArray.push(cardPick());
  }
  return cardArray;
}
/* Random Card picker */
function cardPick() {
  var numberSuit = Math.floor(Math.random() * 4);
  var numberNum = Math.floor(Math.random() * 13);
  var result = [];
  result.push(suits[numberSuit]);
  result.push(numbers[numberNum]);
  return result;
}
/* BubbleSort */
function bubbleSortCards(array) {
  /* Special Characters Number Conversion */
  for (var p of array) {
    if (p[1] === "J") {
      p[1] = 11;
    } else if (p[1] === "Q") {
      p[1] = 12;
    } else if (p[1] === "K") {
      p[1] = 13;
    }
    p[1] = parseInt(p[1]);
  }
  /* Bubble Sort Algorithm */
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j][1] > array[j + 1][1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      renderCardArrayBubble(array);
    }
  }
  console.log(array);
  console.log(10 > 9);
  /* Return to Special Characters */
  return array;
}

/* Rendering Cards Test */

function renderCardArray(array) {
  var cardID = 0;
  for (let card of array) {
    /* Unique DIV creation for card body*/
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("id", "div" + cardID);
    cardDiv.setAttribute("class", "cardbody");
    /* Card div element generation */
    const cardUpperIcon = document.createElement("div");
    cardUpperIcon.setAttribute("id", "upperIcon");

    const cardNumber = document.createElement("div");
    cardNumber.setAttribute("id", "number");

    const cardLowerIcon = document.createElement("div");
    cardLowerIcon.setAttribute("id", "lowerIcon");

    if (card[0] == "heart") {
      cardUpperIcon.style.color = "red";
      cardNumber.style.color = "red";
      cardLowerIcon.style.color = "red";
      cardUpperIcon.innerHTML = "♥";
      cardLowerIcon.innerHTML = "♥";
      cardNumber.innerHTML = card[1];
    } else if (card[0] == "diamond") {
      cardUpperIcon.style.color = "red";
      cardNumber.style.color = "red";
      cardLowerIcon.style.color = "red";
      cardUpperIcon.innerHTML = "♦";
      cardLowerIcon.innerHTML = "♦";
      cardNumber.innerHTML = card[1];
    } else if (card[0] == "spade") {
      cardUpperIcon.innerHTML = "♠";
      cardLowerIcon.innerHTML = "♠";
      cardNumber.innerHTML = card[1];
    } else {
      cardUpperIcon.innerHTML = "♣";
      cardLowerIcon.innerHTML = "♣";
      cardNumber.innerHTML = card[1];
    }

    /* Card Pushing into HTML */
    const cardDisplay = document.getElementById("cardDisplay");
    cardDisplay.appendChild(cardDiv);
    cardDiv.appendChild(cardUpperIcon);
    cardDiv.appendChild(cardNumber);
    cardDiv.appendChild(cardLowerIcon);

    cardID++;
  }
}

function renderCardArrayBubble(array) {
  var cardID = 0;
  let bubbleDiv = document.createElement("div");
  bubbleDiv.style.display = "flex";
  bubbleDiv.style.justifyContent = "space-evenly";
  document.body.appendChild(bubbleDiv);
  for (var p of array) {
    if (p[1] === 11) {
      p[1] = "J";
    } else if (p[1] === 12) {
      p[1] = "Q";
    } else if (p[1] === 13) {
      p[1] = "K";
    }
    p[1] = p[1].toString();
  }
  for (let card of array) {
    /* Unique DIV creation for card body*/
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("id", "div" + cardID);
    cardDiv.setAttribute("class", "cardbody");
    /* Card div element generation */
    const cardUpperIcon = document.createElement("div");
    cardUpperIcon.setAttribute("id", "upperIcon");

    const cardNumber = document.createElement("div");
    cardNumber.setAttribute("id", "number");

    const cardLowerIcon = document.createElement("div");
    cardLowerIcon.setAttribute("id", "lowerIcon");
    /* Return of Special Characters */
    if (card[0] == "heart") {
      cardUpperIcon.style.color = "red";
      cardNumber.style.color = "red";
      cardLowerIcon.style.color = "red";
      cardUpperIcon.innerHTML = "♥";
      cardLowerIcon.innerHTML = "♥";
      cardNumber.innerHTML = card[1];
    } else if (card[0] == "diamond") {
      cardUpperIcon.style.color = "red";
      cardNumber.style.color = "red";
      cardLowerIcon.style.color = "red";
      cardUpperIcon.innerHTML = "♦";
      cardLowerIcon.innerHTML = "♦";
      cardNumber.innerHTML = card[1];
    } else if (card[0] == "spade") {
      cardUpperIcon.innerHTML = "♠";
      cardLowerIcon.innerHTML = "♠";
      cardNumber.innerHTML = card[1];
    } else {
      cardUpperIcon.innerHTML = "♣";
      cardLowerIcon.innerHTML = "♣";
      cardNumber.innerHTML = card[1];
    }

    /* Card Pushing into HTML */
    cardDiv.appendChild(cardUpperIcon);
    cardDiv.appendChild(cardNumber);
    cardDiv.appendChild(cardLowerIcon);
    bubbleDiv.appendChild(cardDiv);
    cardID++;
  }
}

let cardArray = generateCardArray(5);
renderCardArray(cardArray);
bubbleSortCards(cardArray);
