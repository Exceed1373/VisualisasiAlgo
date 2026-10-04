'use strict';
/* TAHAP 1: navigasi Scene 2 -> Scene 3.
   TAHAP 2 (berikutnya): generator langkah (steps) tiap algoritma + pemutar animasi. */
const NAMA_SORTING = {
  bubble: 'Bubble Sort', selection: 'Selection Sort', insertion: 'Insertion Sort',
  quick: 'Quick Sort', merge: 'Merge Sort'
};
document.addEventListener('DOMContentLoaded', () => {
  const state = initPemilihAlgoritma(NAMA_SORTING);
});
