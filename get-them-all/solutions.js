export const areYou = (id = 'BonannoPisano') => {
  return document.getElementById(id)
}

export const getClassMembers = (className = 'classical') => {
  return [...document.getElementsByClassName(className)]
}

export const getTagsElements = (tagName = 'img' || 'a') => {
  return [...document.getElementsByTagName(tagName)]
}

export const getGeologists = (cssQuery = 'body > div.person.geologist') => {
  return [...document.querySelectorAll(cssQuery)]
}

export const getBonannoPisano = (cssQuery = '#BonannoPisano') => {
  return document.querySelector(cssQuery)
}

export const getRemainingPeople = (cssQuery = 'div.person', not = 'active') => {
  return [...document.querySelectorAll(cssQuery)].filter(
    (q) => ![...q.classList].includes(not),
  )
}
