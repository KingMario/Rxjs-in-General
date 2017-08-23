let Rx = require('rxjs')

var source$ = Rx.Observable.create(function subscribe (observer) {
  var intervalId = setInterval(() => {
    observer.next('hi')
  }, 1000)

  return function unsubscribe () {
    clearInterval(intervalId)
  }
})

let subscription = source$.subscribe({
  next: x => console.log(x)
})

Rx.Observable.of(1, 2, 3).subscribe(console.log)

Rx.Observable.from([1, 2, 3]).subscribe(console.log)

setTimeout(() => subscription.unsubscribe(), 3000)
