const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter(otherWord => {
    return (otherWord.toLowerCase().split('').sort().join('')) === (this.word.toLowerCase().split('').sort().join('')) && otherWord !== this.word;
  });
}

module.exports = AnagramFinder;
