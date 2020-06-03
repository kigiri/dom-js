import { build, repair, destroy } from './solutions.js'

build()

const random = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const reparations = [...Array(15).keys()].map((e) => `brick-${random(0, 54)}`)

const dynamite = document.querySelector('#dynamite')
dynamite.addEventListener('click', destroy)

const hammer = document.querySelector('#hammer')
hammer.addEventListener('click', () => repair('brick-26', ...reparations))
