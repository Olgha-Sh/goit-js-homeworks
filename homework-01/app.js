'use strict';

// =============== ЗАДАЧА 1 =============== //

let price = 1000;
let name = 'Генератор защитного поля';

let message = `Выбран ${name}, цена за штуку ${price} кредитов.`;

console.log(message);

price = 2000;
message = `Выбран ${name}, цена за штуку ${price} кредитов.`;

console.log(message);

// ================ ЗАДАЧА 2 ================ //

const total = 100;
const ordered = 50;
let message;

if (ordered < 60) {
  message = 'Заказ оформлен, с вами свяжется менеджер';
} else {
  message = 'На складе недостаточно товаров!';
}
console.log(message);

// ================= ЗАДАЧА 3 ================= //

const ADMIN_PASSWORD = 'qwerty';
const userAdmin = 'Пароль администратора';
const userPassword = prompt(userAdmin);
let message;

if (userPassword === null) {
  message = 'Отменено пользователем!';
} else if (userPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

// console.log(message);

alert(message);

// ================== ЗАДАЧА 4 ================= //

const userCredits = 23580;
let pricePerDroid = 3000;
const userQuantity = 'Сколько дроидов вы хотите купить?';
const userChoise = prompt(userQuantity);
let totalPrice = 0;
let creditBalance;
let message;

if (userChoise === null) {
  message = 'Отменено пользователем!';
} else {
  totalPrice = Number(userChoise) * pricePerDroid;
  if (totalPrice > 23580) {
    message = 'Недостаточно средств на счету!';
  } else {
    creditBalance = userCredits - totalPrice;
    message = `Вы купили ${totalPrice} дроидов, на счету осталось ${creditBalance} кредитов.`;
  }
}
console.log(message);

//  ================= ЗАДАЧА 5 ================  //

const deliveryGoods = 'Оформить доставку товара ';
const deliveryCountry = prompt(deliveryGoods);
let credit = 0;
let message;
const titleInLC = deliveryCountry.toLowerCase();

switch (titleInLC) {
  case 'китай':
    credit = '100';
    message = `Доставка в ${titleInLC} будет стоить ${credit} кредитов.`;
    break;

  case 'чили':
    credit = '250';
    message = `Доставка в ${titleInLC} будет стоить ${credit} кредитов.`;
    break;

  case 'австралия':
    credit = '170';
    message = `Доставка в ${titleInLC} будет стоить ${credit} кредитов.`;
    break;

  case 'индия':
    credit = '80';
    message = `Доставка в ${titleInLC} будет стоить ${credit} кредитов.`;
    break;

  case 'ямайка':
    credit = '120';
    message = `Доставка в ${titleInLC} будет стоить ${credit} кредитов.`;
    break;

  default:
    message = 'В вашей стране доставка не доступна';
    alert(message);
}

console.log(message);

// ================== ЗАДАЧА 6 ==================  //

const enterNumber = 'Введите число';
let total = 0;
let input = 0;
do {
  input = prompt(enterNumber);
  if (isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
