import React from 'react';

const Photos = (props) =>
{
    return(
        <div className="image_div">
            <img src={props.url} alt="" className="photo"/>
        </div>
    )
}

export default Photos;