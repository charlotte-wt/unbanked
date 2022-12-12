import React, { useState } from "react";

import { useNavigate } from 'react-router-dom'  
import './RemitCentre.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RemitCentre() {
    
    const navigate = useNavigate();
    const notify = () => toast("Remittance Successful!");
 
    return (
    <div className='bg-container'>
      
        <div className="PostShare">
            <h1>Remit Money Here</h1>
            <div>
                
                Amount:
                <input
                type="number"
                min="1" step="any"
                placeholder="0.00"
                required
                // ref={desc}
                /> 
                Recipient Bank Account Number:
                <input
                type="text"
                placeholder="Bank Account Number"
                required
                // ref={desc}
                /> 
                
                <button
                    className="button remit-button"
                    onClick= {notify}
                    // disabled={loading}
                >
                    {/* {loading ? "uploading" : "Share"} */}
                    Remit
                </button>
                <ToastContainer />

                
            </div>

        
        </div>
    </div>
    
  );
}
