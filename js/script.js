// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

const randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber)

function enterClicked() {
  // input
  const guess = parseInt(document.getElementById("guess").value)

  // output
  if (guess == randomNumber) {
    document.getElementById("user-info").innerHTML =
      "Correct"
  } 
  
  if (guess != randomNumber) {
    document.getElementById("user-info").innerHTML =
      "Incorrect"
  }
}
