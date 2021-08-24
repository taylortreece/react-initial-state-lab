// your ImageSlider code here!
import React, { Component } from 'react'


class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0,
        };
    }

    render() {
        return `I am on slide ${this.state.currentSlideIndex}`
    }
}

export default ImageSlider