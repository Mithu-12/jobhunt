import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import './Dashboard.css'
import JobResume from '../JobResume/JobResume';
import BannerItems from '../BannerItems/BannerItems';
import HuntWork from '../HuntWork/HuntWork';
import Priceing from '../Pricing/Priceing';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  let { path, url } = useRouteMatch();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawer = (
    <div className="sideBar">
      {/* <Toolbar /> */}
        <Link className="itemsall" to={`${url}/addProduct`}>
          <span><i class="fas fa-tachometer-alt"></i></span>
           Dashboard</Link>
        <Link className="itemsall" to={`${url}/makeAdmin`}>
        <span><i class="fas fa-users"></i></span>
          Manage Orders</Link>
        <Link className="itemsall" to={`${url}/orderlist`}>
        <span><i class="fas fa-users"></i></span>
        Manage Product</Link>
        <Link className="itemsall" to={`${url}/makeAdmin`}>
        <span><i class="fas fa-users"></i></span>
          Make Admin</Link>
      
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ backgroundImage: 'linear-gradient(to right top, #051937, #292a64, #60338a, #a231a6, #eb12b2)'}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <div className="nav-sidebar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
           <Typography variant="h6" noWrap>
          [VIBASU.COM]
          </Typography>
         </Toolbar>
        <div className='nav-option'>
        <Typography variant="p"  className='nav-app'>
            Mithu
          </Typography>
          <NotificationsIcon/>
          <div className="nav-image">
          <img className="nav-image1" src="https://www.w3schools.com/w3css/img_avatar3.png" alt="" />
        </div>
        <ArrowDropDownIcon></ArrowDropDownIcon>
        </div>
        
          </div>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton className='close-icon' onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        {/* <Divider /> */}
        <div className="nav-header">
        <img className="header-image" src="https://www.w3schools.com/w3css/img_avatar3.png" alt="" />
        <div className="header-info">
          <h6>Mithu</h6>
          <p>Employe</p>
        </div>
        </div>
        {drawer}
        
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography>
        <Switch style={{marginTop: 0}}>
        <Route exact path={path}>
         <JobResume></JobResume>
        </Route>
        <Route path={`${path}/addProduct`}>
          <BannerItems></BannerItems>
        </Route>
        <Route path={`${path}/orderlist`}>
          < HuntWork/>
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <Priceing/>
          </Route>
          
      </Switch>
        </Typography>
       
      </main>
    </div>
  );
}
