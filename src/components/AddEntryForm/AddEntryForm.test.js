import React from 'react'
import ReactDOM from 'react-dom'
import AddEntryForm from './AddEntryForm';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<AddEntryForm />, div);

  ReactDOM.unmountComponentAtNode(div);
});