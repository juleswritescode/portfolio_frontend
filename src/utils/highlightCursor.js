var cachedMouse = null;

export function highlightCursor(e) {
  var mouse;

  if (!cachedMouse) {
    mouse = document.getElementById('inner-mouse');
    cachedMouse = mouse;
  } else {
    mouse = cachedMouse;
  }

  var { style } = document.documentElement;

  if (e.type == 'mouseenter') {
    style.setProperty('--inner-mouse', 'var(--primary)');
    style.setProperty('--outer-mouse-size', '15px');
    mouse.style.setProperty('--size', '100%');
  } else if (e.type == 'mouseleave') {
    style.setProperty('--inner-mouse', 'var(--gray)');
    style.setProperty('--outer-mouse-size', '25px');
    mouse.style.setProperty('--size', '60%');
  }
}
