// import 'react-devtools' //Good

import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import ext from "./utils/ext";
import log from "./utils/log"
import Toolbox from './container/Toolbox.jsx'

import { Provider } from 'mobx-react';
import MobxStore from './stores'

const $ = window.jQuery = require('jquery')
// require('react-devtools-core/standalone')
//   .setContentDOMNode(document.body)
//   .startServer(6000);

// var devtools;
// try {
//     devtools = require('react-devtools-core/standalone');
// } catch (err) {
//     console.log(
//         err.toString() +
//         '\n\nDid you run `yarn` and `yarn run build` in packages/react-devtools-core?'
//     );
// }
// window.devtools = devtools;
// window.server = devtools
//     .setContentDOMNode(document.getElementById('container'))
//     // .setStatusListener(function(status) {
//     //     document.getElementById('loading-status').innerText = status;
//     // })
//     .startServer(8097);


// const React = require('react').React
// const ReactDOM = require('react-dom').ReactDOM


// Clear all previous instances
console.clear()
$('#TPOT').remove()

// Check hostname match
const match = window.location.hostname === 'www.thepathoftruth.com' || window.location.hostname === 'www.facebook.com'
console.log(`%cExtension Enabled: ${match}`, 'color: limegreen')





// Initialize App
if (match) {

  $(document.body).prepend($("<div/>")
    .attr('id', 'TPOT')
    .css('border', '1px solid red')
    )

  // Create store instance from background service
  const store = new MobxStore()
  
  // Listen for Page Unload events to save store state
 
  // store.session.dispatch('createStore')

  
  // console.log("MOBX")
  // console.log(store.session.highlighter)
  // store.session.toggleHighlighter()
  // console.log(store.session.highlighter)

  // Create listeners for updating store
  
  // Start Task Manager / Worker Threads

  ReactDOM.render(
    <Provider {...store}>
      <Toolbox />
    </Provider>
    , document.getElementById('TPOT'));
  console.log('%c[content] Toolbox Initialized!', 'color: limegreen')
  
} else {
  $('#TPOT').remove()
  console.log('Toolbox Removed')
}


// Listen for events for match changes to destroy or initialize the app

// Listen for events that call for the app to be disabled or hidden

