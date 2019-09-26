import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Avatar, Grid } from '@material-ui/core';
import { Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import ListItemLink from './ListItemLink';
import logo from './assets/img/logo.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: 64 }}
        >
          <Grid item xs={3}>
            <Avatar src={logo} />
          </Grid>
        </Grid>
        <Divider />
        <List>
          <ListItemLink to="/" primary="Dashboard" icon={DashboardIcon} />
        </List>
      </Drawer>
      <main className={classes.content}>
        <Route exact path="/" component={Dashboard} />
      </main>
    </div>
  );
}
