import { build, repair, destroy } from './solution.js'

build()

const body = document.querySelector('body')

const tools = document.createElement('div')
tools.id = 'tools'
body.append(tools)

const dynamite = document.createElement('div')
dynamite.textContent = '🧨'
dynamite.addEventListener('click', destroy)
tools.append(dynamite)

const hammer = document.createElement('div')
hammer.textContent = '🔨'
hammer.addEventListener('click', () => repair('brick-26', ...reparations))
tools.append(hammer)

const random = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const reparations = [...Array(15).keys()].map((e) => `brick-${random(0, 54)}`)
