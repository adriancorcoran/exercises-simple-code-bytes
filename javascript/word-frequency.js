class Sentence {
  constructor(sentence) {
    // take in sentence and set property
    this.sentence = sentence;
    // create a frequency object from this
    // init the object
    this.freq = {};
    // create the array
    let wordsArray = sentence.split(",");
    // loop through array
    wordsArray.forEach(word => {
      if (this.freq[word]) {
        this.freq[word]++;
      } else {
        this.freq[word] = 1;
      }
    });
  }

  // method - return the frequency object
  getFreq() {
    return this.freq;
  }

  // get highest count
  getMostFreq() {
    // create the return variable
    let returnWord = "";
    // count highest
    let count = 0;
    // loop through
    Object.keys(this.freq).forEach(key => {
      if (this.freq[key] > count) {
        // set the count
        count = this.freq[key];
        // set the word
        returnWord = key;
      }
    });
    // return
    return returnWord;
  }
}

// call create the class with the sentence
const s = new Sentence("olly,olly,in,come,free");
// get frequency of words
console.log(s.getFreq());
// get most frequent word
console.log(s.getMostFreq());
