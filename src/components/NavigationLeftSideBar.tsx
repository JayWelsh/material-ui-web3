import React, {useState, useEffect} from 'react';
import { withRouter, RouteComponentProps } from "react-router";

import makeStyles from '@mui/styles/makeStyles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ExampleIcon from '@mui/icons-material/Favorite';

import { PropsFromRedux } from '../containers/NavigationLeftSideBarContainer';

const navigationMenu = [
	{
		text: 'Home',
		path: '/',
		icon: <HomeIcon />
	},
    {
		text: 'Example',
		path: '/example',
		icon: <ExampleIcon />
	},
  {
		text: 'Dress-up',
		path: '/dressUp',
		icon: <ExampleIcon />
	},
];

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type PropsWithRouter = RouteComponentProps & PropsFromRedux;

function NavigationLeftSideBar(props: PropsWithRouter) {
  const classes = useStyles();

  const [localShowLeftMenu, setLocalShowLeftMenu] = useState(false)

  useEffect(() => {
    setLocalShowLeftMenu(props.showLeftMenu)
  }, [props.showLeftMenu])

  const toggleDrawer = (setOpen: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    props.setShowLeftMenu(setOpen)
  };

  return (
    <div>
        <React.Fragment key={'left'}>
            <Drawer anchor={'left'} open={localShowLeftMenu} onClose={toggleDrawer(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                <List>
                    {navigationMenu.map(item => 
                        <ListItem onClick={() => props.history.push(item.path)} button key={item.text}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    )}
                </List>
                </div>
            </Drawer>
        </React.Fragment>
    </div>
  );
}

export default withRouter(NavigationLeftSideBar)