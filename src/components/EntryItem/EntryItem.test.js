import React from 'react'
import ReactDOM from 'react-dom'
import EntryItem from './EntryItem';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<EntryItem />, div);

  ReactDOM.unmountComponentAtNode(div);
});