import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { getProducts } from './actions/products';
import { fetchReviews } from './actions/reviews';

import Home from './components/Home/Home';
import BlogExpanded from './components/BlogExpanded/BlogExpanded';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { LOGOUT } from './constants/actionTypes';
import Footer from './components/Footer/Footer';
import Drawer from './components/Drawer/Drawer';
import { categories } from './constants/actionTypes';

const App = () => { 
    const [currentId, setCurrentId] = useState(null);

    const [currentBlog, setCurrentBlog] = useState(null);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const [currentCat, setCurrentCat] = useState('All');

    const [searchResult, setSearchResult] = useState('');

    const [drawerState, setDrawerState] = useState({
        left: false,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(fetchReviews());
    }, [dispatch]);

    const location = useLocation();


    const logout = () => {
        dispatch({ type: LOGOUT });
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
      
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const [prefersDarkMode, setPrefersDarkMode] = useState(false);

    const dark = createMuiTheme({
        palette: {
        type: 'dark',
            secondary: {
                main: '#BB86FC'
            },
            primary: {
                main: '#81E6D9'
            }
        },
    });

    const light = createMuiTheme({
        palette: {
        type: 'light',
            secondary: {
                main: '#BB86FC'
            },
            primary: {
                main: '#1e88e5'
            }
        },
    });

    useEffect(() => console.log('home'))
   

    return (
        <>
        <MuiThemeProvider theme={prefersDarkMode ? dark : light}>
            <CssBaseline />
            <Navbar setCurrentCat={setCurrentCat} setSearchResult={setSearchResult} drawerState={drawerState} setDrawerState={setDrawerState} user={user} setUser={setUser} setPrefersDarkMode={setPrefersDarkMode} prefersDarkMode={prefersDarkMode} />
            <Drawer setCurrentCat={setCurrentCat} categories={categories} drawerState={drawerState} setDrawerState={setDrawerState} />
            <Container>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/" exact component={() => (<Home searchResult={searchResult} currentCat={currentCat} user={user} setCurrentId={setCurrentId} prefersDarkMode={prefersDarkMode} setCurrentBlog={setCurrentBlog}/>)} />
                    <Route path="/form" exact component={() => (<Form user={user} setCurrentId={setCurrentId} currentId={currentId} />)} />
                    <Route path="/blog/:id" exact component={() => (<BlogExpanded currentBlog={currentBlog} setCurrentBlog={setCurrentBlog} user={user} />)} />
                </Switch>
            </Container>
            <Footer />
        </MuiThemeProvider>
        </>
    )
}

export default App
