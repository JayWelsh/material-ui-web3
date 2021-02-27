import React from 'react';
import {Route, withRouter, Switch, RouteComponentProps} from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import ExamplePage from '../pages/ExamplePage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  }),
);

const PageContainer = () => {

    const classes = useStyles();

    return (
        <Navigation>
            <div className={classes.root}>
                <Switch>
                    <Route path="/" exact render={(props) => homeRoute(props)} />
                    <Route path="/example" exact render={(props) => exampleRoute(props)} />
                </Switch>
            </div>
        </Navigation>
    )
}

const homeRoute = (props: RouteComponentProps) => {
    return (
        <HomePage/>
    )
}

const exampleRoute = (props: RouteComponentProps) => {
    return (
        <ExamplePage/>
    )
}

export default withRouter(PageContainer);