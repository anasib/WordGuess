function Letter(character) {
	this.character = character;
	this.show = false;
	if (this.character === '') 
		this.show = true;
}

Letter.prototype.printInfo = function() {
	if (this.show) {
		return this.character;
	}
	return ' _ ';
}

module.exports = Letter;