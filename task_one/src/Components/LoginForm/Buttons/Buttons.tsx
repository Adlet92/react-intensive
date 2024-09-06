import React from 'react';
import './Buttons.css';

interface FormButtonsProps {
  onCancel: () => void;
  onSubmit: () => void;
}

const FormButtons: React.FC<FormButtonsProps> = ({ onCancel, onSubmit }) => {
  return (
    <div className='button-container'>
      <button
        type='button'
        className='cancel-btn'
        onClick={onCancel}
      >
        Cancel
      </button>
      <button
        type='button'
        className='login-btn'
        onClick={onSubmit}
      >
        Login
      </button>
    </div>
  );
};

export default FormButtons;
