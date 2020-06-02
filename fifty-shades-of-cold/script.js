import { generateClasses, generateColdShades, choseShade } from './solution.js'
// copy-pasted code of the student instead of the import

generateClasses()
generateColdShades()

const divs = [...document.querySelectorAll('div')]
divs.map((d) => {
  d.addEventListener('click', () => choseShade(d.textContent))
})
