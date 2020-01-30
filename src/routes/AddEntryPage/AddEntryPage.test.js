import React from 'react'
import ReactDOM from 'react-dom'
import AddEntryPage from './AddEntryPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<AddEntryPage />, div);

  ReactDOM.unmountComponentAtNode(div);
});