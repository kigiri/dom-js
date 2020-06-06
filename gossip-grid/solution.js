import { gossips } from './assets/data.js'

const body = document.querySelector('body')

const ranges = document.createElement('div')
ranges.className = 'ranges'
body.appendChild(ranges)

const inputs = [
  { props: ['width'], min: 200, max: 800, value: 250 },
  { props: ['fontSize', 'lineHeight'], min: 20, max: 40, value: 25 },
  { props: ['background'], min: 20, max: 75, value: 60 },
]

export const grid = () => {
  inputs.forEach((input) => createInput(input))

  gossips.forEach((g) => {
    const gossip = document.createElement('div')
    gossip.textContent = g
    gossip.className = 'gossip'
    body.appendChild(gossip)
  })
}

const createInput = ({ props, min, max, value }) => {
  const range = document.createElement('div')
  range.className = 'range'

  const input = document.createElement('input')
  input.type = 'range'
  input.min = min
  input.max = max
  input.value = value
  input.addEventListener('input', (e) => customize(e, ...props))

  const propLabel = document.createElement('label')
  propLabel.textContent = props[0]

  const valueLabel = document.createElement('span')
  valueLabel.textContent = value

  range.appendChild(propLabel)
  range.appendChild(input)
  range.appendChild(valueLabel)

  ranges.appendChild(range)
}

const customize = ({ target }, ...props) => {
  const gossips = [...document.querySelectorAll('.gossip')]
  gossips.forEach((gossip) => {
    props.forEach((prop) => {
      const updatedValue =
        (prop === 'lineHeight' && `${Number(target.value) * 1.5}px`) ||
        (prop === 'background' && `hsl(280, 50%, ${target.value}%)`) ||
        `${target.value}px`
      gossip.style[prop] = updatedValue
    })
  })
  const valueLabel = target.nextElementSibling
  valueLabel.textContent = target.value
}
