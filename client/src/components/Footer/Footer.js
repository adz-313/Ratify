import React from 'react';
import { Typography } from '@material-ui/core';

import Copyright from '../Copyright/Copyright';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
            Ratify
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Project Ratify is a demo website built using MERN stack. To know more about Ratify, click&nbsp;
                <a style={{textDecoration: 'none'}} href='https://github.com/adz-313/Ratify'>here</a>
            </Typography>
            <Copyright />
      </footer>
    )
}

export default Footer
