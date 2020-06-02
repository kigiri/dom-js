## Pimp my style

### Instructions

Create a function that will be fired on each click on the page which will alter the class of the button:

- Add to it, in order and for each click, the next class of the `styles` array
- When the end of the array is reached, remove backwards each class
- Toggle the class 'unpimp' when removing classes

```
Example:

Page load --> <div class="button"></div>

...adding
Click 1 --> <div class="button one"></div>
Click 2 --> <div class="button one two"></div>
Click 3 --> <div class="button one two three unpimp"></div>

...and removing backwards
Click 4 --> <div class="button one two unpimp"></div>
Click 5 --> <div class="button one unpimp"></div>
Click 6 --> <div class="button"></div>
```
