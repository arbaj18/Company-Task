// DataPoint.js
import React from 'react';

const DataPoint = ({ item }) => {
    const getColor = () => {
        if (item.machine_status === 0) return 'yellow';
        if (item.machine_status === 1) return 'green';
        return 'red';
    };

    return (
        <div
            className="data-point"
            style={{
                backgroundColor: getColor(),
                width: '20px', // Adjust as needed
                height: '20px', // Adjust as needed
                margin: '5px', // Adjust as needed
                display: 'inline-block'
            }}
        >
            {item.ts}
        </div>
    );
};

export default DataPoint;
