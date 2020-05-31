// const doc = document.implementation.createHTMLDocument('Dom JS')

// export const body = doc.querySelector('body')

// export const setupHTML = (folder) => {
//   console.log(doc)
//   generateLink(doc, `./${folder}/style.css`)
//   generateLink(doc, `./shared.css`)
//   const script = create('script')
//   script.type = 'module'
//   script.src = `./${folder}/script.js`
//   doc.head.appendChild(script)
//   return { doc: doc }
// }

// const generateLink = (doc, path) => {
//   const link = create(`link`)
//   link.rel = `stylesheet`
//   link.type = `text/css`
//   link.href = path
//   doc.head.appendChild(link)
// }

export const body = document.querySelector('body')

export const create = (element) => document.createElement(element)
export const isHTMLElement = (element) => element.tagName
export const getById = (id) => document.getElementById(id)

// Displaying results for each step

let results

export const initResults = (amount) => {
  const arr = [...Array(amount).keys()]
  return Object.assign(
    ...Object.values(arr.map((e) => ({ [`step${e + 1}`]: null }))),
  )
}

const resultsContainer = create('div')
resultsContainer.id = `results`
body.appendChild(resultsContainer)

export const displayResults = (amount) => {
  results = initResults(amount)
  Object.values(results).map((r, i) => {
    const resultDiv = create('div')
    resultDiv.id = `result${i + 1}`
    resultDiv.className = `result`
    setResultProps(resultDiv, r, i + 1)
    resultsContainer.appendChild(resultDiv)
  })
}

export const prevResult = (step) => results[`step${step - 1}`]

export const setResult = (validated, step) => {
  const updatedResult = validated ? 1 : 0
  results[`step${step}`] = updatedResult

  const resultDiv = getById(`result${step}`)
  setResultProps(resultDiv, updatedResult, step)
}

const setResultProps = (div, result, step) => {
  const status = getStatus(result, step)
  const blocked = result === null && step !== 1
  const textColor =
    (blocked && 'disabled') || (result === 1 && 'purple') || 'text'
  div.style.color = `var(--${textColor})`
  div.textContent = `${status} Step ${step} `
}

const getStatus = (result, step) => {
  const passed = result === 1
  const failed = result === 0
  const starting = step === 1 && result === null
  const currentStep = starting || failed
  return (currentStep && '⚪️') || (passed && '🟣') || '⚫'
}
