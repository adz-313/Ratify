import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const TopPicks = ({ topPick, setCurrentBlog }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} component={Link} to='/blog' onClick={() => setCurrentBlog(topPick._id)}>
        <div className={classes.details}>
            <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
                {topPick.productName}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                {topPick.category}
            </Typography>
            </CardContent>
        </div>
        <CardMedia
            className={classes.cover}
            image={topPick.selectedFile}
            title="Live from space album cover"
        />
    </Card>
    )
}

export default TopPicks;

