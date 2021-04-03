import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'


import { STAKING_CONTRACT } from '../utils/constants'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: 15
    },
    title: {
        fontSize: 14,
    },
});

const HomePage = () => {
    const classes = useStyles();
    const { account } = useEthers()
    
    const userBalance = useEtherBalance(account)
    const stakingBalance = useEtherBalance(STAKING_CONTRACT)

    console.log({userBalance})

    return (
        <Container maxWidth="md">
            <h1>Home Page</h1>
            <div>
                {stakingBalance && (
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                ETH2 staking contract holds:
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {formatEther(stakingBalance)} ETH
                            </Typography>
                        </CardContent>
                    </Card>
                )}
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
                {userBalance && (
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Ether balance:
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {formatEther(userBalance)} ETH
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </div>
        </Container>
    )
};

export default HomePage;