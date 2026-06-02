class TaskQueue {
    constructor() {
        this.queue = Promise.resolve();
    }

    add(task) {
        this.queue = this.queue.then(() => task());
        return this.queue;
    }
}

const queue = new TaskQueue();

queue.add(() => Promise.resolve(console.log("Task 1")));
queue.add(() => Promise.resolve(console.log("Task 2")));
queue.add(() => Promise.resolve(console.log("Task 3")));