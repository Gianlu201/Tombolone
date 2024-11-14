const board = document.getElementById('tabellone');
const btnEstrai = document.getElementById('btnEstrai');
const numeroEstratto = document.getElementById('numeroEstratto');
const estratti = document.getElementById('estratti');
const numbers = [];
const extractedNumbers = [];

// --------------------------------------------------------
addEventListener('load', init());

function init() {
  createBoard();
}

function createBoard() {
  for (let i = 0; i < 90; i++) {
    const myCell = document.createElement('div');
    numbers.push(i + 1);
    myCell.innerText = i + 1;
    board.appendChild(myCell);
  }
}

btnEstrai.addEventListener('click', function () {
  markCell(getRandomNumber());
  numeroEstratto.classList.remove('hidden');
});

function getRandomNumber() {
  if (numbers.length > 0) {
    const myIndex = Math.floor(Math.random() * numbers.length);
    const myNum = numbers[myIndex];
    extractedNumbers.push(myNum);
    numbers.splice(myIndex, 1);
    checkExtractedNumbers();
    numeroEstratto.innerText = myNum;
    return myNum;
  } else {
    endGame();
  }
}

function markCell(index) {
  const myCell = document.querySelector(`#tabellone div:nth-of-type(${index})`);
  const mySpan = document.createElement('span');
  mySpan.classList.add('extracted');
  myCell.appendChild(mySpan);
}

function checkExtractedNumbers() {
  let numbersShown;
  switch (extractedNumbers.length) {
    case 1:
      numbersShown = 1;
      break;
    case 2:
      numbersShown = 2;
      break;
    case 3:
    default:
      numbersShown = 3;
      break;
  }

  estratti.innerHTML = '';
  for (let i = 0; i < numbersShown; i++) {
    const myDiv = document.createElement('div');
    myDiv.innerText = extractedNumbers[extractedNumbers.length - 1 - i];
    myDiv.classList.add('pedina');
    estratti.appendChild(myDiv);
  }
}

// ----------------------------------------
function endGame() {
  btnEstrai.setAttribute('disabled', 'true');
  return;
}
