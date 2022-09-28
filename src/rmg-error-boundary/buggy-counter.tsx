// This is taken from https://reactjs.org/docs/error-boundaries.html

import React from 'react';

export class BuggyCounter extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({ counter }: any) => ({
            counter: counter + 1,
        }));
    }

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <h1 onClick={this.handleClick}>Click me: {this.state.counter}</h1>;
    }
}
