import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Grid } from '@mui/material';
import { AppRoute } from '../../common/AppRouteConfig';
import HomeMenu from '../menu/HomeMenu';

function PageBody() {
    return(
        <div>
            <Grid container justifyContent="center" alignItems="top" maxWidth="xs">
                <HomeMenu />
                <Grid item xs={10} alignItems="center">
                    <div className="contentBody">
                        <Switch>
                            <Redirect exact from="/" to={AppRoute[0].path} />
                            {AppRoute.map((route) => (
                                <Route 
                                    exact path={route.path}
                                    render={() => (<route.component key={Date.now()} />)}
                                    key={route.key}
                                />
                            ))}
                        </Switch>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default PageBody;