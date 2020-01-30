import React from 'react'
import ReactDOM from 'react-dom'
import JournalSidebar from './JournalSidebar';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<JournalSidebar />, div);

  ReactDOM.unmountComponentAtNode(div);
});