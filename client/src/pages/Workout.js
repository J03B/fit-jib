import React, { useState, useEffect } from 'react';
import {
    Container,
    Col,
    Form,
    Button,
    Card,
    Row,
    ProgressBar
} from 'react-bootstrap';


const Workout = (props) => {
    const [progressPercent, setProgressPercent] = useState(0);





    return (
        <>
            <ProgressBar animated now={progressPercent} />
        </>
    );
};

export default Workout;