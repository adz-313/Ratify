import React from 'react';
import { Typography, Container, Grid, IconButton, Avatar, Toolbar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import Moment from 'moment';

import { deleteReview } from '../../../actions/reviews';
import useStyles from './styles';

const Reviews = ({ setEditReview, user, review }) => {
    const dispatch = useDispatch();

    const classes = useStyles();

    return (
        <Container>
            <Grid container className={classes.review}>
                <Grid container alignItems='center'>
                    <Grid item className={classes.nameTag}>
                        <Toolbar className={classes.toolbar}>
                            <Avatar className={classes.mr} alt={review.name} >{review.name.charAt(0)}</Avatar>
                            <Grid>
                                <Typography variant='body1'>
                                    {review.name}
                                </Typography>
                                Written on {`${Moment(review.createdAt).format('MMMM Do, YYYY')}`}
                            </Grid>
                        </Toolbar>
                    </Grid>
                    <Grid item>
                        <Toolbar>
                            <Typography variant="h6" className={classes.mr}>
                                Rated: {review.rating}/5
                            </Typography>
                            <IconButton disabled={!(user?.result?.googleId === review?.creator || user?.result?._id === review?.creator)} onClick={() => dispatch(deleteReview(review._id))}>
                                <DeleteIcon />
                            </IconButton>
                        </Toolbar>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant="body1">{review.comment}</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Reviews
