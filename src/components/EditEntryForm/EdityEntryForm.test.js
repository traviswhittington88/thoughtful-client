import React from 'react'
import ReactDOM from 'react-dom'
import EditEntryForm from './EditEntryForm';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<EditEntryForm />, div);

  ReactDOM.unmountComponentAtNode(div);
});