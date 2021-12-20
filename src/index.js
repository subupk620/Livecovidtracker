import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"

ReactDOM.render( 
  //use <></> ya react.fragment ya <div> ya []
  <>
   <App></App>
  </>,
  document.getElementById('root')
);

// in javascript
//var h1 = document.createElement("h1");
//h1.innerHTML = "Hello World Hello World!!!";
//document.getElementById("root").appendChild(h1); 