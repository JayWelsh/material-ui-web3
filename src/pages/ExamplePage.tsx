import React from 'react';

import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Container from '@mui/material/Container';

import example2 from '../assets/svg/example2.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        minWidth: 275,
        marginBottom: 15
    },
    title: {
        fontSize: 14,
    },
    imageContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '250px',
    },
    exampleImage: {
        width: '30%',
        margin: theme.spacing(4),
    }
  }),
);

const ExamplePage = () => {

    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <div className={classes.imageContainer}>
                <img className={classes.exampleImage} src={example2} alt="example2" />
            </div>
        </Container>
    )
};

export default ExamplePage;