const latinToTurkicMap = {
  A: "𐰀",
  B: "𐰌",
  D: "𐰓",
  E: "𐰅",
  F: "𐰉",
  G: "𐰏",
  H: "𐰴",
  I: "𐰃",
  J: "𐰲",
  K: "𐰚",
  L: "𐰠",
  M: "𐰢",
  N: "𐰤",
  O: "𐰀",
  P: "𐰯",
  Q: "𐰸",
  R: "𐰼",
  S: "𐰾",
  T: "𐱃",
  U: "𐰆",
  "O'": "𐰇",
  "G'": "𐰍",
  Y: "𐰘",
  V: "𐰋",
  Z: "𐰕",
  Sh: "𐱁",
  Ch: "𐰱",
};

const fromTextArea = document.getElementById("fromText");
const toTextArea = document.getElementById("toText");
const convertButton = document.getElementById("convertButton");

convertButton.addEventListener("click", function () {
  toTextArea.value = convertToTurkicScript(fromTextArea.value);
});

function convertToTurkicScript(latinText) {
  latinText = latinText.toUpperCase();

  const pattern = new RegExp(Object.keys(latinToTurkicMap).join("|"), "g");

  // Use a callback function to handle the replacement
  const result = latinText.replace(
    pattern,
    (match) => latinToTurkicMap[match] || match
  );

  return result;
}
