let array = []

function forLoop(array) {
	for (let i = 0; i < 25; i++) {
		if (i = 0) {
			array.push(`I am 1 strange loop.`)
		}
		else {
			array.push(`I am ${i+1} strange loops.`)
		}
	}
	return array
}
function whileLoop(n) {
	//console.log(n) use if you want first log to be "n", not if you want it to be "n-1"
	while (n > 0) {
		console.log(--n)
	}
	return 'done'
}
function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
	do {
		array.pop()
	}
	while (array.length > 0 && maybeTrue())
	return array
}
