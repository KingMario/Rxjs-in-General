let Rx = require('rxjs')

var subject = new Rx.Subject()

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
})
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
})

subject.next(1)
subject.next(2)
var source$ = Rx.Observable.from([1, 2, 3])
source$.subscribe(subject)
// #####################################
// var source$ = Rx.Observable.from([1, 2, 3])
// var subject = new Rx.Subject()
// var multicasted = source$.multicast(subject)
//
// // These are, under the hood, `subject.subscribe({...})`:
// multicasted.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// })
// multicasted.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// })
//
// // This is, under the hood, `source$.subscribe(subject)`:
// multicasted.connect()
//
// var source$ = Rx.Observable.interval(500)
// var subject = new Rx.Subject()
// var multicasted = source$.multicast(subject)
// var subscription1, subscription2, subscriptionConnect
//
// subscription1 = multicasted.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// })
// // We should call `connect()` here, because the first
// // subscriber to `multicasted` is interested in consuming values
// subscriptionConnect = multicasted.connect()
//
// setTimeout(() => {
//   subscription2 = multicasted.subscribe({
//     next: (v) => console.log('observerB: ' + v)
//   })
// }, 600)
//
// setTimeout(() => {
//   subscription1.unsubscribe()
// }, 1200)
//
// // We should unsubscribe the shared Observable execution here,
// // because `multicasted` would have no more subscribers after this
// setTimeout(() => {
//   subscription2.unsubscribe()
//   subscriptionConnect.unsubscribe() // for the shared Observable execution
// }, 2000)
// // #####################################
// var source$ = Rx.Observable.interval(500)
// var subject = new Rx.Subject()
// var refCounted = source$.multicast(subject).refCount()
// var subscription1, subscription2, subscription3
//
// // This calls `connect()`, because
// // it is the first subscriber to `refCounted`
// console.log('observerA subscribed')
// subscription1 = refCounted.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// })
//
// setTimeout(() => {
//   console.log('observerB subscribed')
//   subscription2 = refCounted.subscribe({
//     next: (v) => console.log('observerB: ' + v)
//   })
// }, 600)
//
// setTimeout(() => {
//   console.log('observerA unsubscribed')
//   subscription1.unsubscribe()
// }, 1200)
//
// // This is when the shared Observable execution will stop, because
// // `refCounted` would have no more subscribers after this
// setTimeout(() => {
//   console.log('observerB unsubscribed')
//   subscription2.unsubscribe()
// }, 2000)
//
// setTimeout(() => {
//   console.log('observerC subscribed')
//   subscription3 = refCounted.subscribe({
//     next: (v) => console.log('observerC: ' + v)
//   })
// }, 3000)
//
// setTimeout(() => {
//   console.log('observerC unsubscribed')
//   subscription3.unsubscribe()
// }, 4000)
