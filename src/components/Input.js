import React from 'react';

const Input = ({ type, name, value, placeholder, onChange, error, style }) => {
  return (
    <div className="input-field">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={style}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;

