import React from 'react'
import ReactDOM from 'react-dom'
import EditJournalPage from './EditJournalPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<EditJournalPage />, div);

  ReactDOM.unmountComponentAtNode(div);
});