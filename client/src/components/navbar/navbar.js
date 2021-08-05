import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import HomeIcon from '@material-ui/icons/Home';
import clsx from 'clsx';
import StoreIcon from '@material-ui/icons/Store';
import CategoryIcon from '@material-ui/icons/Category';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Image } from 'semantic-ui-react'
import AddBoxIcon from '@material-ui/icons/AddBox';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Logo from '../../assets/outgrownLogo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


function ElevationScroll(props) {
  const { children, window } = props;

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

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function NavBar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

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
      /* onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)} */
    >
      <List>
        <ListItemLink button href="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemLink>
        
        <ListItemLink button>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemLink>

        <ListItem button onClick={handleClickSubMenu}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List  
            component="div"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Newborn Items
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button>
              <ListItemLink button>
                Toys
              </ListItemLink>
            </ListItem>
            <ListItem button>
              <ListItemLink button>
                Clothes
              </ListItemLink>
            </ListItem>
            <ListItem button>
              <ListItemLink button>
                Travel
              </ListItemLink>
            </ListItem>
            <ListItem button>
              <ListItemLink button>
                Nursery
              </ListItemLink>
            </ListItem>
          </List>

          <List  
            component="div"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Todler Items
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button>
              <ListItemLink button>
                Toys
              </ListItemLink>
            </ListItem>
            <ListItem button>
              <ListItemLink button>
                Clothes
              </ListItemLink>
            </ListItem>
            <ListItem button>
              <ListItemLink button>
                Travel
              </ListItemLink>
            </ListItem>
            <ListItem button>
              <ListItemLink button>
                Nursery
              </ListItemLink>
            </ListItem>
          </List>
        </Collapse>
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
        <ListItemLink button href='/login'>
            <ListItemIcon>
              <ArrowForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Log In" />
          </ListItemLink>


          <ListItemLink button href='/signup'>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Up" />
          </ListItemLink>

          <ListItemLink button href='#'>
            <ListItemIcon>
              <ShoppingBasketIcon />
            </ListItemIcon>
            <ListItemText primary="Basket" />
          </ListItemLink>
      </List>
    </div>
  );

  const list3 = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List  
            component="div"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Newborn Items
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button>
              <ListItemLink button>
                Toys
              </ListItemLink>
            </ListItem>
            <ListItem button>
              <ListItemLink button>
                Clothes
              </ListItemLink>
            </ListItem>
            <ListItem button>
              <ListItemLink button>
                Travel
              </ListItemLink>
            </ListItem>
            <ListItem button>
              <ListItemLink button>
                Nursery
              </ListItemLink>
            </ListItem>
          </List>

          <List  
            component="div"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Todler Items
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button>
              <ListItemLink button>
                Toys
              </ListItemLink>
            </ListItem>
            <ListItem button>
              <ListItemLink button>
                Clothes
              </ListItemLink>
            </ListItem>
            <ListItem button>
              <ListItemLink button>
                Travel
              </ListItemLink>
            </ListItem>
            <ListItem button>
              <ListItemLink button>
                Nursery
              </ListItemLink>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickSubMenu = () => {
    setOpen(!open);
  };
  const mobileMenuId = 'primary-search-account-menu-mobile';
  return (
    <div >
        <React.Fragment>
          <CssBaseline />
          <ElevationScroll {...props}>
            <div className={classes.grow} >
            <div className={classes.sectionDesktop}>  
              <AppBar color='white'>
              <Toolbar>
                <Image src={Logo} size ="small" href="/"/>
                <Button color="inherit" href="/">Home</Button>
                <Button color="inherit">Marketplace</Button>
                <Button onClick={handleClick}>
                  Categories
                </Button>

                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {list3('right')}
                </Menu>
                
                <div className={classes.grow} />
                <Button color="inherit" href="/login">Login</Button>
                <Button color="inherit" href="/signup">Sign up</Button>
              </Toolbar>
            </AppBar>
            </div>
            <div className={classes.sectionMobile}>
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
                      
                      <div className={classes.grow} />
                      <Image src={Logo} size ="small" fluid centered/>
                      <div className={classes.grow} />
                      <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={toggleDrawer('right', true)}
                        color="inherit"
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
                  
                </div>
            </div>
          </ElevationScroll>
          <Toolbar />
        </React.Fragment>

      
    </div>
  );
}
