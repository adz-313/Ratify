import React, { useState, useEffect } from 'react';
import { Typography, Paper, TextField, Container, Button, Grid } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useDispatch } from 'react-redux';

import { createReview } from '../../../actions/reviews';
import useStyles from './styles';

const ReviewForm = ({ user, pid }) => {

    const dispatch = useDispatch();

    const initialState = {
        comment: '',
        rating: 0,
        productId: pid
    }

    useEffect(()=> {
        setFormData(initialState);
        setFormData({...formData, productId: pid});
    },[pid]);

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createReview({...formData, name: user?.result?.name}));
    };

    const classes = useStyles();

    return (
        <Paper>
            <Typography className={classes.header} variant='h6'>Add your rating here</Typography>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Grid container>
                    <Grid sm={12} md={10} className={classes.gutter}>  
                        <TextField 
                            variant='outlined'
                            fullWidth
                            name='comment'
                            label='Comment'
                            value={formData.comment}
                            onChange={(e) => setFormData({...formData, comment: e.target.value})}
                        />  
                    </Grid>
                    <Grid sm={12} md={2} className={classes.gutter}>
                        <Typography>Rating:</Typography>
                        <Rating 
                            name="rating"
                            value={formData.rating}
                            onChange={(event, newValue) => {
                                setFormData({...formData, rating: newValue})
                            }}
                        />
                    </Grid>
                </Grid>
                <div className={classes.button}>
                    <Button disabled={!user?.result} type="submit" >Submit</Button>
                </div>
            </form>
        </Paper>
    )
}

export default ReviewForm
