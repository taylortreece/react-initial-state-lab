// your Bomb code here!
import React from 'react'


class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        };
    }

    timer = () => {
        if(this.state.secondsLeft < 1) {
            return "Boom!" 
        } else {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }

    render() {
        return <h1>{this.timer()}</h1>
    };
}

export default Bomb
