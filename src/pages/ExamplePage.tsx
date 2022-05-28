import React from 'react';

import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useEthers } from '@usedapp/core'

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

    const { account } = useEthers();

    return (
        <Container maxWidth="md">
            <div className={classes.imageContainer}>
                <img className={classes.exampleImage} src={example2} alt="example2" />
            </div>
            {account && (
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Account:
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {account}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Container>
    )
};

export default ExamplePage;