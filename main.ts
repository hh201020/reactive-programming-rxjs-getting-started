import {Observable} from "rxjs";

let output = document.getElementById('output');
let button = document.getElementById('button');
let click = Observable.fromEvent(button, 'click');

function loadMovies (url:string) {
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener("load", () => {
            if(xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
            } else {
                observer.error(xhr.statusText);
            }
        });

        xhr.open("GET", url);
        xhr.send();
    });
}

click.flatMap(e => loadMovies('movies.json'))
    .subscribe(
        renderMovies,
        e => console.log(`'error: ${e}`),
        () => console.log('complete')
    );

function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}

loadMovies("movies.json").subscribe(renderMovies);