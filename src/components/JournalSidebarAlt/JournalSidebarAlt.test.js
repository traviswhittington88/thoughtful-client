import React from 'react'
import ReactDOM from 'react-dom'
import JournalSidebarAlt from './JournalSidebarAlt'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<JournalSidebarAlt />, div);

  ReactDOM.unmountComponentAtNode(div);
});