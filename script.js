
const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function cleanInputString(str) {
  const regex = /[\W_]/g;
  return str.replace(regex, '');
}

checkButton.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please input a value");

  } else {
    const cleanWord = cleanInputString(input.value).toLowerCase();
    const revWord = cleanWord.split("").reverse().join("");

    if (cleanWord === revWord) {
      result.innerText = `${input.value} is a palindrome`
      } else {
        result.innerText = `${input.value} is not a palindrome`
      }
}});
