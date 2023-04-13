// //   1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
// let result = "";
// for (let i = 10; i <= 20; i++) {
//   result += i + ", ";
// }
// console.log(result);

// //    2. Вивести квадрати чисел від 10 до 20:
// for (let i = 10; i <= 20; i++) {
//     console.log(`Квадрат числа ${i} = ${i*i}`);
//   }
  

//   //   3. Вивести таблицю множення на 7.
//   for (let i = 1; i <= 10; i++) {
//     let result = 7 * i;
//     console.log(`7 * ${i} = ${result}`);
//   }


// //   4. Знайти суму всіх цілих чисел від 1 до 15.
//  let sum = 0;
// for (let i = 1; i <= 15; i++) {
//   sum += i;
// }
// console.log(`Сума чисел від 1 до 15 = ${sum}`);


// //   5. Знайти добуток усіх цілих чисел від 15 до 35.
// let product = 1;
// for (let i = 15; i <= 35; i++) {
//   product *= i;
// }
// console.log(`Добуток чисел від 15 до 35 = ${product}`);


// //   6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// let sum = 0;
// for (let i = 1; i <= 500; i++) {
//   sum += i;
// }
// let average = sum / 500;
// console.log(`Середнє арифметичне чисел від 1 до 500 = ${average}`);


// //   7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

// let sum = 0;
// for (let i = 30; i <= 80; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(`Сума парних чисел в діапазоні від 30 до 80 = ${sum}`);


// //   8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// for (let i = 100; i <= 200; i++) {
//     if (i % 3 === 0) {
//       console.log(i);
//     }
//   }




// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let num = parseInt(prompt("Введіть натуральне число:"));
document.write("Дільники числа " + num + ": ");
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    document.write(i + " ");
  }
}
document.write("<br>");

// 10.  Визначення кількості парних дільників

let evenDivisorsCount = 0;
for (let i = 1; i <= num; i++) {
  if (num % i === 0 && i % 2 === 0) {
    evenDivisorsCount++;
  }
}
document.write("Кількість парних дільників: " + evenDivisorsCount + "<br>");

//  11. Знайти суму парних дільників
let sumOfEvenDivisors = 0;
for (let i = 1; i <= num; i++) {
  if (num % i === 0 && i % 2 === 0) {
    sumOfEvenDivisors += i;
  }
}
document.write("Сума парних дільників: " + sumOfEvenDivisors + "<br>");

//  12. Надрукувати повну таблицю множення від 1 до 10
document.write("Повна таблиця множення від 1 до 10: <br>");
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    document.write(i + " * " + j + " = " + (i * j) + "<br>");
  }
  document.write("<br>");
}
  