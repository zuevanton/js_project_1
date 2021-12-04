'use strict'
let title = prompt('как называется ваш проект?'),
    screens = prompt('Какие типы экранов нужно разработать?'),
    screenPrice = +prompt('Сколько будет стоить данная работа?'),
    rollback = 5,
    adaptive = confirm('Нужен ли адаптив на сайте?'),
    service1 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice1 = +prompt('Сколько это будет стоить?'),
    service2 = prompt('Какой дополнительный тип услуги нужен?'),
    servicePrice2 = +prompt('Сколько это будет стоить?')

let allServicePrices, servicePercentPrice, fullPrice

const showTypeOf = variable => {
  console.log(variable, typeof variable)
}

const getAllServicePrices = (...args) => {
  return args.reduce((sum, elem)=> {
    return sum + elem
  })
}

function getFullPrice(price1, price2) {
  return price1 + price2
}

const getServicePercentPrices = (price, percent) => {
  return Math.ceil(price - price * (percent/100))
}

const getRollbackMessage = price => {
  if (price >= 30000){
    return 'Даем скидку в 10%'
  } else if (price >= 15000 && price < 30000){
    return 'Даем скидку в 5%'
  } else if (price < 15000 && price >= 0){
    return 'Скидка не предусмотрена'
  } else {
    return 'Что то пошло не так'
  }
}

const getTitle = (text) => {
  return text.trim()[0].toUpperCase() + text.trim().slice(1).toLowerCase()
}

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2)
fullPrice = getFullPrice(screenPrice, allServicePrices)
servicePercentPrice = getServicePercentPrices(fullPrice, rollback)

showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)

console.log(getRollbackMessage(fullPrice))
console.log(screens.toLowerCase().split(', '))
console.log(servicePercentPrice)