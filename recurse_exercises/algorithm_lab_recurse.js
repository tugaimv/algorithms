
function sum(x){
  if (x.length === 1) {
    return x.shift()
  }
  return  x.shift() + sum(x)
}

console.log(sum([1,2,3,4,56,7]))


function count_elem(y){
  if (y.length === 1) {
    return 1
  }
  y.shift()
  return 1 + count_elem(y)
}

console.log(count_elem([1,2,3,4,5,6,7,8,9,10]))


function biggest_elem(z){  
  if (z.length === 1 ){
    return z.shift()
  }
  return Math.max(z.shift(), biggest_elem(z))
}

console.log(biggest_elem([1,2,4,156,5,87]))