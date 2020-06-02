## Pimp my style

### Instructions

Check the `styles` array in `data.js` at your disposal, and the `index.html`.
You have this button:

```html
<div class="button">Pimp my style</div>
```

On each click on the page, a function `pimp` is triggered.
Write the body of that function so that the button class is altered:

- Add in order the next class of the `styles` array
- When the end of the array is reached, remove backwards each class
- Toggle the class 'unpimp' when removing classes

```
Example for a `styles` array with only 3 classes:

Page load --> <div class="button"></div>

...adding
Click 1 --> <div class="button one"></div>
Click 2 --> <div class="button one two"></div>

...toggling `unpimp`
Click 3 --> <div class="button one two three unpimp"></div>

...and removing backwards
Click 4 --> <div class="button one two unpimp"></div>
Click 5 --> <div class="button one unpimp"></div>
Click 6 --> <div class="button"></div>
```
