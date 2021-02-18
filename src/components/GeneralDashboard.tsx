import * as React from 'react';
import LearnerDashboard from './Learner/Dashboard';
import AdminDashboard from './Admin/Dashboard';


/* Determine which dashboard to show(Learner/Admin) 
find a way to determine user role and render dashboards accordingly
*/


const GeneralDashboard =()=> {
    return "3"==="3"? <LearnerDashboard /> : <AdminDashboard />;
};

export default GeneralDashboard;
