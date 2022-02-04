const credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;

const droidNumber = prompt("введите количество дроидов");

if (droidNumber === null) {
  message = "Отменено пользователем";
} else {
  totalPrice = droidNumber * pricePerDroid;
  message =
    totalPrice <= credits
      ? `Вы купили ${droidNumber} дроидов, на счету осталось ${
          credits - totalPrice
        } кредитов`
      : "Недостаточно средств на счету!";
}

console.log(message);
