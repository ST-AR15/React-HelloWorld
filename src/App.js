import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './main.css'

import 'element-theme-default';

import Page1 from './page1';
import Page2 from './page2';


function App() {
    return (
        <Router>
            <div>
                <h1>选择</h1>
                <Route path="/Page1" component={Page1} />
                <Route path="/Page2" component={Page2} />                                                                                                                                                                                                                                                                                                                                                                                                                                       
            </div>
		</Router>
    );
}

export default App;
