import React, { useState, useEffect } from 'react';

import { useEthers } from '@usedapp/core'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DarkModeIcon from '@material-ui/icons/NightsStay';
import LightModeIcon from '@material-ui/icons/WbSunny';

import { PropsFromRedux } from '../containers/NavigationTopBarContainer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

export default function NavigationTopBar(props: PropsFromRedux) {
  const classes = useStyles()

  const { activateBrowserWallet, deactivate, account } = useEthers()

  const [localShowLeftMenu, setLocalShowLeftMenu] = useState(props.showLeftMenu)
  const [localDarkMode, setLocalDarkMode] = useState(props.darkMode)

  useEffect(() => {
    setLocalShowLeftMenu(props.showLeftMenu)
  }, [props.showLeftMenu])

  useEffect(() => {
    setLocalDarkMode(props.darkMode)
  }, [props.darkMode])

  return (
    <div className={classes.root}>
      <AppBar style={{background: 'linear-gradient(-90deg, #272727, #000000)'}} position="static">
        <Toolbar>
          <IconButton onClick={() => props.setShowLeftMenu(!localShowLeftMenu)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Material UI Web3
          </Typography>
          {account ? (
            <Button color="inherit" onClick={() => deactivate()}>Disconnect</Button>
          ) : (
            <Button color="inherit" onClick={() => activateBrowserWallet()}>Connect</Button>
          )}
          <IconButton color="inherit" onClick={() => props.setDarkMode(!localDarkMode)} aria-label="delete" className={classes.margin}>
            {localDarkMode ? <DarkModeIcon /> : <LightModeIcon/>}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}