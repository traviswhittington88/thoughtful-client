import React from 'react'
import ReactDOM from 'react-dom'
import EditEntryPage from './EditEntryPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<EditEntryPage />, div);

  ReactDOM.unmountComponentAtNode(div);
});