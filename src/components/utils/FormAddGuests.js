import { useState } from "react";
import "./FormAddGuests.css";

export const FormRequestAccess = (props) => {
  const [focused, setFocused ] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
 
  const handleFocus = (e) =>{
    setFocused(true)
  }
  return (
    <div className="formInput">
      <label>{label}</label>
      <input 
        {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus}//click and leave
        onFocus={() => setFocused(true)}//just on click
        focused={focused.toString()}
        />
      <span>{errorMessage}</span>
    </div>
    
  )
}