import React from 'react'
import ReactDOM from 'react-dom'
import EditJournalForm from './EditJournalForm';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<EditJournalForm />, div);

  ReactDOM.unmountComponentAtNode(div);
});