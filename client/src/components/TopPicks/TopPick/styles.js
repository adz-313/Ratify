import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      '&:first-child': {
        marginTop: 0
      },
      marginTop: theme.spacing(1),
      display: 'flex',
      textDecoration: 'none'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
      marginLeft: 'auto'
    },
    noGutter: {
      margin: 0
    }
  }));