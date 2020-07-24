import React from 'react';
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            404 Not Found !!!
            <Link to={'/landing'}>Go to Landing page</Link>
        </div>
    );
};

export default NotFound;