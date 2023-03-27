import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./Home/Index";
import Dashboard from "./pages/dashboard/Index";

export default function Layout() {
    return (
        <Router>
            <div>
                <Switch>
                    {/*<Route path="/login">*/}
                    {/*    <Login/>*/}
                    {/*</Route>*/}
                    {/*<Route path="/errorscope">*/}
                    {/*    <ErrorScope/>*/}
                    {/*</Route>*/}
                    <PrivateRoute path="/dashboard">
                        {/*<Header/>*/}
                        {/*<Sidebar/>*/}
                        <Dashboard/>
                        {/*<Footer/>*/}
                    </PrivateRoute>
                    <PrivateRoute path="/">
                        {/*<Header/>*/}
                        {/*<Sidebar/>*/}
                        <Home/>
                        {/*<Footer/>*/}
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

function PrivateRoute({children, ...rest}) {
    console.log('children', children);
    console.log('props', rest);
    getUserInfoAndCheckScopes(rest.path);
    return (
        <Route{...rest}>{children}</Route>
    );
}

const getUserInfoAndCheckScopes = (path) => {
    console.log('Check auth', path)
}
