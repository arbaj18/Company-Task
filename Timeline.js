// Timeline.js
import React from 'react';
import DataPoint from './DataPoint';

const Timeline = ({ data }) => {
    return (
        <div className="timeline">
            {data.map((item, index) => (
                <DataPoint key={index} item={item} />
            ))}
        </div>
    );
};

export default Timeline;
