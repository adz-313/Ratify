import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    gutter: {
        padding: theme.spacing(2)
    },
    header: {
        padding: theme.spacing(2, 0, 0, 2)
    },
    button: {
        padding: theme.spacing(0, 0, 2, 2)
    }
}));