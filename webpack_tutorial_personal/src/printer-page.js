import Heading from './components/heading/heading';
import './betterwebsite.scss';
import PrinterImage from './components/printer-image/printer-image';
import React from 'react';

const heading = new Heading();
// Lodash is here just for examples sake
heading.render('printer');
const printerImage = new PrinterImage();
printerImage.render();

console.log('Production mode is: ' + process.env.NODE_ENV);