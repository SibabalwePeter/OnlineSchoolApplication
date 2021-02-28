import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FiLogOut, FiLogIn } from "react-icons/fi";

const Authentication = () => {
    const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

    const logOutBtn = (
      <span onClick={() => logout()}>
        Logout
        <FiLogOut style={{paddingLeft: "4px"}}/>
      </span>
    );

    const logInBtn = (
      <span onClick={() => loginWithRedirect()}>
        Login
        <FiLogIn style={{paddingLeft: "4px"}}/>
      </span>
    );
    
    return ( isAuthenticated ? logOutBtn : logInBtn );
};

export default Authentication;