import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.7)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(3, 0, 0, 3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(15, 0, 5, 15), 
        paddingRight: 0,
      },
    },
    container: {
      marginTop: theme.spacing(4),
    },
    header: {
      margin: theme.spacing(3, 2)
    },
  }));