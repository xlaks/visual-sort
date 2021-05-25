import bubbleSort from './sort/bubble.js';
import mergeSort from './sort/merge.js';

export default class MyArray {
  constructor(length) {
    const arr = [];

    for (let i = 0; i < length; i++) {
      arr.push(i + 1);
    }

    this.ref = arr;
    this.length = length;
  }

  shuffle() {
    let currentIndex = this.ref.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
    // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.ref[currentIndex];
      this.ref[currentIndex] = this.ref[randomIndex];
      this.ref[randomIndex] = temporaryValue;
    }
  }

  async bubbleSort(render) {
    const startTime = new Date().getTime();
    console.log('bubble sort starts');
    await bubbleSort(this.ref, render);
    console.log('bubble sort ends', (new Date().getTime() - startTime) / 1000);
  }

  async mergeSort(render) {
    this.ref = await mergeSort(this.ref, render);
    render(this.ref);
  }
}
