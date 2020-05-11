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

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    if (props.del) {
        severity = "error"
        text = "Day have been deleted"
    }
    else {
        severity = "success"
        text = "Day have been added"
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
