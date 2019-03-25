# --inner-height

Adds an `--inner-height` CSS-variable to the document which represents the 
actual height of the viewport.

Based on https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

## How to use

In your html:
```html
<script src="true-view.js"></script>
```

In your CSS
```css
#thing {
  height: 100vh; // fallback
  height: var(--true-view-height);
}
```