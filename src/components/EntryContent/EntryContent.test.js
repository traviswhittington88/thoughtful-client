import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import EntryContent from './EntryContent';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Router><EntryContent /></Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});