function binary_search(list, item){
    var low = 0
    var high = list.length - 1


    while (low <= high){
       var mid = Math.floor((low + high) / 2)
        var guess = list[mid]
        if (guess === item) {
            return mid
        } else if ( guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    } 
}

my_list = [1,3,5,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

const start = new Date().getTime()
console.log(binary_search(my_list, 30))
const end = new Date().getTime()
console.log(`Time: ${end-start}ms`)
