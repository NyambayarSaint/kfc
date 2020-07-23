import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Logout from "./operations/logout";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Main from "./layout/Main";
import Integrations from './components/Integrations'

const CoIndex = () => {
    const match = useRouteMatch()
    const menu = [
        {name: 'Dashboard', path: match.path, component: Main},
        {name: 'Integrations', path: match.path+'/integrations', component: Integrations},
    ]
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar menu={menu} />
                    <Switch>
                        {menu.map((comp,i)=>i===0?<Route key={'rt'+i} exact path={comp.path} component={comp.component} />:<Route key={'rt'+i} path={comp.path} component={comp.component} />)}
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default CoIndex;