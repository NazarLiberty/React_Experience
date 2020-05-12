import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function MySnackbar(props) {
    const [open, setOpen] = React.useState(false);
    let severity;
    let text;
    const handleClick = () => {

        setOpen(true);

    };
    if (props.open) {
        setOpen(true)
        text = "TEST"
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    if (props.del) {
        severity = "error"
        text = "Day №" + (props.delDay) + " have been deleted"
    }
    else {
        severity = "success"
        text = "Day №" + (props.addDay) + " have been added"
    }
    return (
        <div onClick={handleClick}>
            {props.children}
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {text}
                </Alert>
            </Snackbar>
        </div>
    );
}
