import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appName: {
        textDecoration: "none",
        color: theme.palette.primary.contrastText,
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    iconBtn: {
        color: theme.palette.primary.contrastText,
        marginRight: theme.spacing(1),
    },
    btnSignin: {
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.down("xs")]: {
            fontSize: '12px'
        }
    },
    mr: {
        marginRight: "1rem"
    },
    navLogo: {
        marginRight: "auto",
        width: '3rem',
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    search: {
        marginRight: "1rem",
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
    },
}));