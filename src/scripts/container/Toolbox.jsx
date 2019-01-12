import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import { compose } from 'recompose'
import Highlighter from './Highlights.jsx'
import ext from '../utils/ext'

class Toolbox extends Component {

    state = {
        // Properties
    }

    render() {
        const { session: store, ...rest } = this.props

        return (
            <Fragment>
                <button onClick={()=>{store.dispatch('toggleBoolean', 'highlighter')}}>Toggle Highlighter</button>
                {store.highlighter && <Highlighter highligher={this.state.highligher} />}
            </Fragment>
        )
    }
}

export default compose(
    inject('session'),
    observer
)(Toolbox)