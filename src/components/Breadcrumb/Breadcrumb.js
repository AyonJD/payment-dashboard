import React from 'react';

const Breadcrumb = ({ title, userName }) => {
    return (
        <div className="breadcrumb flex items-center px-4 mb-2 mt-4">
            <h1 className='text-md font-bold text-white '> {title} </h1>
            <h1 className='text-2xl font-bold text-white mx-2'> {`>`} </h1>
            <h1 className='text-md font-bold text-white '> {userName} </h1>

        </div>
    );
};

export default Breadcrumb;