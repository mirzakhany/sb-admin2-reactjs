import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import {RouteWithLayout, ProtectedRouteWithLayout} from './components';
import {AdminLayout, AuthLayout} from './layouts'
import {
        Dashboard,
        Profile,
        TaskList,
        TaskEdit,
        NotFound,
        Login,
        ForgotPassword
} from './pages'

const Routes = () => {
    return (
        <Switch>
            <Redirect
                exact
                from="/"
                to="/dashboard"
            />
            <ProtectedRouteWithLayout
                component={Dashboard}
                exact
                layout={AdminLayout}
                path="/dashboard"
            />
            <ProtectedRouteWithLayout
                component={TaskList}
                exact
                layout={AdminLayout}
                path="/tasks"
            />
            <ProtectedRouteWithLayout
                component={TaskEdit}
                exact
                layout={AdminLayout}
                path={["/tasks/edit", "/tasks/edit/:taskID"]}
            />
            <ProtectedRouteWithLayout
                component={Profile}
                exact
                layout={AdminLayout}
                path="/profile"
            />
            <RouteWithLayout
                component={Login}
                exact
                layout={AuthLayout}
                path="/login"
            />
            <RouteWithLayout
                component={ForgotPassword}
                exact
                layout={AuthLayout}
                path="/forgot-password"
            />
            <ProtectedRouteWithLayout
                component={NotFound}
                exact
                layout={AdminLayout}
                path="/not-found"
            />
            <Redirect to="/not-found"/>
        </Switch>
    );
};

export default Routes;
  