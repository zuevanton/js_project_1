let title = prompt('как называется ваш проект?'),
    screens = prompt('Какие типы экранов нужно разработать?'),
    screenPrice = +prompt('Сколько будет стоить данная работа?'),
    rollback = 5,
    adaptive = confirm('Нужен ли адаптив на сайте?'),
    service1 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice1 = +prompt('Сколько это будет стоить?'),
    service2 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice2 = +prompt('Сколько это будет стоить?'),
    fullPrice = screenPrice + servicePrice1 + servicePrice2,
    servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback/100));

console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(', '));
console.log(fullPrice * (rollback/100));

if (fullPrice >= 30000){
  console.log('Даем скидку в 10%');
}
else if (fullPrice >= 15000 && fullPrice < 30000){
  console.log('Даем скидку в 5%');
}
else if (fullPrice < 15000 && fullPrice >= 0){
  console.log('Скидка не предусмотрена');
}
else {
  console.log('Что то пошло не так');
}