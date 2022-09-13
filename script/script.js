const principalContainer = document.querySelector('#container-principal')
const inputName = document.querySelector('#name');
const cardName = document.querySelector('.card-name')
const inputCardNumber = document.querySelector('#numbers')
const cardNumber = document.querySelector('#card-numbers');
const inputMonth = document.querySelector('#month');
const cardMonth = document.querySelector('.exp-date span:nth-child(1)');
const inputYear = document.querySelector('#year');
const cardYear = document.querySelector('.exp-date span:nth-child(2)');
const cardForm = document.querySelector('#card-form');
const submitBtn = document.querySelector('#submit-btn');
const dateExp = document.querySelector('.date-exp')
const inputCvc = document.querySelector('#cvc');
const cardCvc = document.querySelector('#card-back span');
const cvc = document.querySelector('.cvc');

/*Regex */
const regexHolderName = /[a-zA-z]+/gi
const regexDateMonth = /[0-1][0-9]/g;
const regexCardNumber = /([0-9]{4}\s){3}[0-9]{4}/g;
const regexCvc = /\d{3}/;


const erroElement = document.createElement('span');
const erroCardNumber = document.createElement('span');
const erroCvc = document.createElement('span');
erroElement.classList.add('erro-text');
erroCardNumber.classList.add('erro-text');
erroCvc.classList.add('erro-text');

// events
inputName.addEventListener('change', (e) => {
  const inputValue = inputName.value;
  cardName.innerText = inputValue.toUpperCase();
  if (inputValue === '') {
    cardName.innerText = 'Gabriel Neoob'.toUpperCase();
  }
});

inputCardNumber.addEventListener('change', (e) => {
  const inputValue = inputCardNumber.value;
  inputCardNumber.parentElement.appendChild(erroCardNumber);
  cardNumber.innerText = inputValue;
  if (inputValue.match(regexCardNumber) || inputValue === '') {
    cardNumber.innerText = inputValue;
    inputCardNumber.classList.remove('erro');
    erroCardNumber.classList.remove('ativar');
    erroCardNumber.innerText = '';
  } else {
    erroCardNumber.innerText = 'Invalid Card Number';
    inputCardNumber.classList.add('erro');
    erroCardNumber.classList.add('ativar')
  }
  if (inputValue === '') {
    cardNumber.innerText = '0000 0000 0000 0000'
  }
});


inputMonth.addEventListener('change', (e) => {
  const inputValue = inputMonth.value;
  dateExp.appendChild(erroElement);
  if (inputValue.match(regexDateMonth) || inputValue === '') {
    cardMonth.innerText = inputMonth.value;
    inputMonth.classList.remove('erro');
    erroElement.classList.remove('ativar');
    erroElement.innerText = '';
  } else {
    erroElement.innerText = 'Invalid Month';
    inputMonth.classList.add('erro');
    erroElement.classList.add('ativar')
  }
  if (inputValue === '') {
    cardMonth.innerText = '00'
  }

});

inputYear.addEventListener('change', (e) => {
  const inputValue = inputYear.value;
  cardYear.innerText = inputValue;
  if (inputValue === '') {
    cardYear.innerText = '00'
  }
})

inputCvc.addEventListener('change', () => {
  const inputValue = inputCvc.value;
  cvc.appendChild(erroCvc);
  if (inputValue.match(regexCvc) || inputValue === '') {
    cardCvc.innerText = inputValue;
    inputMonth.classList.remove('erro');
    erroCvc.classList.remove('ativar');
    erroCvc.innerText = '';
  } else {
    erroCvc.innerText = 'Invalid CVC';
    inputCvc.classList.add('erro');
    erroCvc.classList.add('ativar');
  }
  if (inputValue === '') {
    cardCvc.innerText = '000'
  }
});

const completeState = () => {
  const completedState = document.createElement('div');
  completedState.classList.add('completed-state');

  const completedImg = document.createElement('img');
  completedImg.setAttribute('src', './imgs/icon-complete.svg');
  completedState.appendChild(completedImg);

  const ty = document.createElement('h2');
  ty.innerText = 'thank you!'.toUpperCase();
  completedState.appendChild(ty);

  const p = document.createElement('p');
  p.innerText = `We've added your card details`
  completedState.appendChild(p);

  const btn = document.createElement('button');
  btn.innerText = 'Continue';
  btn.classList.add('btn');

  completedState.appendChild(btn);

  principalContainer.appendChild(completedState);
}

cardForm.addEventListener('submit', (e) => {
  e.preventDefault();
  cardForm.classList.add('hide');
  completeState()
});

document.addEventListener('click', (e) => {
  console.log(e.target);
  const elTarget = e.target;

  if (elTarget.classList.contains('btn')) {
    document.querySelector('.completed-state').classList.add('hide');
    cardForm.classList.remove('hide');
    inputCardNumber.value = '';
    inputCvc.value = '';
    inputMonth.value = '';
    inputYear.value = '';
    inputName.value = '';
  }

})



