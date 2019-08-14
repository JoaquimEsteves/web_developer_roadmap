import React, { PureComponent } from 'react';

class CounterButton extends PureComponent<{color: string}, {count: Number}> {
    constructor(props = {color:'green'}) {
        super(props);
        this.state = {
            count: 0
        }
    }

    updateCount = () => {
        this.setState({ count: +this.state.count + 1 });
    }

    render() {
        console.log('CounterButton Rendered');
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                Count: {this.state.count}  Yo
            </button>
        );
    }
}

export default CounterButton;