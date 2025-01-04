import React from 'react';

const Input = ({ type, name, value, placeholder, onChange, error, style, label }) => {
  return (
    <div className="input-field">
      <label htmlFor={name} className="input-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={style}
        id={name}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;
