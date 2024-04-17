// Summary.js
import React from 'react';

const Summary = ({ data }) => {
    // Calculate summary metrics
    const count0 = data.filter(item => item.machine_status === 0).length;
    const count1 = data.filter(item => item.machine_status === 1).length;
    // Add more summary calculations as needed

    return (
        <div className="summary">
            <h2>Summary</h2>
            <table>
                <thead>
                    <tr>
                        <th>Sample Value</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>{count0}</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{count1}</td>
                    </tr>
                    {/* Add more rows for additional summary metrics */}
                </tbody>
            </table>
        </div>
    );
};

export default Summary;
