import './components/array-container.js';
import './components/array-item.js';

import MyArray from './myArray.js';
import Visual from './visual.js';

const ARRAY_LENGTH = 70;

const $outerContainer = document.querySelector('.container');

const $shuffleBtn = document.querySelector('#shuffle');
const $bubbleSortBtn = document.querySelector('#bubble-sort');
const $mergeSortBtn = document.querySelector('#merge-sort');

const visual = new Visual($outerContainer, ARRAY_LENGTH);
const myArray = new MyArray(ARRAY_LENGTH);

visual.init();
visual.render(myArray.ref);

$shuffleBtn.addEventListener('click', () => {
  myArray.shuffle();
  visual.render(myArray.ref);
});

$bubbleSortBtn.addEventListener('click', () => {
  myArray.bubbleSort(visual.render.bind(visual));
});

// $mergeSortBtn.addEventListener('click', () => {
//   mergeSort(array.itemRefs);
// });
