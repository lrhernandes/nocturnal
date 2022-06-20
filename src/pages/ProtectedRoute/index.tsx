import * as React from 'react';
import { Navigate } from 'react-router-dom';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  // check if user token is stored to display referring route
  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      isAuthenticated = true;
    } else {
      isAuthenticated = false;
    }
    console.log(isAuthenticated);
  }, []);

  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
