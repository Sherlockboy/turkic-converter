const symbolsMap = {
  "‘": "'",
  "’": "'",
  "‘": "'",
  "´": "'",
  '"': "»",
  '"': "«",
  ".": "٠",
  ",": "،",
  ";": "؛",
  "?": "؟",
  "(": "[",
  ")": "]",
};

const lettersMap = {
  "O'": "𐰇",
  "G'": "𐰍",
  SH: "𐱁",
  CH: "𐰱",
  A: "𐰀",
  B: "𐰌",
  D: "𐰓",
  E: "𐰅",
  F: "𐰉",
  G: "𐰏",
  H: "𐰴",
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
  V: "𐰋",
  X: "𐰴",
  Y: "𐰖",
  Z: "𐰕",
};

function convert(inputString) {
  const symbolsPattern = new RegExp(
    Object.keys(symbolsMap)
      .map((key) => key.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
      .join("|"),
    "g"
  );

  const lettersPattern = new RegExp(Object.keys(lettersMap).join("|"), "g");

  return inputString
    .toUpperCase()
    .split(" ")
    .map((word) =>
      word.replace(symbolsPattern, (match) => symbolsMap[match] || match)
    )
    .map((word) =>
      word.replace(lettersPattern, (match) => lettersMap[match] || match)
    )
    .join(" : ");
}
