const sidebarWidth = 256;

// Create the sidebar element
const content = document.createElement('div');

content.id = 'sidebar-container';
// const appUrl = chrome.extension.getURL('index.html');
const extensionOrigin = `chrome-extension://${chrome.runtime.id}`;
if (!location.ancestorOrigins.contains(extensionOrigin)) {
  const iframe = document.createElement('iframe');
  // Must be declared at web_accessible_resources in manifest.json
  iframe.src = chrome.runtime.getURL('index.html');
  iframe.id = 'sidebar-container';
  // Some styles for a fancy sidebar
  iframe.style.cssText = `
    position:fixed;
    top:0;
    right:0;
    display:block;
    width:300px;
    height:100%;
    z-index:1000;
    width: ${sidebarWidth}px;
    transition: ease .5s all;
  `;
  document.body.appendChild(iframe);
}

// adds the toggle button
// do we want a button to toggle open or do we want it to just open when you mouse near it and stay open intill you leave?
const button = document.createElement('div');
button.id = 'sidebar-toggle';
button.innerHTML = 'EB';
button.style = `
  position: fixed;
  top: 0px;
  right: ${sidebarWidth}px;
  background-color: #C53131;
  cursor: pointer;
  transition: ease .5s all;
  font-size: 1.7em;
`;

button.onclick = () => {
  const sidebar = document.getElementById('sidebar-container');
  const button = document.getElementById('sidebar-toggle');
  if (sidebar.style.right === '0px') {
    sidebar.style.right = `-${sidebarWidth}px`;
    button.style.right = '0px';
  } else {
    sidebar.style.right = '0px';
    button.style.right = `${sidebarWidth}px`;
  }
};
document.body.appendChild(button);

// make room for the sidebar on the page
// document.body.style.width = document.body.clientwidth - sidebarWidth; // TODO: this doesn't work

// Tell the backgound page to run the react code
// chrome.runtime.sendMessage("INJECT_REACT_APP", function(response) {
//   console.log('injected react app?');
// });
