import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx';
import Tabs from './tabs.jsx';

const panes = [{title: 'title1',content:'content1'},{title: 'title2',content:'content2'},{title: 'title3',content:'content3'}];
function Root () {
  return (
      <div>
        <Clock />
        <Tabs panes={panes} />
      </div>
  );
}
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);

});
