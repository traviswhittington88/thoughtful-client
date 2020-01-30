import React from 'react'
import ReactDOM from 'react-dom'
import AddJournalPage from './AddJournalPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<AddJournalPage />, div);

  ReactDOM.unmountComponentAtNode(div);
});