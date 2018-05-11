function forLoop(array) {
  let array = []
  for (let i = 0; i < 25; i++) {
    if (i = 0){
    array.push(`I am 1 strange loop.`)
    }
    else {
      array.push(`I am ${i + 1} strange loops.`)
    }
    return array
  }
}
