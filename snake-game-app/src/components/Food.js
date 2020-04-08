import React from 'react';

const Food = (props) => {
    const coords = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }
    return (
    <div className="snake-food" style={coords}></div>
)
};

export default Food;