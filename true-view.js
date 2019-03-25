var setTrueView = function() {

  var innerHeight = window.innerHeight;
  document.documentElement.style.setProperty('--true-view-height', innerHeight + 'px');

  var viewbox = document.createElement('div');
  viewbox.setAttribute('style', 'position: fixed; top: 0; bottom: 0');
  document.body.appendChild(viewbox);
  bounding = viewbox.getBoundingClientRect();
  document.body.removeChild(viewbox);
  document.documentElement.style.setProperty('--true-view-top', (bounding.top *-1) + 'px');
}

window.addEventListener('resize', setTrueView);
window.addEventListener('scroll', setTrueView);
document.addEventListener('DOMContentLoaded', setTrueView);

setTrueView();