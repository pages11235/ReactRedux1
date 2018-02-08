import React from 'react';

export default function Waiting(props) {
    if (!props.listRefreshing) {
        return null;
    }

    const style = {
        fontSize: "1.5em",
        fontWeight: "bold"
    };

    return (
        <span style={style}>&nbsp;Waiting for server...</span>
    );
}