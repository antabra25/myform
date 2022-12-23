import React from "react";

const FormButton = ({text, isFormValid}) => {
    return (
        <div className="form-button-container ">
            <button className="form-button" type="submit" disabled={isFormValid}>
                {text}
            </button>
        </div>
    )
}

export default FormButton;