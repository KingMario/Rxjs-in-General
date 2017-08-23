let Rx = require('rxjs')

let fibonacci$ = Rx.Observable.interval(400).take(10)
  .scan(x => [x[1], x[0] + x[1]], [0, 1])
  .pluck('0')

fibonacci$.subscribe({
  next: function observer (x) {
    console.log(x)
  }
})
