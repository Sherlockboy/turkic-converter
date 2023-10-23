const latinToTurkicMap = {
  // special characters
  "'O": "𐰇",
  "‘O": "𐰇",
  "’O": "𐰇",
  "´O": "𐰇",
  "'G": "𐰍",
  "‘G": "𐰍",
  "’G": "𐰍",
  "´G": "𐰍",
  HS: "𐱁",
  HC: "𐰱",
  H: "𐰴",
  X: "𐰴",
  ")": "(",
  "(": ")",

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

const lineEndingChars = new Set([".", "?", "!", "...", ":", ";"]);

function moveFirstCharToEnd(str) {
  firstChar = str.charAt(0);
  
  if (str && str.length > 0 && lineEndingChars.has(str.charAt(0))) {
    // If the first character matches one of the special characters, remove it from the start
    str = str.slice(1);

    // Add the matched character at the end
    str += firstChar;
  }

  return str;
}

function convert(inputString) {
  const pattern = new RegExp(
    // Load all the keys in the map into a regular expression
    Object.keys(latinToTurkicMap)
      // Escape special characters
      .map((key) => key.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"))
      // Join the keys with a pipe
      .join("|"),
    "g"
  );

  return inputString
    .toUpperCase()
    .split(" ")
    .reverse()
    .map((word) =>
      word
        .split("")
        .reverse()
        .join("")
        .replace(pattern, (match) => latinToTurkicMap[match] || match)
    )
    .join(" : ")
    .split("\n")
    .map((line) => moveFirstCharToEnd(line))
    .reverse()
    .join("\n");
}
