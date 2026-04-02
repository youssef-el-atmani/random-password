// 91 characters
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generatePswBtn = document.querySelector(".generate-psw-btn");

const firstPasswordDisplayEl = document.querySelector(".first-password");
const secondPasswordDisplayEl = document.querySelector(".second-password");

generatePswBtn.addEventListener("click", () => {
  firstPasswordDisplayEl.textContent = generatePassword();
  secondPasswordDisplayEl.textContent = generatePassword();
});

function generatePassword() {
  let passwordStr = "";

  for (let i = 0; i < 15; i++) {
    let randomIndex = Math.floor(Math.random() * 91); // it falls between 0 and 90
    passwordStr += characters[randomIndex];
  }

  return passwordStr;
}

// copy password to clipboard
const passwordsDisplayEl = document.querySelector(".passwords-display");

passwordsDisplayEl.addEventListener("click", (e) => {
  navigator.clipboard.writeText(e.target.textContent);
});
