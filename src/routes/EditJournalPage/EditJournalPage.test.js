import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import EditJournalPage from './EditJournalPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Router><EditJournalPage /></Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});