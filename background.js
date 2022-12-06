// function callConsoleLog() {

// // chrome.devtools.inspectedWindow.eval("console.log(optimizely)");



  var state = optimizely.get("state");
  let tests = state.getExperimentStates();

  for (const [key, value] of Object.entries(tests)) {
    console.log(`${key}: ${JSON.stringify(value.variation)}`);
  }
// }

// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ['scripts.js']
//   });
// });

// window.onload = function () {
//   // Content script
//   // Listen for the event
//   window.addEventListener("FromPage", function (evt) {
//     /* message is in evt.detail */
//     console.log(evt);
//   }, false);

//   // Page context
//   var message = {/* whatever */ };
//   var event = new CustomEvent("FromPage", { detail: message });
//   window.dispatchEvent(event);
// }

// window.onload = function () {
//   let script = document.createElement('script');
//   document.body.appendChild(script);
//   console.log(window.optimizely);
// }


// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ['inject.js']
//   });
// });