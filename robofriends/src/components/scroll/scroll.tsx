import React from 'react';
import './scroll.scss';

const Scroll = (props: { children: React.ReactNode; }) => (
    <div className="scrollCards">
        {props.children}
    </div>
);

export default Scroll;
