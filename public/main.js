import MyArray from './myArray.js';
import Visual from './visual.js';

const ARRAY_LENGTH = 200;

const $outerContainer = document.querySelector('.container');

const $shuffleBtn = document.querySelector('#shuffle');
const $bubbleSortBtn = document.querySelector('#bubble-sort');
const $mergeSortBtn = document.querySelector('#merge-sort');
const $insertionSortBtn = document.querySelector('#insertion-sort');
const $quickSortBtn = document.querySelector('#quick-sort');

const visual = new Visual($outerContainer, ARRAY_LENGTH);
const array = new MyArray(ARRAY_LENGTH);

visual.init();

$shuffleBtn.addEventListener('click', () => {
  array.shuffle();
  visual.render(array.ref);
});

$bubbleSortBtn.addEventListener('click', () => {
  array.bubbleSort(visual.render.bind(visual));
});

$mergeSortBtn.addEventListener('click', () => {
  array.mergeSort(visual.render.bind(visual));
});

$insertionSortBtn.addEventListener('click', () => {
  array.insertionSort(visual.render.bind(visual));
});

$quickSortBtn.addEventListener('click', () => {
  array.quickSort(visual.render.bind(visual));
});
