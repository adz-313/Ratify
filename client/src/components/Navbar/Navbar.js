import React, { useState, useEffect } from 'react';
import { InputBase, Menu, MenuItem, Typography, AppBar, Toolbar, Button, Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchIcon from '@material-ui/icons/Search';
import { randomColor } from '../../constants/randomColor';

import useStyles from './styles';
import { LOGOUT } from '../../constants/actionTypes';
import Rating from '../../images/rating.png';

const Navbar = ({ user, setUser, setPrefersDarkMode, prefersDarkMode, drawerState, setDrawerState, setCurrentCat, setSearchResult }) => {
    const classes = useStyles();

    const history = useHistory();

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [avatarColor, setAvatarColor] = useState(null);

    useEffect(() => {
        if(!avatarColor) setAvatarColor(randomColor());
    },[]);

    const ITEM_HEIGHT = 48;

    const logout = () => {
        handleClose();
        dispatch({ type: LOGOUT });
        history.push('/');
        setUser(null);
    };

    const handleDarkMode = () => {
        setPrefersDarkMode(prev => !prev);
    }
    
    const handleSearch = (e) => {
        setSearchResult(e.target.value);
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton className={classes.iconBtn} onClick={() => setDrawerState({ ...drawerState, left: true})}>
                    <DehazeIcon />
                </IconButton>
                <Typography component={Link} to="/" className={classes.appName} variant="h4" onClick={() => setCurrentCat('All')} >Ratify</Typography>
                <img src={Rating} className={classes.navLogo} alt='Rating.png' />
                <div className={classes.search} >
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleSearch}
                    />
                </div>
                <IconButton className={classes.iconBtn} onClick={handleDarkMode}>
                    {prefersDarkMode ? <Brightness5Icon /> : <Brightness4Icon />}
                </IconButton>
                    {user ? 
                        <>
                            <Typography variant="body1" className={classes.mr}>{user.result.name}</Typography>
                            <Avatar style={{ backgroundColor: avatarColor }} className={classes.mr} alt={user.result.name} src={user.result.imageUrl}>{user.result?.name.charAt(0)}</Avatar>
                            <IconButton
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                                className={classes.iconBtn}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                                }}
                            >
                                <MenuItem component={Link} to="/form" onClick={handleClose}>Add Blog</MenuItem>
                                <MenuItem onClick={logout}>Logout</MenuItem>
                            </Menu>
                        </> : 
                        <Button component={Link} to='/login' className={classes.btnSignin}>Sign in</Button>
                    }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
