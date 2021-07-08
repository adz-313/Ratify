import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography, Grid, Container, Button } from '@material-ui/core';
import Moment from 'moment';
import ReactMarkdown from 'react-markdown';
import { useHistory } from 'react-router-dom';
import {Bar} from 'react-chartjs-2';
import { useParams } from 'react-router-dom';

import useStyles from './styles';
import TopPicks from '../TopPicks/TopPicks';
import ReviewForm from './ReviewForm/ReviewForm';
import Reviews from './Reviews/Reviews';

const BlogExpanded = ({ user, currentBlog, setCurrentBlog }) => {
  const classes = useStyles();  
  
  const [bar, setBar] = useState({
      labels: ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'],
      datasets: [
        {
          label: 'User reviews',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: []
        }
      ]
  });

  const params = useParams();

  const history = useHistory();

  const blogFromState = useSelector((state) => state.products.find((p) => p._id === params.id));

  console.log(blogFromState)

  //useEffect(useSelector((state) => state.products.map((p) => console.log(p))),[])

  const reviews = useSelector((state) => state.reviews.filter(rev => rev.productId === params.id));
   
  let userData = reviews.slice(0);
  
  useEffect(() => {
    let stars1 = userData.filter(rev => rev.rating === 1).length;
    let stars2 = userData.filter(rev => rev.rating === 2).length;
    let stars3 = userData.filter(rev => rev.rating === 3).length;
    let stars4 = userData.filter(rev => rev.rating === 4).length;
    let stars5 = userData.filter(rev => rev.rating === 5).length;
    let newData = [];
    newData.push(stars1,stars2,stars3,stars4,stars5);
    setBar(oldBars => ({
      ...oldBars,
      datasets: [
        {
          ...oldBars.datasets[0],
          data: newData
        }
      ]
    }))
  },[]);


  const [editReview, setEditReview] = useState(null);

  useEffect(() => {
    if(blogFromState) setBlog(blogFromState)
  }, []);

  const [blog, setBlog] = useState({
    productName: '',
    category: '',
    description: '',
    tags: '',
    selectedFile: ''
  });

  return (
    <Container className={classes.container}>
      <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${blog.selectedFile})` }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={blog.selectedFile} alt={blog.productName} />}
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {blog.productName}
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                {`${Moment(blog.createdAt).format('MMMM Do, YYYY')} by ${blog.name}`}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Grid container>
          <Grid item lg={8} md={12} sm={12}>
              <ReactMarkdown allowedElements={["h1", "p", "h2", "h3", "hr", "strong", "em", "ul", "ol", "li" ]}  children={blog.description} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} className={classes.topPicks}>
              <Typography variant="h4" className={classes.header}>Top Picks</Typography>
              <TopPicks setCurrentBlog={setCurrentBlog} />
          </Grid>
      </Grid>
      <Grid container>
        <Grid item lg={8} xs={12}>
          <Bar
            data={bar}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20,
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </Grid>
      </Grid>
      <hr />
      <Container className={classes.container}>
        <ReviewForm editReview={editReview} setEditReview={setEditReview} pid={blog._id} user={user} />
        {reviews.length > 0 ? reviews.map((review) => (
        <Reviews setEditReview={setEditReview} user={user} review={review} />
        )) : 
        <Grid container justify='center'>
          <Grid item>
            <h1>No reviews yet</h1>  
          </Grid>  
         </Grid>}
      </Container>
    </Container>
  );
}

export default BlogExpanded;