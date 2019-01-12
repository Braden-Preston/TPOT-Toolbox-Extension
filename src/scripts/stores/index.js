import { configure } from 'mobx'

import Session from './session.js'

configure({ enforceActions: "observed" })

class MobxStore {
    constructor(options) {
        // console.log(options)
        this.session = new Session(options)
    }
}

// const mobxStore = new MobxStore()

export default MobxStore