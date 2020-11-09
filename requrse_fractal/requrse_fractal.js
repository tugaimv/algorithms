function fractial(x){
  if (x === 1) {
    return 1
  }
  else  return x * fractial(x-1)
}

console.log(fractial(3))