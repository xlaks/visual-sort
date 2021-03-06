/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { delay } from '../utils/common';

async function insertionSort(arr, render) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];

      await delay();
      render(arr, current, arr[j]);
    }

    arr[j + 1] = current;
  }

  return arr;
}

export default insertionSort;
