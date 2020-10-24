let Rx = require('rxjs')

let resultA
Rx.Observable.from(['a', 'b', 'c']).delay(100).subscribe((val) => resultA = val)
console.log(resultA)

let resultB
Rx.Observable.from(['a', 'b', 'c']).subscribe((val) => resultB = val)
console.log(resultB)
