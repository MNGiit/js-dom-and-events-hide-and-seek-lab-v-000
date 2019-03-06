// querySelector() takes one argument, a string of selectors, and returns the first element
// that matches these selectors
function getFirstSelector(selector) {
  return document.querySelector(selector);
}


// pulls a .target out of #nested
// # is used for IDs in selectors
// . is used for class in selectors
function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let ranked = document.querySelector(".ranked-list");
  for (let i = 0; i <= ranked.length; i++) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n;
  }
}

function deepestChild() {
  let pull = document.getElementById("grand-node").lastChild;
  console.log(pull);
  debugger;
  return pull;
}

