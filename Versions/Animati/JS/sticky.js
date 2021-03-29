/* Table of Contents
********************

1. Regulate sticky header behavior  

*/


/* Regulate sticky header behavior */
window.onscroll = function() {myFunction()};

const mediaQuery = window.matchMedia('(min-width:1601px) and (max-width:2000px)')
const mediaQuery2500 = window.matchMedia('(min-width:2001px) and (max-width:2500px)')
const mediaQuery3125 = window.matchMedia('(min-width:2501px) and (max-width:3125px)')
const mediaQuery3850 = window.matchMedia('(min-width:3126px)')
var header = document.getElementById("home_menusticky");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 50) {
    header.classList.add("home_sticky");
  } else {
    header.classList.remove("home_sticky");
  } 
}


if (mediaQuery.matches) {
  function myFunction() {
    if (window.pageYOffset >= 62) {
      header.classList.add("home_sticky");
    } else {
      header.classList.remove("home_sticky");
    } 
  }
}


if (mediaQuery2500.matches) {
  function myFunction() {
    if (window.pageYOffset >= 77) {
      header.classList.add("home_sticky");
    } else {
      header.classList.remove("home_sticky");
    } 
  }
}


if (mediaQuery3125.matches) {
  function myFunction() {
    if (window.pageYOffset >= 96) {
      header.classList.add("home_sticky");
    } else {
      header.classList.remove("home_sticky");
    } 
  }
}


if (mediaQuery3850.matches) {
  function myFunction() {
    if (window.pageYOffset >= 120) {
      header.classList.add("home_sticky");
    } else {
      header.classList.remove("home_sticky");
    } 
  }
}