import * as React from 'react';
import LearnerDashboard from './Learner/Dashboard';
import AdminDashboard from './Admin/Dashboard';


/* Determine which dashboard to show(Learner/Admin) 
find a way to determine user role and render dashboards accordingly
*/


const GeneralDashboard =()=> {
    return "1"==="1"? <LearnerDashboard /> : <AdminDashboard />;
};

export default GeneralDashboard;
