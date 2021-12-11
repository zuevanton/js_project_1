'use strict'

const title = document.getElementsByTagName('h1'),
      startBtn = document.getElementsByClassName('handler_btn')[0],
      resetBtn = document.getElementsByClassName('handler_btn')[1],
      addScreenBtn = document.querySelector('.screen-btn'),
      otherItemsPercent = document.querySelectorAll('.other-items.percent'),
      otherItemsNumber = document.querySelectorAll('.other-items.number'),
      rollbackInput = document.querySelector('.main-controls__range input'),
      rollbackSpan = document.querySelector('.main-controls__range span'),
      totalLayoutPrice = document.getElementsByClassName('total-input')[0],
      totalScreensCount = document.getElementsByClassName('total-input')[1],
      totalOtherPrice = document.getElementsByClassName('total-input')[2],
      totalFullPrice = document.getElementsByClassName('total-input')[3],
      totalFullPricePercent = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')
console.dir(totalFullPricePercent)

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

const validatePromptIsText = function(question){
  let answer;
  do {
    answer = prompt(question);
  }
  while(!isNaN(+answer));
  return answer;
};

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  rollback: 10,
  adaptive: true,
  allServicePrices: 0, 
  servicePercentPrice: 0, 
  fullPrice: 0, 
  services: {},

  start(){
    this.asking()
    this.addPrices()
    this.getFullPrice()
    this.getServicePercentPrices()
    this.getTitle()
    
    this.logger()
  },

  asking(){
    this.title = validatePromptIsText('как называется ваш проект?')
    this.adaptive = confirm('Нужен ли адаптив на сайте?')

    for (let i = 0; i < 2; i++){
      let name = validatePromptIsText('Какие типы экранов нужно разработать?')
      let price = +validatePromptIsNum('Сколько будет стоить данная работа?')
      this.screens.push({id: i, name, price})
    }

    for (let i = 0; i < 2; i++){
      let name = validatePromptIsText('Какой дополнительный тип услуги нужен?')
      let price = validatePromptIsNum('сколько это будет стоить?')
      this.services[name + `-${i+1}`] = +price
    }
  },
  addPrices(){
    this.screenPrice = this.screens.reduce((sum, cur) => {
      return sum + cur.price
    }, 0)
    
    for(let key in this.services){
      this.allServicePrices += this.services[key]
    }
  },
  logger(){
    console.log(this.fullPrice)
    console.log(this.servicePercentPrice)
    console.log(this.screens)
  },

  getFullPrice() {
    this.fullPrice = +this.screenPrice + this.allServicePrices
  },

  getServicePercentPrices(){
    this.servicePercentPrice =  Math.ceil(this.fullPrice - this.fullPrice * (this.rollback/100))
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
    this.title = this.title.trim()[0].toUpperCase() + this.title.trim().slice(1).toLowerCase()
  }
}

// appData.start()