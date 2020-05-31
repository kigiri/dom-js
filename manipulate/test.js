import {
  build,
  buildBricks,
  append,
  assemble,
  removeTargets,
} from './solutions.js'

import {
  body,
  isHTMLElement,
  getById,
  displayResults,
  setResult,
  prevResult,
} from '../shared/lib.js'

const stack = document.createElement('div')
stack.className = 'stack'
stack.textContent = `Phase 2 / Let's build that tower right`
body.appendChild(stack)

const structure = document.createElement('div')
structure.className = 'structure'

let bricks

const step1 = () => {
  const brick = build('div')
  const validBrick = isHTMLElement(brick)

  stack.textContent = validBrick
    ? '1st brick successfully created!'
    : 'No brick created yet, chop chop!'

  setResult(validBrick, 1)
}

const step2 = () => {
  if (!prevResult(2)) return

  bricks = buildBricks(80)
  const validBricks =
    bricks && Array.isArray(bricks) && bricks.every((e) => isHTMLElement(e))

  if (validBricks) {
    stack.textContent = `All the ${bricks.length} bricks needed have been created!`
  }

  setResult(validBricks, 2)
}

const step3 = () => {
  if (!prevResult(3)) return

  append(body, structure)

  const validStructure =
    structure.parentElement && structure.parentElement.tagName === 'BODY'

  setResult(validStructure, 3)
}

const step4 = () => {
  if (!prevResult(4)) return

  stack.remove()
  assemble(structure, bricks)

  const assembled =
    structure.childNodes.length === 80 &&
    [...structure.childNodes].map((c) => c.tagName && c.id.includes('brick'))

  setResult(assembled, 4)
}

const step5 = () => {
  if (!prevResult(5)) return

  const ids = ['brick77', 'brick80']
  removeTargets(ids)

  const targetsRemoved = ids.every((id) => !getById(id))

  setResult(targetsRemoved, 5)
}

const check = () => {
  step1()
  step2()
  step3()
  step4()
  step5()
}

displayResults(5)
check()
