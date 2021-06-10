import React from 'react';
import clsx from 'clsx';
import {Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

export default function TemporaryDrawer({ categories, drawerState, setDrawerState, setCurrentCat }) {
  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open})
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key='All' onClick={() => setCurrentCat('All')} component={Link} to='/'>
          <ListItemText primary='All' />
        </ListItem>
        {categories.map(category => (
          <ListItem button key={category} onClick={() => setCurrentCat(category)} component={Link} to='/'>
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={drawerState[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}