var testInput = document.getElementById("customText");
// GET ALL INPUT FIELDS
var allFields = document.querySelectorAll('input[name="inputFields"]');

// ADD EVENT LISTENER ON CUSTOM TEXT
testInput.addEventListener("keyup", modifyText);

// CHANGE THE VALUE OF ALL INPUT VALUES
function modifyText() {
  allFields.forEach(i => {
    i.value = testInput.value;
  });
}

// CHANGE THE FONTSIZE OF TEXT WHEN PRE-DEFINED FONTSIZE IS SELECTED
var testFontSize = document.querySelector("#fontSize");

testFontSize.addEventListener("change", modifyFontSize);

function modifyFontSize() {
  let fSize = testFontSize.value.toString();
  allFields.forEach(i => {
    i.style.fontSize = `${fSize}px`;
  });
}

// CHANGE THE PAGE MODE
var black = document.querySelector("#black");
black.addEventListener("click", function() {
  document.body.style.background = "black";
});

var white = document.querySelector("#white");
white.addEventListener("click", function() {
  document.body.style.background = "white";
});

// TOGGLE GRID AND LIST
let ischange = false;
var glbtn = document.querySelector(".glbtn");

function changeToGrid() {
  ischange = !ischange;
  if (ischange) {
    var gridContainer = document.querySelector("#fontCardsContainer");
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = `repeat(1,1fr)`;
    document
      .querySelectorAll(".fontCardName")
      .forEach(i => (i.style.width = "180vh"));
    document.querySelectorAll("#fontCardsContainer input").forEach(i => {
      i.style.width = "150vh";
    });
  }

  if (!ischange) window.location.reload();
}

glbtn.addEventListener("click", changeToGrid);

// RESET EVERYTHING
var btn = document.querySelector("#resetMode");
btn.addEventListener("click", function() {
  window.location.reload();
});