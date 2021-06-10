import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { Paper, Typography, Container, Grid, TextField, Select, InputLabel, MenuItem, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import useStyles from './styles';
import { createProduct, editProduct } from '../../actions/products';
import { categories } from '../../constants/actionTypes';

const Form = ({ user, currentId, setCurrentId }) => {

    const dispatch = useDispatch(); 
    
    const history = useHistory();

    const blogToEdit = useSelector((state) => currentId ? state.products.find((p) => p._id === currentId) : null);

    useEffect(() => {
       if(blogToEdit) {
           setBlog(blogToEdit);
       }
    },[blogToEdit]);

    const [blog, setBlog] = useState({
        productName: '',
        category: '',
        description: '',
        tags: '',
        selectedFile: ''
    });

    const classes = useStyles();
    
    const clear = () => {
        setBlog({
            productName: '',
            category: '',
            description: '',
            tags: '',
            selectedFile: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!currentId) {
            dispatch(createProduct({...blog, name: user?.result?.name}));
        } else {
            dispatch(editProduct(blog._id, {...blog, name: user?.result?.name}));
        }
        clear();
        history.push('/');
    };

    return (
        <Container className={classes.mainContainer}>
            <Grid container>
                <Grid md={5} sm={12} item>
                    <Typography variant="h4">New blog</Typography>
                    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                        <TextField 
                            fullWidth
                            variant="outlined"
                            name="productName"
                            label="Product Name"
                            className={classes.gutterTop}
                            value={blog.productName}
                            onChange={(e) => setBlog({...blog, productName: e.target.value})}
                        />
                        <InputLabel id="category" className={classes.gutterTop}>Category</InputLabel>
                        <Select
                            labelId="category"
                            id="category"
                            fullWidth
                            value={blog.category}
                            onChange={(e) => setBlog({...blog, category: e.target.value})}
                        > 
                            {categories.map((item) => <MenuItem value={item}>{item}</MenuItem> )}
                        </Select>
                        <InputLabel id="file" className={classes.gutterTop}>Image</InputLabel>
                        <div className={classes.fileInput}>
                            <FileBase value={blog.selectedFile} multiple={false} onDone={({base64}) => setBlog({...blog, selectedFile: base64})} />
                        </div>
                        <TextField 
                            name="tags" 
                            variant="outlined" 
                            label="Tags" 
                            fullWidth
                            className={classes.gutterTop}
                            value={blog.tags}
                            onChange={(e) => setBlog({ ...blog, tags: e.target.value.split(',') })} />
                        <textarea 
                            name="description"
                            placeholder="Description"
                            className={classes.textarea}
                            value={blog.description}
                            onChange={(e) => setBlog({...blog, description: e.target.value})}
                        />
                        <Button className={classes.gutterTop} variant="contained" color="primary" size="large" type="submit" fullWidth >
                            Submit    
                        </Button>
                        <Button className={classes.gutterTop} variant="contained" color="primary" size="small" onClick={clear} fullWidth >
                            Clear
                        </Button> 
                    </form>
                </Grid>
                <Grid md={7} container justify="center" alignItems="flex-start">
                    <Grid item>
                        {blog.productName || blog.description ? 
                            <Container className={classes.preview}>
                                <Paper className={classes.paper}>
                                    <Typography variant="h4">{blog.productName}</Typography>
                                    <img className={classes.imgPreview} src={blog.selectedFile} alt={blog.productName}/>
                                    <ReactMarkdown allowedElements={["h1", "p", "h2", "h3", "hr", "strong", "em", "ol", "ul", "li" ]} children={blog.description} />
                                </Paper>
                            </Container> : 
                            <Typography variant="h4">Nothing to show</Typography>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Form
