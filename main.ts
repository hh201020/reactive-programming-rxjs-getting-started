import { Observable } from "rxjs";

let source = Observable.onErrorResumeNext(
    Observable.of(1),
    Observable.from([2,3,4]),
    Observable.throw(new Error("Stop!")),
    Observable.of(5)
).catch( e => {
    console.log(`caught: ${e}`);
    return Observable.of(10);
})

source.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log('complete')
)