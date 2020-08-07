import React from 'react';
import {Switch, Redirect} from 'react-router-dom';
import {RouteWithLayout} from './components';
import {AdminLayout} from './layouts'
import {Dashboard, Profile,TaskList, TaskEdit, NotFound} from './pages'

const Routes = () => {
    return (
        <Switch>
            <Redirect
                exact
                from="/"
                to="/dashboard"
            />
            <RouteWithLayout
                component={Dashboard}
                exact
                layout={AdminLayout}
                path="/dashboard"
            />
            <RouteWithLayout
                component={TaskList}
                exact
                layout={AdminLayout}
                path="/tasks"
            />
            <RouteWithLayout
                component={TaskEdit}
                exact
                layout={AdminLayout}
                path={["/tasks/edit", "/tasks/edit/:taskID"]}
            />
            <RouteWithLayout
                component={Profile}
                exact
                layout={AdminLayout}
                path="/profile"
            />

            <RouteWithLayout
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
  