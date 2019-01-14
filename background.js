

chrome.runtime.onMessage.addListener(
    function(message, callback) {
      console.log(message);
      if (message === "INJECT_REACT_APP"){
        chrome.tabs.executeScript({
          file: './static/js/bundle.js'
        });
      }
   });
