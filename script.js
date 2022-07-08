'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

//! DATA
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//! ELEMENTS
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//! TEST AREA

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //* Practising SLICE Method

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// Practicing SPLICE Method
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

// console.log(arr.splice(1, 2));
// console.log(arr);

// Reverse() Methods

// arr = ['a', 'b', 'c', 'd', 'e'];

// let arr2 = ['f', 'g', 'h', 'i', 'j'];

// console.log(arr2.reverse());
// console.log(arr2);

// // Using CONCAT Method

// let connercat = arr.concat(arr2);

// // Using JOIN Method

// console.log(connercat.join('^'));

// //? Learning new at() Method from ES22

// const arrey = [23, 11, 64];
// console.log(arrey[arrey.length - 1]); //* Returns last element
// console.log(arrey.at(-1));

// //? Use at() for String
// const gamerNick = 'iLoseEveryTime';
// console.log(gamerNick.at(-1));

//? For Each Methods

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited : ${movement}`);
  } else if (movement < 0) {
    console.log(`You withdrew : ${Math.abs(movement)}`);
  }
}

//? Using forEach method

movements.forEach(movement => {
  if (movement > 0) {
    console.log(`You deposited : ${movement}`);
  } else if (movement < 0) {
    console.log(`You withdrew : ${Math.abs(movement)}`);
  }
});
