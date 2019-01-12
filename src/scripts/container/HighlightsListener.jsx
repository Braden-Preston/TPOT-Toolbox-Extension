
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
        const selectionText = selectionNode.textContent.slice(selectionStart, selectionEnd)
        const selectionLength = selectionEnd - selectionStart

        this.setState({
            selectionNode,
            selectionStart,
            selectionEnd,
            selectionText,
            selectionLength
        })

        console.log(selectionText)
    }

    render() {
        return null
    }
}

export default HighlightsListener