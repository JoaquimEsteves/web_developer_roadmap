import React, { Component } from 'react';
import { pageProps } from './types';


interface AsyncState {
    component: React.FC<any>
}

export default function asyncComponent(importComponent: string) {
    class AsyncComponent extends Component<pageProps, AsyncState> {
        constructor(props: pageProps) {
            super(props);
            this.state = {
                component: () => {
                    return (
                        <h1>YO, routing error! You searched for {importComponent}</h1>
                    );
                }
            }
        }

        async componentDidMount() {
            try {
                let { default: component } = await import(`./${importComponent}`);
                this.setState({
                    component: component
                })
            } catch (error) {
                // will revert to default
            }
        }

        render() {
            return <this.state.component {...this.props} />
        }
    }

    return AsyncComponent;
} 