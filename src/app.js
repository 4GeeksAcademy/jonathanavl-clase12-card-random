/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numcard = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let randomnum = Math.floor(Math.random() * numcard.length);
  let randomCard = numcard[randomnum];
  document.getElementById("card").innerText = randomCard;

  let palo = ["♦", "♥", "♠", "♣"];
  let randompalo = Math.floor(Math.random() * palo.length);
  let randomspalos = palo[randompalo];
  document.getElementById("palos").innerText = randomspalos;
  document.getElementById("palos2").innerText = randomspalos;

  if (randomspalos === "♦" || randomspalos === "♥") {
    document.getElementById("palos").classList.add("red");
    document.getElementById("palos2").classList.add("red");
  } else {
    document.getElementById("palos").classList.add("black");
    document.getElementById("palos2").classList.add("black");
  }
};
