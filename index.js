
document.addEventListener('readystatechange', () =>  {
    if (document.readyState === "complete") {
        new Counter();
    }
});


class Counter {

    _counter = 0;

    constructor() {
        const div = document.createElement("div");
        document.body.appendChild(div);
        setInterval(() => {
            div.innerHTML = this._counter++;
        }, 600)
    }
}