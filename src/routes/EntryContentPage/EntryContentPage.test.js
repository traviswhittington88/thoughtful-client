import React from 'react'
import ReactDOM from 'react-dom'
import EntryContentPage from './EntryContentPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<EntryContentPage />, div);

  ReactDOM.unmountComponentAtNode(div);
});