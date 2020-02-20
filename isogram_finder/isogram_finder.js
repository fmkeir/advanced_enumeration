const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('');
}

// IsogramFinder.prototype.isIsogram = function () {
//   for (var i = 0; i < this.word.length; i++) {
//     if (this.word.slice(0,i).includes(this.word[i])) {
//       return false;
//     }
//   }
//   return true;
// };

IsogramFinder.prototype.isIsogram = function () {
  return !this.word.some((letter, index, word) => {
    return word.slice(0, index).includes(letter)
  });
};


module.exports = IsogramFinder;
