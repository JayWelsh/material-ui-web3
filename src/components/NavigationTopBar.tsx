import React, { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/WbSunny';

import LogoDarkMode from '../assets/svg/logo.svg'
import LogoLightMode from '../assets/svg/logo.svg'

import { Web3ModalButton } from './Web3ModalButton';
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
      cursor: 'pointer',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

const NavigationTopBar = (props: PropsFromRedux) => {
  const classes = useStyles()

  let navigate = useNavigate();

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
          <IconButton
            onClick={() => props.setShowLeftMenu(!localShowLeftMenu)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            size="large">
            <MenuIcon />
          </IconButton>
          <img onClick={() => navigate('/')} height={'36px'} style={{marginRight: '10px', cursor: 'pointer'}} src={localDarkMode ? LogoDarkMode : LogoLightMode} alt="logo" />
          <Typography onClick={() => navigate('/')} variant="h6" className={classes.title}>
            Material UI Web3
          </Typography>
          <Web3ModalButton/>
          <IconButton
            color="inherit"
            onClick={() => props.setDarkMode(!localDarkMode)}
            aria-label="delete"
            className={classes.margin}
            size="large">
            {localDarkMode ? <LightModeIcon/> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationTopBar