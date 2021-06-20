import React from 'react'
import { useSelector } from 'react-redux';
import { Grid, CircularProgress, Typography } from '@material-ui/core';

import useStyles from './styles';
import Blog from './Blog/Blog';

const Blogs = ({ user, setCurrentId, prefersDarkMode, setCurrentBlog, currentCat, searchResult }) => {
    const products = useSelector((state) => currentCat === 'All' ? state.products : state.products.filter(prod => prod.category === currentCat));
            
    const searchedProducts = useSelector((state) => state.products.filter(prod => prod.tags.find(tag => tag.search(searchResult) !== -1)));

    let latestProduct = products.slice(0);
    latestProduct = latestProduct.reverse().slice(0,10);
    
    const classes = useStyles();

    return (
        <>
            {!latestProduct.length ?
            <Grid className={classes.spinner} container justify='center' alignItems='center'>
                <Grid item>
                    <CircularProgress /> 
                    <Typography>Initial load takes time. Please wait...</Typography>
                </Grid>
            </Grid> : (
                <div className={classes.container}>
                    
                    { searchResult === '' ? 
                        <>
                            <Typography variant="h4" className={classes.header}>{currentCat === 'All' ?'Latest Blogs' : currentCat}</Typography>
                            <Grid className={classes.grid} container alignItems="stretch" spacing={3}>
                            {latestProduct.map((product) => (
                                <Grid item key={product._id} xs={12} sm={6}> 
                                    <Blog setCurrentBlog={setCurrentBlog} prefersDarkMode={prefersDarkMode} user={user} blog={product} setCurrentId={setCurrentId}/>
                                </Grid>
                            ))}
                            </Grid>
                        </> : 
                        <>
                        <Typography variant="h4" className={classes.header}>Search Results</Typography>
                        <Grid className={classes.grid} container alignItems="stretch" spacing={3}>
                        {searchedProducts.map((product) => (
                            <Grid item key={product._id} xs={12} sm={6}> 
                                <Blog setCurrentBlog={setCurrentBlog} prefersDarkMode={prefersDarkMode} user={user} blog={product} setCurrentId={setCurrentId}/>
                            </Grid>
                        ))}
                        </Grid>
                    </> 
                    }
                   
                </div>
            )}  
        </>
    )
}

export default Blogs
