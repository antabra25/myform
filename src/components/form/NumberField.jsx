import React from 'react';

const NumberField = ({label, name, id, value, onChange, onBlur, error}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                id={id}
                type="number"
                className="form-control"
            />
            {error && <div className="alert">{error}</div>}
        </div>
    );
}

export default NumberField;