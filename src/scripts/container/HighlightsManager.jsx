
import ReactDOM from 'react-dom'
import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

const $ = window.jQuery = require('jquery')

class HighlightsListener extends Component {
    constructor() {
        super()
        this.state = {
            selectionNode: null,
            selectionStart: '',
            selectionEnd: '',
            selectionText: ''
        }
        this.onSelection = this.addHighlight.bind(this)
    }

    componentDidMount() {
        window.addEventListener('mouseup', this.addHighlight, false);
    }

    componentWillUnmount() {
        window.removeEventListener('mouseup', this.addHighlight, false);
    }

    addHighlight() {
        // Add a highlight
    }

    render() {
        const showButton = this.state.selectionNode && this.state.selectionLength > 0
        
        return (
            <Fragment>
                {showButton && <Box anchor={this.state.selectionNode.parentElement} />}
                {showButton && <Box anchor={this.state.selectionNode.parentElement} />}
                {showButton && <Box anchor={this.state.selectionNode.parentElement} />}
                {showButton && <Box anchor={this.state.selectionNode.parentElement} />}
                {showButton && <Box anchor={this.state.selectionNode.parentElement} />}
            </Fragment>
        )
    }
}

class Box extends Component {
    render() {
        // console.log('element', this.props.anchor)
        return ReactDOM.createPortal(
            <h3>[ ]</h3>,
            this.props.anchor
        );
    }
}

export default HighlightsListener