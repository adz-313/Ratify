import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        padding: "1rem",
    },
    textarea: {
        marginTop: "1rem",
        minWidth: "98%",
        minHeight: "12rem"
    },
    gutterTop: {
        marginTop: "1rem"
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    preview: {
        padding: "1rem",
        maxWidth: "100%"
    },
    imgPreview: {
        width: "56.25%",
        marginTop: "1rem"
    },
    mainContainer: {
        padding: theme.spacing(3, 0)
    }
}));