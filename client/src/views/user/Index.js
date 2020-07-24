import React, {useEffect, useState} from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Main from "./layout/Main";
import Integrations from './components/Integrations'
import { FacebookProvider, Initialize } from 'react-facebook';
import {UserContext} from './UserContext';

const CoIndex = () => {

    const match = useRouteMatch()

    const menu = [
        {name: 'Dashboard', path: match.path, component: Main},
        {name: 'Integrations', path: match.path+'/integrations', component: Integrations},
    ]
    const [authInfo, setAuthInfo] = useState({status: false, name: ''})
    const [token, setToken] = useState(null)

    const login = () => {
        window.FB.login(function(response) {
            console.log(response);
            setToken(response.authResponse.accessToken)
            window.FB.api('/me','GET',{"fields":"id,name"},(res2) => setAuthInfo({status: true, name: res2.name}));
        }, {scope: 'pages_read_engagement'});
    }

    return (
        <FacebookProvider appId="2954126181364774">
            <Initialize>
                <UserContext.Provider value={{token, setToken}}>
                    <Header user={authInfo} login={login} />
                    {token ?
                        <div className="container-fluid">
                            <div className="row">
                                <Sidebar menu={menu} />
                                <Switch>
                                    {menu.map((comp,i)=>i===0?<Route key={'rt'+i} exact path={comp.path} component={comp.component} />:<Route key={'rt'+i} path={comp.path} component={comp.component} />)}
                                </Switch>
                            </div>
                        </div>
                    : null}
                </UserContext.Provider>
            </Initialize>
        </FacebookProvider>
    );
};

export default CoIndex;