import './hello-world-button.css';

export class HelloWorldButton {
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add('hello-world-button');
        const body = document.querySelector('body');
        body.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add('hello-world-paragraph');
            body.appendChild(p);
        }
        body.appendChild(button);
    }
}