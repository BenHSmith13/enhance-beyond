const sidebarWidth = 256;

// Create the sidebar element
const content = document.createElement('div');
content.innerHTML = `
  <div id="enhance-beyond"></div>
`;
content.style = `
  width: ${sidebarWidth}px;
  height: 100vh;
  position: fixed;
  right: 0px;
  top: 0px;
`;
document.body.appendChild(content);

// make room for the sidebar on the page
document.body.style.width = document.body.clientwidth - sidebarWidth; // TODO: this doesn't work

// Tell the backgound page to run the react code
chrome.runtime.sendMessage("INJECT_REACT_APP", function(response) {
  console.log('injected react app?');
});
