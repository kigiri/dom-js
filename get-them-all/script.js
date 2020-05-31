import { people } from './data.js'
import {
  areYou,
  getClassMembers,
  getTagsElements,
  getGeologists,
  getBonannoPisano,
  getRemainingPeople,
} from './instructions.js'

import {
  create,
  getById,
  body,
  displayResults,
  setResult,
  prevResult,
} from '../shared/lib.js'

people.map(({ id, className, address, plans }) => {
  const wrapper = create('div')
  wrapper.className = 'wrapper'

  const div = create('div')
  div.id = id
  div.textContent = 'Someone'
  div.className = `person ${className}`
  wrapper.appendChild(div)

  if (plans) {
    const imgs = create('div')
    imgs.className = 'plans'
    plans.map((plan) => {
      const img = create('img')
      img.src = './img.svg'
      imgs.appendChild(img)
    })
    wrapper.appendChild(imgs)
  }

  if (address) {
    const a = create('a')
    a.textContent = `→ ${address}`
    wrapper.appendChild(a)
  }

  body.appendChild(wrapper)
})

const step1 = () => {
  const pisano = areYou('BonannoPisano')
  const validPisano = pisano.tagName === 'DIV' && pisano.id === 'BonannoPisano'

  pisano.classList.add('active')
  pisano.textContent = 'Bonanno Pisano'

  setResult(validPisano, 1)
}

const step2 = () => {
  if (!prevResult(2)) return

  const classicals = getClassMembers('classical')

  const validClassicals =
    classicals &&
    Array.isArray(classicals) &&
    classicals.map((c) => c.tagName && c.className.includes('classical'))

  if (validClassicals) {
    classicals.map((c) => {
      c.classList.add('active')
      c.textContent = 'Classical architect'
    })

    const retreated = getById('BonannoPisano')
    retreated.classList.add('retreated')
  }

  setResult(validClassicals, 2)
}

const step3 = () => {
  if (!prevResult(3)) return

  const plans = getTagsElements('img')
  const addresses = getTagsElements('a')
  const validPlans =
    plans &&
    Array.isArray(plans) &&
    plans.map((p) => p.tagName && p.tagName === 'IMG')
  const validAddresses =
    addresses &&
    Array.isArray(addresses) &&
    addresses.map((a) => a.tagName && a.tagName === 'A')

  if (validPlans && validAddresses) {
    const tags = [...plans, ...addresses]
    tags.map((t) => {
      t.classList.add('display')
    })
  }

  setResult(validPlans && validAddresses, 3)
}

const step4 = () => {
  if (!prevResult(4)) return

  const geologists = getGeologists('div.geologist')

  const validGeologists =
    geologists &&
    Array.isArray(geologists) &&
    geologists.map((g) => g.tagName && g.className === 'geologist')

  if (validGeologists) {
    geologists.map((g) => {
      g.classList.add('active')
      g.textContent = 'Geologist'
    })
  }

  setResult(validGeologists, 4)
}

const step5 = () => {
  if (!prevResult(5)) return

  const uselessPisano = getBonannoPisano()

  const isValidUselessPisano =
    uselessPisano &&
    uselessPisano.tagName &&
    uselessPisano.id === 'BonannoPisano'

  if (isValidUselessPisano) {
    body.removeChild(uselessPisano.parentElement)
  }

  setResult(isValidUselessPisano, 5)
}

const step6 = () => {
  if (!prevResult(6)) return

  const others = getRemainingPeople('div.person')

  const validOthers =
    others &&
    Array.isArray(others) &&
    others.map((o) => o.tagName === 'DIV' && o.className.includes('person'))

  if (validOthers) {
    others.map((o) => {
      body.removeChild(o.parentElement)
    })
  }

  setResult(validOthers, 6)
}

const check = () => {
  step1()
  step2()
  step3()
  step4()
  step5()
  step6()
}

displayResults(6)
check()
