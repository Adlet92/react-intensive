import React from 'react';

interface InputFieldProps {
  type: string;
  id: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, id, value, label, onChange }) => {
  return (
    <div className='input-box'>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default InputField;
