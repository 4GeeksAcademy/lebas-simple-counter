import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export const SecondsCounter = () => {
    const [count, setCount] = useState(0);
    const [stopCount, setStopCount] = useState(false);
    const [fromNumber, setFromNumber] = useState('');
    const [valueTime, setValueTime] = useState(null);

    useEffect(() => {

        if (!stopCount) {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval); 
        }

        if (fromNumber) {
            const interval = setInterval(() => {
                setCount((fromNumber) => fromNumber + 1);
            }, 1000);

            return () => clearInterval(interval);   
            }   

    }, [count, stopCount, fromNumber]); 

    
        const handleSubmit = (event) => {
            event.preventDefault();
            setCount(Number(fromNumber)); 
        };
        const handleChange = (event) => {
        setFromNumber((event.target.value));
        return 
        }

        const handleTime = (event) => {
            event.preventDefault();
        };

        const handleChangeTimer = (event) => {
            event.preventDefault();
            setTimeout(() => {
                alert("Time is up!");
            }, Number(valueTime) * 1000);
        };

 

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
                <button className="btn btn-success m-4" onClick={()=>setStopCount(!stopCount)}>{stopCount ? "Restart counter" : "Stop counter"}</button>
            <div className="row">
                <div className="col-6">
                <form onSubmit={handleSubmit}>
                <label>
                Set a start number:<br />
                <input type="number" style= {{width: `8ch`}} value={fromNumber} onChange={handleChange} />
                </label>
                <br /><br />
                <button className="btn btn-success" type="submit">Submit</button>
                </form>
                </div>
                <div className="col-6">
                
                <form onSubmit={handleChangeTimer}>
                <label>
                Set a timer alert (in seconds):<br />
                <input type="number" style= {{width: `8ch`}} value={valueTime}  onChange={(e) => setValueTime(e.target.value)}/>
                </label>
                <br /><br />
                <button className="btn btn-success" type="submit" onClick={()=>setValueTime(valueTime)}>Submit</button>
                </form>
                </div>
                </div>
            </div>
    </div>
    );
};

