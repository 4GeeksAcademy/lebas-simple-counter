import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export const SecondsCounter = () => {
    const [count, setCount] = useState(0);
    const [stopCount, setStopCount] = useState(false);

    useEffect(() => {

        if (!stopCount) {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval); 
    }
    }, [count, stopCount]); 

    return (

        <div className="container-fluid ">
            <div className="bg-dark p-5 mt-1 text-bg-dark fw-bold">
                <div className="row">
                    <div className="d-inline-flex gap-5 justify-content-center" style={{fontSize : "6rem"}}>
                    <span><FontAwesomeIcon icon={faClock} size="1x" className="me-4" /></span> 
                    <span>{Math.floor((count / 100000) % 10)}</span>
                    <span>{Math.floor((count / 10000) % 10)}</span>
                    <span>{Math.floor((count / 1000) % 10)}</span>
                    <span>{Math.floor((count / 100) % 10)}</span>
                    <span>{Math.floor((count / 10) % 10)}</span>
                    <span>{Math.floor((count / 1) % 10)}</span>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-success mt-4" onClick={()=>setStopCount(!stopCount)}>{stopCount ? "Restart" : "Stop"}</button>
            </div>
    </div>
    );
};