import { pimp } from './solution.js'

const body = document.querySelector('body')

const button = document.createElement('div')
button.className = 'button'
button.textContent = 'pimp my style'
body.appendChild(button)

button.addEventListener('click', pimp)
