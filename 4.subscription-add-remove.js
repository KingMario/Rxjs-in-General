let  Rx = require('rxjs')

var source1$ = Rx.Observable.interval(400)
var source2$ = Rx.Observable.interval(300)

var subscription = source1$.subscribe(x => console.log('first: ' + x))
var childSubscription = source2$.subscribe(x => console.log('second: ' + x))

subscription.add(childSubscription)

// setTimeout(() => {
//   subscription.remove(childSubscription)
// }, 1000)
//
setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subscription.unsubscribe()
}, 1200)
