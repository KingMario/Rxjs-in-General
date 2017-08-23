let Rx = require('rxjs')

var source$ = Rx.Observable.create(function (proxyObserver) {
  proxyObserver.next(1)
  proxyObserver.next(2)
  proxyObserver.next(3)
  proxyObserver.complete()
})
  .observeOn(Rx.Scheduler.async)

var finalObserver = {
  next: x => console.log('got value ' + x),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done')
}

console.log('just before subscribe')
source$.subscribe(finalObserver)
console.log('just after subscribe')
