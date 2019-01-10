console.log('taco');
const content = document.createElement('div');
content.innerHTML = `
  <div id="enhance-beyond"></div>
  <p>test</p>
`;

content.style = `
  width: 256px;
  height: 100vh;
  background-color: gray;
  position: fixed;
  right: 0px;
  top: 0px;
`;

document.body.appendChild(content);
