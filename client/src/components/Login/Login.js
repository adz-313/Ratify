import React, { useState } from 'react';
import { Avatar, Button, TextField, Link, Grid, Box, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { signIn } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import Icon from './icon';

const initialState = {
    email: '',
    password: ''
}

const Login = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [formData, setFormData] = useState(initialState);

    const history = useHistory();

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type: AUTH, data: {result, token}});
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };
    
    const googleFailure = (error) => {
        console.log(error);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(signIn(formData, history));
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <GoogleLogin 
                        clientId='87655007486-9kio949ci7v43ih5j3c751irtmmvqmeq.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button 
                                className={classes.submit}
                                color='primary'
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                                variant='contained'
                            >
                                Sign in with Google
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    />
                    <Grid container>
                        <Grid item>
                            {/* <Typography component={Link} to='/Register' variant="body2">Don't have an account? Sign Up</Typography> */}
                            <Link href="/Register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default Login
