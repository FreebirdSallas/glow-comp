import React from 'react';
import AppBar from '../components/AppBar/AppBar';
import Typography from '@material-ui/core/Typography';

function UsersPage() {
    return (
        <>
            <AppBar />
            <Typography variant="h5">
                Users listed here...
        </Typography>
        </>
    );
}

export default UsersPage;