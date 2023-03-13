var c = 0
while (c != 6) {
    console.log(`${c}...`)
    c ++
}
c -= 1
console.log('--------')
do {
    console.log(`${c}...`)
    c -= 1
} while (c >= 0)
console.log('---------')
for (var c = 0 ; c <= 10 ; c++) {
    console.log(`${c}..`)
}