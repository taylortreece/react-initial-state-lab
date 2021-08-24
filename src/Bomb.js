// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount,
            bombMessage: "The timer has started... "
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => {this.timer()}, 1000)
    }

    timer = () => {
        if(this.state.secondsLeft <= 1) {
            clearInterval(this.timerID)
            this.setState({bombMessage: "Boom!"})
        } else {
            this.setState({secondsLeft: this.state.secondsLeft - 1})
            this.setState({bombMessage: `${this.state.secondsLeft} seconds left before I go boom!`})
        }
    }

    render() {
        return <h1>{this.state.bombMessage}</h1>
    };
}

export default Bomb
