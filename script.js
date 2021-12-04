'use strict'
let title,
    screens,
    screenPrice,
    rollback,
    adaptive,
    allServicePrices, 
    servicePercentPrice, 
    fullPrice, 
    service1, 
    service2

const isNumber = (num) => {
  return !isNaN(parseFloat(num) && isFinite(num))
}

const validatePromptIsNum = (question) => {
  let result
  do {
    result = prompt(question)
  } while(!isNumber(result))

  return parseFloat(result)
} 

const asking = () => {
  title = prompt('как называется ваш проект?')
  screens = prompt('Какие типы экранов нужно разработать?')
  screenPrice = validatePromptIsNum('Сколько будет стоить данная работа?')
  rollback = 5
  adaptive = confirm('Нужен ли адаптив на сайте?')
}

const showTypeOf = variable => {
  console.log(variable, typeof variable)
}

const getAllServicePrices = () => {
  let sum = 0

  for (let i = 0; i < 2; i++){
    if (i == 0){
      service1 = prompt('Какой дополнительный тип услуги нужен?')
    } else if (i == 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?')
    }
    sum += validatePromptIsNum('сколько это будет стоить?')
  }
  return sum
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

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice(screenPrice, allServicePrices)
servicePercentPrice = getServicePercentPrices(fullPrice, rollback)

showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)

console.log(getRollbackMessage(fullPrice))
console.log(screens.toLowerCase().split(', '))
console.log(servicePercentPrice)