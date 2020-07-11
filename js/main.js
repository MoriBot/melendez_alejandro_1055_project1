(() => { // shorthand function declaration (also called a fat arrow function)
  console.log('fired!');

  // select elements here
  // querySelectorAll is a one-to-many selection -> find EVERY element that matches the selector
  let theBadges = document.querySelectorAll("arrowSets"),
      // one to one connection -> one variable name means one element
      svgBadge = document.querySelector("svg"),
      mainHeading = document.querySelector("#mainHeading");

   //debugger; // pause your code execution here

  // functions go in the middle
  function logID() {
    console.log("clicked on a graphic - this one: ", this.id);
    this.classList.add("selected");
  }

  // event handling
  // theBadge.addEventListener("click", logID);
  arrowSets.forEach(arrows => arrows.addEventListener("click", logID));

  svgBadge.addEventListener("click", logID);
})();
