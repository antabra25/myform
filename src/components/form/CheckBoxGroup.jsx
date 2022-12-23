const CheckBoxGroup = ({title, children}) => {

    return (
        <div className="checkbox-group-container" style={{width:'100%',padding:'1rem'}}>
            <h3 className="checkbox-group-title">{title}</h3>
            <div className="checkbox-group-body">
                {children}
            </div>
        </div>
    )

}
export default CheckBoxGroup;