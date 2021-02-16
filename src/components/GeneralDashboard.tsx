import * as React from 'react';
import LearnerDashboard from './Learner/Dashboard';
import AdminDashboard from './Admin/Dashboard';
import { useAuth0 } from '@auth0/auth0-react';


/* Determine which dashboard to show(Learner/Admin) 
find a way to determine user role and render dashboards accordingly
*/


const GeneralDashboard =()=> {
    const { user } = useAuth0();
    return "1"==="1"? <LearnerDashboard /> : <AdminDashboard />;
};

export default GeneralDashboard;
