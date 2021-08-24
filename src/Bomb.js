// your Bomb code here!
import React, { Component } from 'react'


class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        };
    }

    timer = () => {
        if(this.secondsLeft === 0) {
            return "Boom!" 
        } else {
            let currentSecondsLeft = this.secondsLeft - 1
            this.setState({secondsLeft: currentSecondsLeft})
            return `${this.secondsLeft} seconds left before I go boom!`
        }
    }

    render() {
        return // setInterval(this.timer(), 1000)
    };
}

export default Bomb
