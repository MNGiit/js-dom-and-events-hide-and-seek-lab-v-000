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
  let pull = document.getElementById("grand-node");
  
  while (pull.childElementCount > 0) {
    pull = pull.children[0];
  }
  
  return pull;
}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }