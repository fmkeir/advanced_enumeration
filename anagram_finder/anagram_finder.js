const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter(otherWord => {
    return this.prepare(otherWord) === this.prepare(this.word) && otherWord !== this.word;
  });
}

AnagramFinder.prototype.prepare = function (word) {
  return word.toLowerCase().split('').sort().join('');
}

module.exports = AnagramFinder;
