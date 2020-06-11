import { people } from 'https://mariemalarme.github.io/dom-js/assets/data/get-them-all.js'
import {
  getBonannoPisano,
  getActive,
  getArchitects,
  getClassical,
} from './solution.js'
// copy-pasted code of the student instead of the import

const body = document.querySelector('body')

const shuffle = (array) => {
  const test = array.length - 1
  for (let i = test; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

shuffle(people).map(({ id, classe, address, plans, tag, active }) => {
  const people = document.createElement(tag)
  people.id = id
  people.textContent = 'Someone'
  people.className = `${classe} ${active ? 'active' : ''}`
  body.appendChild(people)
})

const buttonsContainer = document.createElement('div')
buttonsContainer.id = 'buttons'
body.appendChild(buttonsContainer)

const buttons = [
  { name: 'Architect', action: getArchitects },
  { name: 'Classical', action: getClassical },
  { name: 'Active', action: getActive },
  { name: 'Bonanno', action: getBonannoPisano },
]

buttons.forEach(({ name, action }, i) => {
  const btn = document.createElement('div')
  btn.id = `btn${name}`
  btn.textContent = `Get ${name}${i === 0 ? 's' : ''}`

  if (i > 0) {
    btn.className = 'disabled'
  }

  btn.addEventListener('click', () => {
    const [targetted, others] = action()

    if (name === 'Bonanno') {
      targetted.textContent = targetted.id.replace('P', ' P')
      targetted.classList.add('found')
    } else {
      targetted.forEach((t) => {
        t.textContent = name
      })
    }

    others.forEach((o) => {
      o.style.opacity = 0.2
    })

    btn.className = 'disabled'

    const last = i + 1 === buttons.length
    if (last) return
    const next = document.getElementById(`btn${buttons[i + 1].name}`)
    next.classList.remove('disabled')
  })

  buttonsContainer.appendChild(btn)
})
