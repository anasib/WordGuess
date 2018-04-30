function Letter(character) {
	this.character = character;
	this.show = false;
	if (this.character === '') 
        this.show = true;
        
        console.log(character);
}

Letter.prototype.printInfo = function() {
	if (this.show) {
		return this.character;
	}
	return ' _ ';
}

// var letter = new Letter(this.character);
// letter.printInfo();

module.exports = Letter;