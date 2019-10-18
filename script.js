const button = document.querySelector('#button');
const dice1 = document.querySelector('#firstDice');
const dice2 = document.querySelector('#secondDice');
const status = document.querySelector('#status')

button.addEventListener('click', rollDice);


function rollDice(event){

  const value = Math.floor(Math.random() * 6 + 1);

  const value2 = Math.floor(Math.random() * 6 + 1);

  const total = value + value2;

  dice1.innerHTML = value;

  dice2.innerHTML = value2;

  status.innerHTML = 'You rolled ' + total + '...'

  if (value === value2) {

    status.innerHTML = 'Doubles, Congrats!'

  }



    
    
    event.preventDefault();
}