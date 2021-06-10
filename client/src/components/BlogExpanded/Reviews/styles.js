import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    nameTag: {
        marginRight: 'auto'
    },
    toolbar: {
        padding: 0
    },
    mr: {
        marginRight: "1rem"
    },
    review: {
        borderLeft: `2px solid ${theme.palette.primary.main}`,
        margin: theme.spacing(2, 0),
        paddingLeft: theme.spacing(2)
    }
}));