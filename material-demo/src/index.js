import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Table';
import Icons from './Icons'


ReactDOM.render(
  <React.StrictMode>
    <div id="top">
    <h1 id="title">Material Demo</h1>
    </div>
   <Component/>
    <Icons/>
  </React.StrictMode>,
  document.getElementById('root')
);

