class Database {
    static instance;

    constructor() {
        if (Database.instance) {
            return Database.instance;
        }

        Database.instance = this;
    }

    connect() {
        console.log("Database Connected");
    }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2);