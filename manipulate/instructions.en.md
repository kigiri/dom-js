## Manipulate

### Instructions

Now that the plans are ready, the construction is about to begin.

- step 1: The first thing to do is to build the structure, which will contain all the materials.

```js
const build = (tag = 'div') => {
  /* Write a function which creates and returns a HTML element of the type passed as 1st argument */
  const element = document.createElement(tag)
  return element
}
```

- step 2: You have at your disposal some raw concrete material, that needs to be turned into 80 bricks.

```js
const buildBricks = (amount = 80) => {
  /* Write a function which creates and returns the `amount` of bricks passed as argument - each brick has to be a `div` and have the className 'brick' */
  const array = [...Array(amount).keys()]
  const bricks = array.map(() => {
    const brick = build('div')
    brick.className = 'brick'
    return brick
  })
  return bricks
}
```

- step 3: Until now, you were just creating elements without placing them in any context. In order to make your created elements appear, you first have to append a structure to the parent environment.

```js
const append = (container, element) => {
  /* Write a function which appends the HTML `element` into the HTML `container` passed as arguments */
  container.appendChild(element)
}
```

- step 4: And finally, you have to append your bricks into your structure to make the tower hold and stand.

```js
const assemble = (container, elements, idPrefix = 'brick') => {
  /* Write a function which gives a unique `id` property to each elements of the `elements` argument - which is an array -  and appends it into the `container` */
  // hint: the `id` has to use the `idPrefix` argument and be numbered between 1 and 80, for example: `brick44`
  elements.map((e, i) => {
    append(container, e)
    e.id = `${idPrefix}${i + 1}`
  })
}
```

- step 5: As any construction work, there is a major problem: the tower is too heavy! You need to make it lighter. So now you need to remove the two exterior bricks from the top row of the structure.

```js
const removeTargets = (ids = ['brick77', 'brick80']) => {
  /* Write a function which gets the elements with the `ids` specified in argument, and remove them.  */
  ids.map((id) => {
    const target = document.getElementById(id)
    target.remove()
  })
}
```
