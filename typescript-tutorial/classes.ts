abstract class UserAccount {
    name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }
}

class CharAccount extends UserAccount {
    private nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        console.log("---- GET -----")
        return this.level;
    }

    set setLevel(level: number) {
        this.level = level;
    }
}

const gustavo = new UserAccount("Gustavo", 28);
console.log(gustavo);
gustavo.logDetails();

const leticia = new CharAccount("Leticia", 23, "leticiamaster", 100);
leticia.logDetails();
console.log(leticia);

console.log(leticia.getLevel);
console.log(leticia.setLevel = 12);
