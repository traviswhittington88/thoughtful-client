import React from 'react'
import ReactDOM from 'react-dom'
import EntryContent from './EntryContent';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<EntryContent />, div);

  ReactDOM.unmountComponentAtNode(div);
});