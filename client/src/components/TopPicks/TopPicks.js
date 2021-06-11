import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import TopPick from './TopPick/TopPick';

const TopPicks = ({ setCurrentBlog }) => {
    const products = useSelector((state) => state.products);
    let topPicks = products.slice(0);
    topPicks = topPicks.sort((a, b) => b.likes.length - a.likes.length);
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Grid>
            {topPicks.map(tp => <TopPick setCurrentBlog={setCurrentBlog} topPick={tp} />)}
            </Grid>
        </Grid>
    )
}

export default TopPicks;
