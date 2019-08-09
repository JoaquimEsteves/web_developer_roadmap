import Printer from './f_icon6.png';
import './printer-image.scss';

class PrinterImage {
    render() {
        const img = document.createElement('img');
        img.src = Printer;
        img.alt = "Picture of Printer";
        img.classList.add('printer-image');

        document.querySelector('body').appendChild(img);
    }
}

export default PrinterImage;