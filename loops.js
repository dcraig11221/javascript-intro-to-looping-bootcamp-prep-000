let array = []

function forLoop(array) {
	for (let i = 0; i < 25; i++) {
		if (i < 1) {
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
