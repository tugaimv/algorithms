function qsort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    //var pivot = arr[0];
    // pivot can be random element all time, but im selected middle element
    let pivot = arr[Math.round(arr.length/2)]
    let pivot_idx = Math.round(arr.length/2)
    var lower = [];
    var upper = [];

    for (var i = 0; i <= arr.length; i++) {
      if (i !== pivot_idx){
        if (arr[i] <= pivot) {
          lower.push(arr[i]);
        } else if (arr[i] > pivot) {
          upper.push(arr[i]);
        }
      }
    }

    return [].concat(qsort(lower), [pivot], qsort(upper));
  }
}


console.log(qsort([777,56,23,256,1,12,98,2,6]))