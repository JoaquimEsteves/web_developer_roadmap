import React from 'react';
import CounterButton from '../counterButton/counterButton';

/*const Header = React.memo(() => (
    <div className="header">
        <h1>Yo</h1>
    </div>
));*/

class Header extends React.Component {
    shouldComponentUpdate(_nextProps: any,_nextState: any) {
        return false;
    }
    
    render() {
        return (
            <div className="header">
                <h1>Yo</h1>
                <CounterButton color={"green"}/>
            </div>
        );
    }
}

export default Header;