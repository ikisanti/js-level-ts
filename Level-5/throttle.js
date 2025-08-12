// 💡 What is throttle?

// Throttle ensures that a function runs at most once every delay milliseconds, even if it's called many times.

// Unlike debounce, it doesn't wait for silence — it just limits the frequency.

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

const log = throttle(() => {
    console.log("Scroll event:", new Date().toLocaleTimeString());
}, 2000);

// Simulate rapid firing:
setInterval(log, 300); // Will only log every 2 seconds
