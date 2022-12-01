import React from 'react';
import image from '../image/image.png'

function Template(props) {
    return ( 
        <>
        <div className='Card'>
            <div className='image'>
                <img src={props.image} alt="image loading..." />
            </div>
            <div className='title'>
                <a href={props.a}>
                <h3>{props.title}</h3>
                </a>
                <p>{props.description}</p>
            </div>
        </div>
        </>
     );
}

export default Template;