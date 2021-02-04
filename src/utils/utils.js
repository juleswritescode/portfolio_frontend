export function multiple(...fns) {
    return function gatherArgs(...args) {
        fns.forEach(function runFunction(fn) {
            fn(...args);
        });
    };
}

export function stopPropagation(e) {
    e.stopPropagation();
}
