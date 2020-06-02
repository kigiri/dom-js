import { colors } from './assets/data.js'

export const generateClasses = () => {
  document.head.appendChild(
    Object.assign(document.createElement('style'), {
      type: 'text/css',
      id: 'colors',
      innerHTML: colors
        .map((color) => `.${color} { background: ${color}; }`)
        .join('\n'),
    }),
  )
}

const body = document.querySelector('body')

const cold = ['aqua', 'blue', 'turquoise', 'green', 'purple']

export const generateColdShades = () => {
  const shades = colors.filter((color) => {
    for (const c of cold) {
      if (color.includes(c)) {
        return true
      }
    }
  })

  shades.forEach((c) => {
    const shade = document.createElement('div')
    shade.style.width = `150px`
    shade.style.height = '150px'
    shade.style.margin = '20px'
    shade.style.padding = '5px 8px'
    shade.className = c
    shade.textContent = c
    body.appendChild(shade)
  })
}

export const choseShade = (shade) => {
  const all = [...document.querySelectorAll('div')]
  all.forEach((a) => {
    if (!a.classList.contains(shade)) {
      a.classList.replace(a.className, shade)
    }
  })
}
