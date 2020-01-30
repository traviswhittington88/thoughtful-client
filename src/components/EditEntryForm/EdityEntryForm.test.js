import React from 'react'
import ReactDOM from 'react-dom'
import EditEntryForm from './EditEntryForm';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<EditEntryForm match={ {params: { entryid: 2  }}} />, div);

  ReactDOM.unmountComponentAtNode(div);
});