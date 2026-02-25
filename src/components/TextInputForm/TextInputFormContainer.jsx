import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useState } from "react";
import TextInputForm from "./TextInputForm";
function TextInputFormContainer({onSubmit}){
    let [value,setValue]=useState('');
    let [inputType,setInputType] = useState('password');

    function handleFormSubmit(event){
        event.preventDefault();
        console.log('form submitted',value);
        onSubmit?.(value);  //if onSubmit is defined then call it with value
    }

    function handleTextInputChange(event){
        console.log('Text input changed');
        console.log(event.target.value);
        setValue(event.target.value);  //whenever i type the input,it will update the value
    }

    return(
        <TextInputForm 
        handleFormSubmit={handleFormSubmit} 
        handleTextInputChange={handleTextInputChange} 
        value={value} 
        inputType={inputType} 
        setInputType={setInputType}/>
    )
}

export default TextInputFormContainer;
