## Fifty shades of cold

### Instructions

You've been asked to freshen a webpage atmosphere by displaying shades of cold colors.

Check the `colors` array in `data.js` at your disposal.

- Create the function `generateClasses` which creates a `<style>` tag in the `<head>` tag and generates, for each color of `colors`, a class setting the `background` attribute and taking the color as value, like following:

```css
.indianred {
  background: indianred;
}
```

- Create the function `generateColdShades` which creates a `<div>` for each color of the `colors` array whose name contains `aqua`, `blue`, `turquoise`, `green`, or `purple`.\
  Each `<div>` must have the corresponding generated class and display the name of the color, like following:

```html
<div class="indianred">indianred</div>
```

- The function `choseShade` is triggered when clicking on a `div`.\
  Write the body of this function, which receives the shade of the clicked element as argument, and replaces all the other elements class by the chosen shade.
