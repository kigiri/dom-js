const body = document.querySelector('body')

export const compose = () => {
  document.addEventListener('keydown', (e) => handleKey(e))
  setTimeout(
    () => document.removeEventListener('keydown', (e) => handleKey(e)),
    500,
  )
}

const handleKey = (e) => {
  const notes = [...document.querySelectorAll('.note')]

  if (e.keyCode === 8) {
    const last = notes[notes.length - 1]
    last && last.remove()
    return
  }

  if (e.keyCode === 27) {
    if (notes.length) {
      notes.forEach((note) => note.remove())
    }
    return
  }

  createNote(e)
}

const createNote = ({ keyCode }) => {
  const note = document.createElement('div')
  note.className = 'note'
  const letter = String.fromCharCode(keyCode).toLowerCase()
  note.textContent = letter
  note.style.background = `hsl(270, ${keyCode}%, ${keyCode}%)`
  body.appendChild(note)
}
