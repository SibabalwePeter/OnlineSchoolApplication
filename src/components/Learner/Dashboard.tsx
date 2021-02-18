import * as React from 'react';
import Application from './Application'

/* Must be like Rhodes dashboard for students */

const Dashboard =()=> {
        return (
            <React.Fragment>
                <div className="container">
                    <ul className="nav nav-pills">
                        <li className="active"><a data-toggle="pill" href="#home">Home</a></li>
                        <li><a data-toggle="pill" href="#menu1">Menu 1</a></li>
                        <li><a data-toggle="pill" href="#menu2">Menu 2</a></li>
                        <li><a data-toggle="pill" href="#application">Application</a></li>
                    </ul>
                
                    <div className="tab-content">
                        <div id="home" className="tab-pane fade in active">
                            <h3>HOME</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div id="menu1" className="tab-pane fade">
                            <h3>Menu 1</h3>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div id="menu2" className="tab-pane fade">
                            <h3>Menu 2</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </div>
                            <div id="application" className="tab-pane fade"> <Application/> </div>
                    `   </div>
                </div>
            </React.Fragment>
        );
};

export default Dashboard;
