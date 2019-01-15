import React from 'react'
import ReactDOM from 'react-dom'
import Toolbox from './container/Toolbox.jsx'

import { Provider } from 'mobx-react';
import MobxStore from './stores'
import { toJS } from 'mobx'

const $ = window.jQuery = require('jquery')

// Clear all previous instances (dev only)
console.clear()
$('#TPOT').remove()

// Create MobX Store
const store = new MobxStore()

// setTimeout(function () {
//   store.session.whitelist=['cookies',]
// }, 2000);

// Initialize Empty App with MobX Port Connected Store
$(document.body).prepend($("<div/>")
  .attr('id', 'TPOT')
  .css('border', '1px solid red')
)

ReactDOM.render(
  <Provider {...store}>
    <Toolbox />
  </Provider>
  , document.getElementById('TPOT'));

