import React, { useEffect } from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Blogs from '../Blogs/Blogs';
import { getProducts } from '../../actions/products';
import { fetchReviews } from '../../actions/reviews';
import useStyles from './styles';
import TopPicks from '../TopPicks/TopPicks';

const Home = ({ user, setCurrentId, prefersDarkMode, setCurrentBlog, currentCat, searchResult }) => {
    const dispatch = useDispatch();

    const classes = useStyles();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(fetchReviews());
    }, [dispatch]);

    return (
        <Container>
            <Grid container>
                <Grid item lg={8} md={12} sm={12}>
                    <Blogs searchResult={searchResult} currentCat={currentCat}  setCurrentBlog={setCurrentBlog} prefersDarkMode={prefersDarkMode} user={user} setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item lg={4} md={12} sm={12}>
                    <Typography variant="h4" className={classes.header}>Top Picks</Typography>
                    <TopPicks setCurrentBlog={setCurrentBlog}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
