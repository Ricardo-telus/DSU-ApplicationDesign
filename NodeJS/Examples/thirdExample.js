
//para importar modulos o funciones de otros archivos::
const library = require('./library')
// car.js
const car = {
    brand: 'Ford',
    model: 'Fiesta'
  }
  
  module.exports = car
  // index.js
const car = require('./car')
const car = {
    brand: 'Ford',
    model: 'Fiesta'
  }
  
  exports.car = car
  exports.car = {
    brand: 'Ford',
    model: 'Fiesta'
  }
  
//npm install inquirer
const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`)
})


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  })
  
const x = 1
const y = 2
const z = 3
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + x + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of y is ' + y + 
  ' and has been checked .. how many times?'
)





