import {HelloWorldButton} from './components/hello-world-button/hello-world-button.js';
import addImage from './add-image';
import Heading from './components/heading/heading';
import './betterwebsite.scss';
import React from 'react';

const heading = new Heading();
// Lodash is here just for examples sake
heading.render('pretty dog');
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
addImage();

console.log('Production mode is: ' + process.env.NODE_ENV);