let title = 'project1',
    screens = 'Простые, Сложные, Интерактивные',
    screenPrice = 1500,
    rollback = 5,
    fullPrice = 150000,
    adaptive = true;

console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(', '));
console.log(fullPrice * (rollback/100));