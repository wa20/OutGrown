import Logo from '../../assets/outgrownLogo.png'
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import clsx from 'clsx';
import StoreIcon from '@material-ui/icons/Store';
import CategoryIcon from '@material-ui/icons/Category';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Image } from 'semantic-ui-react'
import AddBoxIcon from '@material-ui/icons/AddBox';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function NavBar(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list1 = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItem>
      </List>
    </div>
  );

  const list2 = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Log In" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Up" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShoppingBasketIcon />
            </ListItemIcon>
            <ListItemText primary="Basket" />
          </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment>
          <CssBaseline />
          <ElevationScroll {...props}>
            <AppBar color='white'>
              <Toolbar>
                <IconButton 
                  onClick={toggleDrawer('left', true)} 
                  edge="start" 
                  className={classes.menuButton} 
                  color="inherit" 
                  aria-label="menu"
                >
                  <MenuIcon  />
                </IconButton>

                <SwipeableDrawer
                  anchor='left'
                  open={state['left']}
                  onClose={toggleDrawer('left', false)}
                  onOpen={toggleDrawer('left', true)}
                >
                  {list1('left')}
                </SwipeableDrawer>

                <Image
                  src= {Logo}
                  as='a'
                  size='tiny'
                  href='/'
                  target='_blank'
                  position='center'
                  className={classes.title} 
                />

                <IconButton 
                  onClick={toggleDrawer('right', true)} 
                  edge="start" 
                  className={classes.menuButton} 
                  color="inherit" 
                  aria-label="menu"
                  >
                    <PersonIcon  />
                </IconButton>

                <SwipeableDrawer
                  anchor='right'
                  open={state['right']}
                  onClose={toggleDrawer('right', false)}
                  onOpen={toggleDrawer('right', true)}
                >
                  {list2('right')}
                </SwipeableDrawer>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
          <Toolbar />
        </React.Fragment>

      
    </div>
  );
}

/* return (
  <div>

    {['left', 'right', 'top', 'bottom'].map((anchor) => (
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
    ))}
    
  </div>
); */

