import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, name} = property;
    return (
        <div id={`card-${index}`} className="logo text-center">
            <img src={picture} alt={name} />
            <div className="details">
               
                <p className="location py-2">
                    {name}
                </p>
                
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;