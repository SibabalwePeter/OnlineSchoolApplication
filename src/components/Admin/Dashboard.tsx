import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

/* Must be like Rhodes dashboard for students */

class AdminDashboard extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <h1>Admin Dashboard</h1>
            </React.Fragment>
        );
    }
};

export default AdminDashboard;
