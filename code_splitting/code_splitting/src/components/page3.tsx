import React from 'react';
import logo from '../logo.svg';
import { pageProps } from './types';



const Page3: React.FC<pageProps> = ({ onRouteChange }: pageProps) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Yo page 3</h1>
            </header>
            <button onClick={() => onRouteChange('page1')}>Page 1</button>
            <button onClick={() => onRouteChange('page2')}>Page 2</button>
        </div>
    );
}

export default Page3;