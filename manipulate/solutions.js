export const build = (tag = 'div') => {
  const element = document.createElement(tag)
  return element
}

export const buildBricks = (amount = 80) => {
  const array = [...Array(amount).keys()]
  const bricks = array.map(() => {
    const brick = build('div')
    brick.className = 'brick'
    return brick
  })
  return bricks
}

export const append = (container, element) => {
  container.appendChild(element)
}

export const assemble = (container, elements, idPrefix = 'brick') => {
  elements.map((e, i) => {
    append(container, e)
    e.id = `${idPrefix}${i + 1}`
  })
}

export const removeTargets = (ids = ['brick77', 'brick80']) => {
  ids.map((id) => {
    const target = document.getElementById(id)
    target.remove()
  })
}
