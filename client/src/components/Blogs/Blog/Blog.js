import React, { useState, useEffect } from 'react';
import { Chip, Menu, MenuItem, Card, CardActions, CardMedia, Button, Typography, CardContent, Avatar, CardHeader, IconButton } from '@material-ui/core';
import moment from 'moment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { randomColor } from '../../../constants/randomColor';

import { useDispatch } from 'react-redux';

import useStyles from './styles';

import { deleteProduct, likeProduct } from '../../../actions/products';

const Blog = ({ user, blog, setCurrentId, prefersDarkMode, setCurrentBlog }) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [avatarColor, setAvatarColor] = useState(null);

    useEffect(() => {
        if(!avatarColor) setAvatarColor(randomColor());
    });

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const ITEM_HEIGHT = 48;

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar style={{ backgroundColor: avatarColor }} aria-label="recipe" className={classes.avatar} alt={blog.name} src={blog.imageUrl}>
                        {blog.name.charAt(0)}
                    </Avatar>
                }
                action={
                    <div>
                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
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
                            <MenuItem disabled={!(user?.result?.googleId === blog?.creator || user?.result?._id === blog?.creator)} component={Link} to='/form' onClick={() => setCurrentId(blog._id)}>Edit</MenuItem>
                            <MenuItem disabled={!(user?.result?.googleId === blog?.creator || user?.result?._id === blog?.creator)} onClick={() => dispatch(deleteProduct(blog._id))}>Delete</MenuItem>
                        </Menu>
                    </div>
                }
                title={blog.productName}
                subheader={moment(blog.createdAt).fromNow()}
            />
            <CardMedia
                className={prefersDarkMode ?  classes.media : `${classes.media} ${ classes.mediaDark}`}
                image={blog.selectedFile}
                title={blog.productName}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {blog.description.substring(0, 150)}...
                </Typography>
                {blog.tags.length && blog.tags.map((tag) => <Chip
                    label={tag}
                    className={classes.chip}
                />)}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={() => dispatch(likeProduct(blog._id))}>
                    <FavoriteIcon className={classes.favIcon}/>    
                </IconButton>
                <Typography>Like &nbsp;{blog.likes.length}</Typography>
                <Button className={classes.readMore} color="primary" component={Link} to={`/blog/${blog._id}`}>Read more</Button>
            </CardActions>
            
        </Card>
    );
};

export default Blog;