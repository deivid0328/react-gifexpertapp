import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState("");

    const handlehange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue);
    }

    const handleSubmit = (e) => {
    e.preventDefault();
  
    if ( inputValue.trim().length > 2 ){
        setCategories( cats =>[inputValue, ...cats]);
        setInputValue(e.target.value="")
    }
  
    }
    return (
        
            <form onSubmit={ handleSubmit }>
                <input type="text" value={inputValue} onChange={handlehange} />
            </form>        
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}

export default AddCategory

