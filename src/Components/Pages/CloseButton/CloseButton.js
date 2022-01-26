import React from 'react';

const CloseButton = ({ setcontactPage }) => {
    return (
        <div className='close-btn' onClick={() => setcontactPage(false)}>
            <div className='btn-glow'></div>
            <span className='first-span'></span>
            <span className='second-span'></span>
        </div>
    )
};

export default CloseButton;
