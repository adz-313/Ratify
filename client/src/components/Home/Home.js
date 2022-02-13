import React, { useEffect } from 'react';
import { Typography, Container, Grid } from '@material-ui/core';

import Blogs from '../Blogs/Blogs';

import useStyles from './styles';
import TopPicks from '../TopPicks/TopPicks';

const Home = ({ user, setCurrentId, prefersDarkMode, setCurrentBlog, currentCat, searchResult }) => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container>
                <Grid item lg={8} sm={12}>
                    <Blogs searchResult={searchResult} currentCat={currentCat}  setCurrentBlog={setCurrentBlog} prefersDarkMode={prefersDarkMode} user={user} setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item lg={4} sm={12}>
                    <Typography variant="h4" className={classes.header}>Top Picks</Typography>
                    <TopPicks setCurrentBlog={setCurrentBlog}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
