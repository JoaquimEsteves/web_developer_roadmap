import React from 'react';
import './header.scss';

const Header = (searchChangeCB: ((event: React.ChangeEvent<HTMLInputElement>) => void)) => (
    <div className="header">
        <h1>Yo</h1>
        <div>
            <input className="searchBox" type='search' placeholder='yo' onChange={searchChangeCB} />
        </div>
    </div>
);

export default Header;