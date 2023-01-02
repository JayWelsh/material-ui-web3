import React from 'react';
import {Routes, Route} from 'react-router-dom';

import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

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
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/example" element={<ExamplePage/>} />
                </Routes>
            </div>
        </Navigation>
    )
}

export default PageContainer;