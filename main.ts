import { Observable, Observer } from "rxjs";

let numbers = [1, 5, 10];
let source = Observable.from(numbers);

// An Observer needs 3 methods: next(), error(), complete()
class MyObserver implements Observer<number> {

    next(value) {
        console.log(`value: ${value}`);
    }

    error(e) {
        console.log(`'error: ${e}`);
    }

    complete() {
        console.log('complete');
    }
}

source.subscribe(new MyObserver());



