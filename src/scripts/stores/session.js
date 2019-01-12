// http://localhost:8097

import { observable, computed, action, isObservable, isComputed, autorun, toJS } from 'mobx';
import ext from '../utils/ext'
import { dispatch } from 'rxjs/internal/observable/range';

const clear = 'color: unset;'
const red = 'color: red;'
const orange = 'color: tomato;'
const gold = 'color: goldenrod;'
const lime = 'color: limegreen;'
const green = 'color: #4CAF50'
const teal = 'color: teal;'
const cyan = 'color: cyan;'
const blue = 'color: dodgerblue;'
const purple = 'color: blueviolet;'
const pink = 'color: magenta;'

export default class session {

    ///////////////////////////////////////////
    //  Connect MobX to Extension Messaging  //
    ///////////////////////////////////////////

    //
    // Mobx Messaging Observables 
    //
    
    @observable port = {};
    @observable portType = 'master'

    constructor() {
        try {
            ext.runtime.getBackgroundPage(() => { })
        } catch (error) {
            this.portType = 'remote'
        } finally {
            // Connect MobX Store as Master (background)
            if (this.portType === 'master') {
                ext.runtime.onConnect.addListener((comm) => {
                    const that = this
                    const tabID = comm.sender.tab.id
                    this.port[tabID] = comm;
                    this.port[tabID].onMessage.addListener(function (update) {
                        that.printRecievedAction(update.action, update.payload, tabID)
                        that.reduce(update.action, update.payload, tabID)
                    });
                    this.printMasterConnected(tabID)
                });
            }
            // Connect MobX Store as Remote (content, popup, options, etc.)
            if (this.portType === 'remote') {
                const that = this
                this.port = ext.runtime.connect();
                this.port.onMessage.addListener(function (update) {
                    that.rehydrate(update.action, update.payload)
                });
                this.printRemoteConnected()
                this.dispatch('createStore')
            }
        }
    }

    //
    // Primary Store Managmement Functions
    //

    // MASTER - Calls action on Master and provides new state to Remotes
    @action reduce = (action, payload, tabID) => {
        try {
            // Call the action on the Master store's state
            this[action](payload, tabID)
        } catch (error) {
            console.error(`Could not Call: ${action}()`, error)
        } finally {
            const channels = []
            if (action === 'createStore' && action === 'reloadStore') {
                this.printCalledAction(action, payload, tabID)
            } else {
                // Make call to active ports to rehydrate state on all Remotes
                for (const key in this.port) {
                    if (this.port.hasOwnProperty(key)) {
                        this.port[key].postMessage({ action, payload: { property: payload, value: this[payload]} });
                        channels.push(key)
                    }
                }
                this.printCalledAction(action, payload, channels)
            }
        }
    }

    // REMOTE - Messages Master with action to call with payload
    @action dispatch = (action, payload) => {
        this.port.postMessage({ action, payload });
        this.printDispatchedAction(action, payload)
    }

    // REMOTE - Receives updates from Master and creates Remote state changes
    @action rehydrate = (action, payload) => {
        try {
            if (Array.isArray(payload)) {
                let props = []
                payload.map((update)=>{
                    this[update.property] = update.value
                    props.push(update.property)
                })
                props = {property: props}
                this.printRehydratedState(action, props)
            } else {
                this[payload.property] = payload.value
                this.printRehydratedState(action, payload)
            }
        } catch (error) {
            this.printRehydratedStateFailed(action, payload, error)
        }
    }

    //
    // Auxilliary Store Managmement Functions
    //

    @action createStore = (payload, tabID) => {
        // console.log(tabID, toJS(this.port[tabID]).sender.tab.id)
        let props = Object.keys(this)
        let state = []
        props.map((prop) => {
            if (prop !== 'port' && prop !== 'portType' && typeof this[prop] !== 'function' ) {
                state.push({ property: prop, value: this[prop] })
            }
        })
        this.port[tabID].postMessage({ action: 'createStore', payload: state });
    }

    @action disconnectPort = (tab) => {
        delete this.port[tab]
        var remaining = Object.keys(this.port)
        console.log(`%c[background]     Disconnected Messaging Port: %c ${tab}`, 'color: goldenrod;', 'color: unset;')
        console.log(`%c[background]     Remaining Ports: %c ${remaining}`, 'color: goldenrod;', 'color: unset;')
    }

    // port disconnect

    //
    // Message Printing Utilities
    //

    printMasterConnected = (tabID) => {
        console.log(`%c[background] <=> Connected to Remote [content:${tabID}]`, green)
    }

    printRemoteConnected = () =>
        console.log(`%c[content] <=> Connected to Master`, green)
    
    printRecievedAction = (action, payload, tabID) => {
        console.log(`%c[background] <-- Recieved Action from [content:${tabID}]: %c ${action}()`, orange, clear)
        !!payload && console.log('%c                 Payload: ', orange, payload)
    }

    printDispatchedAction = (action, payload) => {
        console.log(`%c[content] --> Dispatched Action %c ${action}()`, blue, clear)
        !!payload && console.log(`%c              Payload: `, blue, payload)
    }

    printRehydratedState = (action, payload) => {
        console.log(`%c[content] <-- Rehydrated state after: %c ${action}()`, orange, clear)
        console.log(`%c              Updated: %c ${payload.property}`, orange, clear)
    }

    printRehydratedStateFailed = (action, state, error) => 
        console.error(`%c[content] <-- Failed to Hydrate: %c ${action}()`, orange, clear, error)

    printCalledAction = (action, payload, channels) => {
            console.log(`%c[background] --> Called Action %c ${action}()`, blue, clear)
            !!payload && console.log(`%c                 Payload: `, blue, payload)
            console.log(`%c                 Channel: %c ${channels}`, blue, clear)
    }

    ///////////////////////////////////////////
    //      Define Session Observables       //
    ///////////////////////////////////////////

    @observable language = "en_US";
    @observable highlighter = true;

    ///////////////////////////////////////////
    //      Actions, Computed, AutoRun       //
    ///////////////////////////////////////////

    @action toggleBoolean = (name) => {
        this[name] = !this[name]
        // console.log('toggled')
        // console.log('bool', this[name])
    }

    @action setString = (name, payload) => {
        this[name] = payload
    }

    @computed get appIsInSync() {
        return this.pendingRequestCount === 0
    }

    // log = autorun(()=>{
    //     console.log(this.highlighter)
    // })

}
