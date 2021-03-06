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

// function increaseRankBy(n) {
//   let ranked = document.querySelectorAll(".ranked-list");
//   let newRanked = ranked;
//   for (let i = 0; i <= ranked.length; i++) {
//     ranked.children[i].innerHTML = parseInt(ranked[i].innerHTML) + n;
//   }
// }

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('.ranked-list');

  // two for loops
  for (let i = 0; i < ranked.length; i++) {
    let workOnThis = ranked[i].children;

    for (let iTwo = 0; iTwo < workOnThis.length; iTwo++) {
      workOnThis[iTwo].innerHTML = parseInt(workOnThis[iTwo].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let pull = document.getElementById("grand-node");
  
  while (pull.childElementCount > 0) {
    pull = pull.children[0];
  }
  
  return pull;
}


