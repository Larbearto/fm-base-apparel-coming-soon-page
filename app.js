const submitBtn = document.getElementById('btn')
const errorMsg = document.querySelector('.message')
const errorIcon = document.querySelector('.error-icon')
const inputEl = document.querySelector('.emailInput')
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
