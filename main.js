const screen1 = document.querySelector('.screen-1')
const screen2 = document.querySelector('.screen-2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const inputNumber = document.querySelector('#inputNumber')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

const handleTryClick = (event) => 
{
  debugger

  event.preventDefault()
  
  if(Number(inputNumber.value) > 10) {
    window.alert('Número inválido! Tente novamente.')
  }
  else if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector('h2')
      .innerText = `acertou em ${xAttempts} tentativas`
  }

  if (inputNumber.value) {
    xAttempts++
  }

  inputNumber.value = ""
  inputNumber.focus()
}

const handleResetClick = () => 
{
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
  inputNumber.focus()
}

const keyDown = (event) => 
{
  if(event.key == 'Enter' && screen1.classList.contains('hide')) 
  {
    handleResetClick()
  }
}

const toggleScreen = () => 
{
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keyDown)