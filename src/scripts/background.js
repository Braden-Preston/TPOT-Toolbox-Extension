import 'react-devtools'
import ext from "./utils/ext";
import log from "./utils/log";
import { observable, computed, action } from "mobx";
import MobxStore from './stores'

// import 'react-devtools' // good
console.clear()

console.log('%c[background] Started Extension Backend', 'color: limegreen;')

// Set up Store Here
const store = new MobxStore()
console.log('%c[background] Loaded New MobX Store from Disk', 'color: limegreen;')


ext.runtime.onInstalled.addListener(()=>{
  console.log(`%c[background] Installed TPOT Toolbox v.${ext.runtime.getManifest().version}`, 'color: limegreen;')
})

ext.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.action === "perform-save") {
      console.log("Extension Type: ", "/* @echo extension */");
      console.log("PERFORM AJAX", request.data);

      sendResponse({ action: "saved" });
    }
  }
);

// Disconnect MobX Messaging Ports on Tab exit
browser.tabs.onRemoved.addListener((tab)=>{
  store.session.disconnectPort(tab)
})


// var portFromCS;

// // function connected(p) {
// //   portFromCS = p;
// //   portFromCS.postMessage({greeting: "hi there content script!"});
// //   portFromCS.onMessage.addListener(function(data) {
// //     console.log("In background script, received message from content script")
// //     console.log(data.greeting);
// //   });
// // }

// ext.runtime.onConnect.addListener((p) => {
//   portFromCS = p;
//   portFromCS.postMessage({greeting: "hi there content script!"});
//   portFromCS.onMessage.addListener(function(data) {
//     console.log("In background script, received message from content script")
//     console.log(data.greeting);
//   });
// });

// ext.browserAction.onClicked.addListener(function() {
//   portFromCS.postMessage({greeting: "they clicked the button!"});
// });