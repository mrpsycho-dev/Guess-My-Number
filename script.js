'use strict';
let score = 19;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a value!';
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = 'You won!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score + 1;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (secretNumber > guess) {
    if (score > 0) {
      document.querySelector('.score').textContent = score--;
      document.querySelector('.message').textContent = 'Too low!';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost the game :(';
    }
  } else if (secretNumber < guess) {
    if (score > 0) {
      document.querySelector('.score').textContent = score--;
      document.querySelector('.message').textContent = 'Too high!';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost the game :(';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 19;
  document.querySelector('.score').textContent = 20;
  secretNumber = document.querySelector('.number').textContent = Math.trunc(
    Math.random() * 20 + 1
  );
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // console.log(Number((document.querySelector('.guess').value = typeof 2)));
  document.querySelector('.guess').value = '';
});
