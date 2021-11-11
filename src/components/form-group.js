import React from "react"


function FormGroup(props){
    return (
    <div class="form-group">
        <label htmlFor={props.htmlFor}>{props.label} </label>
        {props.children}
    </div>
    )
}

export default FormGroup