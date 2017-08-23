let Rx = require('rxjs')

let source$ = Rx.Observable.interval(400).take(10)

source$.last().subscribe(console.log)

setTimeout(() => source$.subscribe(console.log), 4000)

let subject$ = new Rx.AsyncSubject()

subject$.subscribe(console.log)

subject$.next(1)
subject$.next(2)
subject$.next(3)
subject$.next(4)

subject$.subscribe(console.log)

subject$.next(5)
subject$.complete()

var numbers$ = Rx.Observable.timer(5000)
numbers$.subscribe(x => console.log(x))

Rx.Observable.from([10, 20, 30]).delayWhen(x => Rx.Observable.timer(x * 100)).subscribe(console.log)
