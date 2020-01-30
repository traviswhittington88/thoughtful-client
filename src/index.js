import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom'
import './index.css';
import App from './components/App/App';


ReactDOM.render(
<withRouter>
<App />
</withRouter>,
document.getElementById('root')
);

