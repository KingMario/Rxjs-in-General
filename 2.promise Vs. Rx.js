let promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Promise resolved')
    resolve('foo from Promise')
  }, 1000)
  console.log('Promise started')
})

let source$ = require('rxjs').Observable.create((observer) => {
  console.log('Observable started')
  observer.next('foo')
  setTimeout(() => observer.next('bar from Observable'), 2000)
  setTimeout(() => observer.next('bar from Observable again'), 4000)
})

promise.then(console.log)

let subscription = source$.subscribe(console.log)
// Later:
// subscription.unsubscribe()
