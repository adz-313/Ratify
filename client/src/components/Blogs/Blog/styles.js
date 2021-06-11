import { makeStyles } from '@material-ui/core/styles';
import { cyan, red } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 415,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  mediaDark: {
    backgroundColor: 'rgba(f, f, f, 0.5)',
    backgroundBlendMode: 'lighten',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: cyan[700],
  },
  chip: {
    marginTop: "1rem",
    marginRight: "5px"
  },
  favIcon: {
    color: red[500]
  },
  readMore: {
    marginLeft: "auto"
  }
}));