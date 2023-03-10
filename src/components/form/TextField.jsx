const TextField = ({label, id, name, value, onChange, onBlur, error,type ='text'}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                id={id}
                type={type}
                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default TextField;