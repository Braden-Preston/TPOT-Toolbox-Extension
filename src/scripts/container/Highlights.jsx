
import ReactDOM from 'react-dom'
import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import HighlightsWidget from './HighlightsWidget.jsx'
import HighlightsManager from './HighlightsManager.jsx'
import HighlightsListener from './HighlightsListener.jsx'

class Highlights extends Component {

    render() {
        const { lettersStore: store, ...rest } = this.props

        return (
            <Fragment>
                <h1>Highlighters</h1>
                <HighlightsWidget />
                <HighlightsManager />
                <HighlightsListener />
            </Fragment>
        )

    }
}

export default Highlights