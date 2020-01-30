import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import AddEntryPage from './AddEntryPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Router><AddEntryPage /></Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});