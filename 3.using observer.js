let Rx = require('rxjs')

let source$ = Rx.Observable.create(function subscribe (observer) {
  observer.next('x')
  observer.complete()
})

let observer = {
  next: console.log,
  error: console.log,
  complete: console.log
}
source$.subscribe(observer)
