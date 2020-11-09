

function findSmallest(arr){
    var smallest = arr[0]
    var smallest_index = 0
    for (var i=0; i <= arr.length; i++){
        if (arr[i] < smallest) {
            smallest_index = i
            smallest = arr[i]
        }
    }
    return smallest_index
}

function selectionSort(arr){
    var newArr = []
    legnth = arr.length
    for (var i = 0; i < legnth; i++){
        var smallestIndex = findSmallest(arr)
        newArr.push(arr.splice(smallestIndex,1)[0])
    }
    return newArr
}

console.log(selectionSort([5, 3, 6, 2, 10]))