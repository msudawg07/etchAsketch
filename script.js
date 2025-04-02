let divContainer = document.querySelector('.container');
let bTop = document.querySelector('.bStart');
let resetPage = document.querySelector('.resetButton');
let userInput;
// const userInputSize = userInput.innerText;
// console.log(userInput);

resetPage.addEventListener('click', () => {
  location.reload();
})

userInput = prompt('Enter a number:') ** 2;
if (userInput) {
gridSquares();
}

function gridSquares() {
  for (let i = 1; i <= userInput; i++) {
    let div1 = document.createElement('div');
    div1.style.height = 801/Math.sqrt(userInput) + 'px';
    div1.style.width = 801/Math.sqrt(userInput) + 'px';
    div1.classList = 'divS'
    divContainer.append(div1);
    div1.addEventListener('mouseover', () => {
      div1.style.backgroundColor = randColor();
    })
  }
}

function randColor() {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`;
}

// function disableButton() {
//   bTop.disabled = true;
// }
