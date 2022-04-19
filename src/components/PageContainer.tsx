import React from 'react';
import {Route, withRouter, Switch, RouteComponentProps} from 'react-router-dom';

import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import ExamplePage from '../pages/ExamplePage';
import DressUpPage from '../pages/game-folder/DressUpPage';

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
                    <Route path="/dressUp" exact render={(props) => dressUpRoute(props)} />
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

const dressUpRoute = (props: RouteComponentProps) => {
    return (
        <DressUpPage/>
    )
}

export default withRouter(PageContainer);