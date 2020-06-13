const body = document.querySelector('body')

const frame = document.createElement('div')
frame.className = 'frame'
body.append(frame)

const frameDim = frame.getBoundingClientRect()
const { top, bottom, left, right } = frameDim

const diameter = 50
const radius = diameter / 2

const insideX = (clientX) => clientX > left + radius && clientX < right - radius
const insideY = (clientY) => clientY > top + radius && clientY < bottom - radius

let isInside = false

export const createCircle = () => {
  document.addEventListener('click', (e) => create(e))
  setTimeout(() => document.removeEventListener('click', create), 500)
}

const create = ({ clientX, clientY }) => {
  const elem = document.createElement('div')
  elem.className = 'elem'
  body.append(elem)
  elem.style.top = `${clientY - radius}px`
  elem.style.left = `${clientX - radius}px`
  const hasEntered = insideX(clientX) && insideY(clientY)
  if (hasEntered) {
    elem.style.background = 'var(--purple)'
  }
  isInside = false
}

export const moveCircle = () => {
  document.addEventListener('mousemove', (e) => move(e))
  setTimeout(() => document.removeEventListener('mousemove', move), 500)
}

const move = (e) => {
  const elems = [...document.getElementsByClassName('elem')]
  const elem = elems[elems.length - 1]
  if (!elem) return
  position(e, elem)
}

const position = ({ clientX, clientY }, elem) => {
  const hasEntered = insideX(clientX) && insideY(clientY)

  if (hasEntered) {
    isInside = true
    elem.style.background = 'var(--purple)'
  }

  if (isInside) {
    if (insideY(clientY)) {
      elem.style.top = `${clientY - radius}px`
    }
    if (insideX(clientX)) {
      elem.style.left = `${clientX - radius}px`
    }
  } else {
    elem.style.top = `${clientY - radius}px`
    elem.style.left = `${clientX - radius}px`
  }
}
