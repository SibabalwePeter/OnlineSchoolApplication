import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Application from './components/Learner/Application';
import GeneralDashboard from './components/GeneralDashboard';
import AdminDashboard from './components/Admin/Dashboard';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/AdminDashboard' component={AdminDashboard} />
        <Route path='/NewApplication' component={Application} />
    </Layout>
);
