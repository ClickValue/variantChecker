var script = document.createElement('script')
// let qubit = [];
// let optimize = [];
// let optimizely = [];
// let abtasty = [];

script.src = chrome.runtime.getURL('script.js')
document.head.appendChild(script);
console.log('injecting content script');