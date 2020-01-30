import React from 'react'
import ReactDOM from 'react-dom'
import AddJournalForm from './AddJournalForm';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<AddJournalForm />, div);

  ReactDOM.unmountComponentAtNode(div);
});