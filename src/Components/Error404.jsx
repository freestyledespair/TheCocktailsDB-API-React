import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div style={{ fontSize: "30px", textAlign: "center", color: "brown", marginTop: "30px", fontStyle: "italic" }}>
            <Link to={"/"}>Start/join</Link>
        </div>
    );
};

export default Error404;