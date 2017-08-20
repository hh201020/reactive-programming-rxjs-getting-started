import {Observable} from "rxjs";

let source = Observable.fromEvent(document, 'mousemove');

source.subscribe(
    value => console.log(value),
    e => console.log(`'error: ${e}`),
    () => console.log('complete')
);

