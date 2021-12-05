'use strict'

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

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  rollback: 10,
  adaptive: true,
  allServicePrices: 0, 
  servicePercentPrice: 0, 
  fullPrice: 0, 
  service1: '',
  service2: '',

  start(){
    this.asking()
    this.allServicePrices = this.getAllServicePrices()
    this.fullPrice = this.getFullPrice()
    this.servicePercentPrice = this.getServicePercentPrices()
    this.title = this.getTitle()
    
    this.logger()
  },

  asking(){
    this.title = prompt('как называется ваш проект?')
    this.screens = prompt('Какие типы экранов нужно разработать?')
    this.screenPrice = validatePromptIsNum('Сколько будет стоить данная работа?')
    this.adaptive = confirm('Нужен ли адаптив на сайте?')
  },

  logger(){
    console.log(this.fullPrice)
    console.log(this.servicePercentPrice)

    for(let key in this){
      console.log(key)
    }
  },

  getAllServicePrices(){
    let sum = 0

    for (let i = 0; i < 2; i++){
      if (i == 0){
        this.service1 = prompt('Какой дополнительный тип услуги нужен?')
      } else if (i == 1) {
        this.service2 = prompt('Какой дополнительный тип услуги нужен?')
      }
      sum += validatePromptIsNum('сколько это будет стоить?')
    }
    return sum
  },

  getFullPrice() {
    return +this.screenPrice + this.allServicePrices
  },

  getServicePercentPrices(){
    return Math.ceil(this.fullPrice - this.fullPrice * (this.rollback/100))
  },

  getRollbackMessage(){
    if (this.fullPrice >= 30000){
      return 'Даем скидку в 10%'
    } else if (this.fullPrice >= 15000 && this.fullPrice < 30000){
      return 'Даем скидку в 5%'
    } else if (this.fullPrice < 15000 && this.fullPrice >= 0){
      return 'Скидка не предусмотрена'
    } else {
      return 'Что то пошло не так'
    }
  },

  getTitle() {
    return this.title.trim()[0].toUpperCase() + this.title.trim().slice(1).toLowerCase()
  }
}

appData.start()