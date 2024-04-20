import React, { useEffect, useRef, useState } from 'react';
import './style.css';

function Otp() {
    const exref = useRef([]);
    const [otpValues, setOtpValues] = useState(Array(5).fill(''));

    function handlechange(e, index) {
        let val = e.target.value;
        if (val.length > 1) {
            val = val.substring(val.length - 1);
        }
        const newOtpValues = [...otpValues];
        newOtpValues[index] = val;
        setOtpValues(newOtpValues);

        if (val.length === 1 && index < 4) {
            exref.current[index + 1].focus();
        }
    }
    function handlekeydown(e,i){
        if(e.key==='Backspace' && i>0 && exref.current[i]&&!otpValues[i]){
            exref.current[i-1].focus()
        }
    }

    useEffect(() => {
        exref.current[0].focus();
    }, []);

    return (
        <>
            <h1>OTP Example</h1>
            <div className='otp'>
                {Array(5).fill().map((_, i) => (
                    <input
                        type="text"
                        ref={(input) => { exref.current[i] = input; }}
                        value={otpValues[i]}
                        onChange={(e) => handlechange(e, i)}
                        key={i}
                        maxLength={1}
                        onKeyDown={(e)=>{handlekeydown(e,i)}}
                    />
                ))}
            </div>
        </>
    );
}

export default Otp;
