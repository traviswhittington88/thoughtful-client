import React from 'react'
import ReactDOM from 'react-dom'
import JournalItem from './JournalItem';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<JournalItem />, div);

  ReactDOM.unmountComponentAtNode(div);
});