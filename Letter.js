class Letter {
    constructor(character) {
        this.character = character;
        this.show = false;
        if (this.character === '')
            this.show = true;
        console.log(character);
    }
    printInfo() {
        if (this.show) {
            return this.character;
        }
        return ' _ ';
    }
}


// var letter = new Letter(this.character);
// letter.printInfo();

module.exports = Letter;