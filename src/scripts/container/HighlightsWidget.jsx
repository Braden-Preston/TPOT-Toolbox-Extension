
import ReactDOM from 'react-dom'
import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

const $ = window.jQuery = require('jquery')

class HighlightsWidget extends Component {
    constructor() {
        super()
        this.state = {
            selectionNode: null,
            selectionStart: '',
            selectionEnd: '',
            selectionText: ''
        }
        this.onSelection = this.onSelection.bind(this)
    }

    componentDidMount() {
        window.addEventListener('mouseup', this.onSelection, false);
    }

    componentWillUnmount() {
        window.removeEventListener('mouseup', this.onSelection, false);
    }

    onSelection() {
        const _ = document.getSelection()
        const selectionNode = _.anchorNode
        const selectionStart = _.anchorOffset
        const selectionEnd = _.focusOffset
        const selectionText = selectionNode.textContent != null ? selectionNode.textContent.slice(selectionStart, selectionEnd) : ''
        const selectionLength = selectionEnd - selectionStart

        this.setState({
            selectionNode,
            selectionStart,
            selectionEnd,
            selectionText,
            selectionLength
        })

        // console.log(selectionText)
    }

    render() {
        const { lettersStore: store, ...rest } = this.props
        const showButton = this.state.selectionNode && this.state.selectionLength > 0

        return (
            <Fragment>
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

export default HighlightsWidget