function throttle(fn, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

window.addEventListener(
    "scroll",
    throttle(() => {
        console.log("Scrolling");
    }, 1000)
);