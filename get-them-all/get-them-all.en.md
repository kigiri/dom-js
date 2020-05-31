## Get them all

### Instructions

You've been attributed the task to find Bonanno Pisano before he achieved the design of the Tower of Pisa, avoiding us nowadays all those lame pictures of people pretending to stop it from falling.

- step 1: You arrived at the architects' chamber to find him, but all you have in front of you is a bunch of unknown faces, and the only information you have is his id name.

```js
const areYou = (id = 'BonannoPisano') => {
  /* Write a function which returns the HTML element matching the id passed as argument */
}
```

- step 2: After you found Pisano and he told you he dropped the project, he gave you a hint to find the people who will take it over: the `classical` architects.

```js
const getClassMembers = (className = 'classical') => {
  /* Write a function which returns the HTML elements matching the CSS class name passed as argument */
  // hint: beware of the type of a HTML collection
}
```

- step 3: While talking with the classical architects, they advise you to gather all the information they have: the plans of the tower (which are images, <img />) and the positions of some geologists in the room (which are links, <a>).

```js
const getTagsElements = (tagName = 'img' || 'a') => {
  /* Write a function which returns the HTML elements matching the tag name passed as argument */
  // hint: beware of the type of a HTML collection
}
```

- step 4: Go and fetch the geologists in the audience to complete your team.

```js
const getGeologists = (cssQuery = 'body > div.person.geologist') => {
  /* Write a function which returns the HTML elements matching the query passed as argument */
  // hint: beware of the type of a HTML collection
}
```

- step 5: Now that you identified everyone you need to make that tower stand right,
  you want the remaining people to leave the room so you can work in peace.
  Say it personnally to Bonanno Pisano first...

```js
const getBonannoPisano = (cssQuery = '#BonannoPisano') => {
  // Write a function which returns the first HTML element matching the CSS query passed as argument
}
```

- step 6: ...and now to all the rest of the remaning people.

```js
const getRemainingPeople = (cssQuery = 'div.person', not = 'active') => {
  /* Write a function which returns the HTML elements matching the CSS query passed as first argument, but which don't have the CSS class passed as `not` argument */
  // hint 1: beware of the type of a HTML collection
  // hint 2: take a look at the `classList` property of a HTML element
  // hint 3: same as hint 1 for the `classList` property
}
```
