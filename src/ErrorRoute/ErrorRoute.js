import React from 'react';

const ErrorRoute = () => {
    return (
            <div className='App mt-5 fs-1'>
                <h1 className='my-auto'>
                    Oops! The page is not found.
                </h1>
                <h1><span className="badge rounded-pill text-bg-danger px-5 mb-3">error: 404</span></h1>
            </div>
    );
};

export default ErrorRoute;