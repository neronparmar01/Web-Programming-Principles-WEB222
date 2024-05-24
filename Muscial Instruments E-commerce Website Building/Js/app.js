/**
 * WEB222 – Assignment 04
 * 
 *      Name:       Neron Nelson Parmar
 *      Student ID: 171690217  
 *
 *	I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *	No part of this assignment has been copied manually or electronically from any other source 
 *  or distributed to other students.
**/


const { products, categories } = window;


let Guitars = [];
let Keyboard = [];
let Accessories= [];

for (let i = 0; i < products.length; i++) {
  products[i].categories.forEach(function (element) {
    if (element === "SNK-Guitar's Collection" && products[i].discontinued === false) {
      Guitars.push(products[i].description);
    } else if (element === "SNK-Keyboard's Collection" && products[i].discontinued === false) {
      Keyboard.push(products[i].description);
    } else if (element === "SNK-Accessories" && products[i].discontinued === false) {
      Accessories.push(products[i].description);
    }
  });
}


let menu = document.getElementById("menu");
for (let i = 0; i < categories.length; i++) {
  let newMenuItem = document.createElement("button");
  newMenuItem.textContent = categories[i].name;
  newMenuItem.id = categories[i].name;
  menu.appendChild(newMenuItem);
}


function descriptionPrinter(category) {
  
  let tableRows = document.getElementsByClassName("tbl-row");
 if (category === "SNK-Guitar's Collection") {
    for (let i = 0; i < Guitars.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(Guitars[i]);
      });
    }
  } else if (category === "SNK-Keyboard's Collection") {
    for (let i = 0; i < Keyboard.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(Keyboard[i]);
      });
    }
  } else if (category === "SNK-Accessories") {
    for (let i = 0; i < Accessories.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(Accessories[i]);
      });
    }
  }
}


function createCells(category) {
  
  var tbodyRef = document.getElementById("categoryProducts");
  var newRow, newCell, newText;

  
  for (let i = 0; i < products.length; i++) {
    
    document.createElement("tr");

    
    products[i].categories.forEach(function (element) {
      if (element === category && products[i].discontinued === false) {
        newRow = tbodyRef.insertRow();
        newRow.className = "tbl-row";

        
        newCell = newRow.insertCell();
        
        newText = document.createTextNode(products[i].title);
        newCell.appendChild(newText);

        
        newCell = newRow.insertCell();
        newCell.id = i;
        
        newText = document.createTextNode(products[i].description);
        newCell.appendChild(newText);

        
        newCell = newRow.insertCell();
        
        newText = document.createTextNode(
          (products[i].price / 100).toLocaleString("en-CA", { currency: "CAD", style: "currency" })
        ); 
        newCell.appendChild(newText);
      }
    });
  }
}



function showProductList(category) {
  
  document.getElementById("categoryProducts").innerHTML = "";

 
  for (let k = 0; k < categories.length; k++) {
    if (categories[k].name === category) {
      category = categories[k].id;
    }
  }

 
  createCells(category);
  descriptionPrinter(category);
}


let menuArr = document.querySelector("#menu").querySelectorAll("button");
for (let i = 0; i < menuArr.length; i++) {
  menuArr[i].addEventListener("click", function () {
    document.getElementById("selected-category").innerHTML = menuArr[i].textContent;
    showProductList(menuArr[i].textContent);
  });
}


