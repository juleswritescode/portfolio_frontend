var { style } = document.documentElement;
var cachedMouse;

export function highlightCursor(e) {
    var mouse = getMouse();
    setTimeout(() => {
        style.setProperty('--inner-mouse', 'var(--primary)');
        style.setProperty('--outer-mouse-size', '15px');
        mouse.style.setProperty('--size', '100%');
    }, 0);
}

export function removeHighlightEffect() {
    var mouse = getMouse();
    setTimeout(() => {
        style.setProperty('--inner-mouse', 'var(--gray)');
        style.setProperty('--outer-mouse-size', '25px');
        mouse.style.setProperty('--size', '60%');
    }, 0);
}

function getMouse() {
    var mouse;
    if (!cachedMouse) {
        mouse = document.getElementById('inner-mouse');
        cachedMouse = mouse;
    } else {
        mouse = cachedMouse;
    }

    return mouse;
}
