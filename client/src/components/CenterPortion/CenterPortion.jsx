import React from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom'  
import './CenterPortion.css';

export default function CenterPortion() {
    const navigate = useNavigate();
    return (
    <div className='bg-container'>
      <h1>Need help?</h1>
      <p>Contact our chatbot / tech professionals</p>
      <div className='center-btns'>
        <button
          className='button ps-button'
          // buttonStyle='btn--outline'
          // buttonSize='btn--large'
          onClick={() => navigate("/chat")}
        >
          CHAT HERE NOW
        </button>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => navigate("/blogs")}
        >
          SHARE YOUR CAREER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}