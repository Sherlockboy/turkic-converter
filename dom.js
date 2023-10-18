const fromTextArea = document.getElementById("fromText");
const toTextArea = document.getElementById("toText");
const convertButton = document.getElementById("convertButton");

convertButton.addEventListener("click", function () {
  toTextArea.value = convert(fromTextArea.value);
});