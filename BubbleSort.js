//This is an optimized version of bubble sort written in javascript
const BubbleSort = (arr) => {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log("Sorted Array", BubbleSort([5, -1, 2, 3, 4, 0, -2, 1]));
