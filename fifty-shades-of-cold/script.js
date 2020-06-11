import { choseShade } from './solution.js'
// copy-pasted code of the student instead of the import

const divs = [...document.querySelectorAll('div')]
divs.map((d) => {
  d.addEventListener('click', () => choseShade(d.textContent))
})
