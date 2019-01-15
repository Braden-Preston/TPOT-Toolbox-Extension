import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import Highlighter from './Highlights.jsx'
import { action, computed } from 'mobx';

@observer class Toolbox extends Component {

    @computed get match() {
        return this.props.session.whitelist.some((entry) => { return entry === window.location.hostname } )
    }

    @action componentDidMount() {
        console.log('%c[content] Toolbox Initialized!', 'color: limegreen')
        console.log(`%c[contnet] Extension Enabled: ${this.match}`, 'color: limegreen')
    }

    render() {
        const { session: store, ...rest } = this.props

        return (
            <Fragment>
                <button onClick={()=>{ store.dispatch('toggleEntry', {property: 'whitelist', value: window.location.hostname}) }}>{this.match ? 'Disable' : 'Enable'}</button>
                {this.match && 
                    <div id="Toolbox">
                        <button onClick={() => { store.dispatch('toggleBoolean', 'highlighter') }}>Toggle Highlighter</button>
                        {store.highlighter && <Highlighter highligher={true} />}
                    </div>
                }
            </Fragment>
        )
    }

}

export default inject('session')(Toolbox)

// export default compose(
//     inject('session'),
//     observer
// )(Toolbox)