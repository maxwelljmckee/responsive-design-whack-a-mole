// Write your JS here.

let score = 0;
let n = 3000

window.addEventListener('DOMContentLoaded', () => {
  const moleHeads = document.querySelectorAll('.wgs__mole-head');

  let interval = setInterval(popUpRandomMole, 1000);

  moleHeads.forEach(moleHead => {
    moleHead.addEventListener('click', e => {
      moleHead.classList.add('wgs__mole-head--hidden');
      score++
      n -= 250
      document.getElementById('header__score').innerHTML = `Score: ${score}`

      if (score === 10) {
        clearInterval(interval);
        document.getElementById('header__score').innerHTML = 'You Win!!'
      }
    })
  })
});

function popUpRandomMole() {
  const moleHeads = document.querySelectorAll('.wgs__mole-head');
  const randomNum = Math.floor(Math.random() * 8);
  
  moleHeads[randomNum].classList.remove('wgs__mole-head--hidden');
  console.log(n);
  setTimeout(hideMole, n, randomNum);
}

function hideMole(i) {
  const moleHeads = document.querySelectorAll('.wgs__mole-head');
  moleHeads[i].classList.add('wgs__mole-head--hidden')
}