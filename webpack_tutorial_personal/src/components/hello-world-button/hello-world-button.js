import './hello-world-button.scss';

export class HelloWorldButton {

    buttonCssClass = 'hello-world-button';
    paragraphCssClass = 'hello-world-paragraph';

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add(this.buttonCssClass);
        const body = document.querySelector('body');
        button.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add(this.paragraphCssClass);
            body.appendChild(p);
        }
        body.appendChild(button);
    }
}