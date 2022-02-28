import React, { useState } from 'react'

const TailSocialLinks = ({ Children, URL }) => {

    const [color, setColor] = useState('white');
    const [size, setSize] = useState('25px');


    const onMouseOver = () => {
        setColor('red');
        setSize('30px')
    }

    const onMouseLeave = () => {
        setColor('white');
        setSize('25px')
    }

    const onClick = () => {
        window.open(URL, '_blank');
    }

    return (
        <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} className="each-link" onClick={onClick}>
            <Children color={color} size={size} />
        </div>
    )
}

export default TailSocialLinks