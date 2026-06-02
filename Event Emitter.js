class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(callback);
    }

    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(cb => cb(data));
        }
    }
}

const emitter = new EventEmitter();

emitter.on("login", user => {
    console.log(`${user} logged in`);
});

emitter.emit("login", "Dhanush");