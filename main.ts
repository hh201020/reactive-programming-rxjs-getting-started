import {Observable} from "rxjs";

let output = document.getElementById('output');
let button = document.getElementById('button');
let click = Observable.fromEvent(button, 'click');

function loadMovies (url:string) {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
        let movies = JSON.parse(xhr.responseText);
        movies.forEach(element => {
            let div = document.createElement('div');
            div.innerText = element.title;
            output.appendChild(div);            
        });
    });

    xhr.open("GET", url);
    xhr.send();
}

click.subscribe(
    e => loadMovies('movies.json'),
    e => console.log(`'error: ${e}`),
    () => console.log('complete')
);

