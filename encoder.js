const latinToTurkicMap = {
  // special characters
  "'O": "𐰇",
  "'G": "𐰍",
  HS: "𐱁",
  HC: "𐰱",
  H: "𐰴",
  X: "𐰴",

  // letters
  A: "𐰀",
  B: "𐰌",
  D: "𐰓",
  E: "𐰅",
  F: "𐰉",
  G: "𐰏",
  I: "𐰄",
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
  Y: "𐰘",
  V: "𐰋",
  Z: "𐰕",
};

function convert(inputString) {
  inputString = inputString
    .toUpperCase()
    .split("")
    .reverse()
    .join("");

  const pattern = new RegExp(Object.keys(latinToTurkicMap).join("|"), "g");

  const result = inputString.replace(
    pattern,
    (match) => latinToTurkicMap[match] || match
  );

  return result.replace(/ /g, " : ");
}