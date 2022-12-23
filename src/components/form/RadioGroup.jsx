const RadioGroup = ({title, children,styles}) => {
    return (
        <div className="radio-group-container" style={{width:'100%',padding:'1rem'}}>
            <h3>{title}</h3>
            <div className="radio-group-body" style={{...styles}}>
                {children}
            </div>
        </div>
    )

}

export default RadioGroup;