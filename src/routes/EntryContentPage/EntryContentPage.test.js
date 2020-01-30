import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import EntryContentPage from './EntryContentPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Router><EntryContentPage match={ {params: { entryid: 2  }}}/></Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});