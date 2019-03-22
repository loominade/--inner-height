// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

var setInnerheight = () => {
  var innerHeight = window.innerHeight;
  document.documentElement.style.setProperty('--inner-height', innerHeight + 'px');
}

window.addEventListener('resize', setInnerheight);

setInnerheight();