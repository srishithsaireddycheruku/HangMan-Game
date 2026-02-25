import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import TextInputFormContainer from "./TextInputFormContainer";
function TextInputForm({handleFormSubmit,handleTextInputChange,value,inputType,setInputType}){
    return(
        <form className="flex" onSubmit={handleFormSubmit}>
            
            <div className="mr-2 flex-1"> 
                <TextInput
                    value={value}
                    label="enter a word or phrase"
                    type={inputType}
                    onChange={handleTextInputChange}
                />
            </div>
            <div className="felx">
                    <Button
                    styleType="secondary"
                    text={inputType === 'text' ? "Hide" : "Show"}
                    type="button"
                    onClickHandler={() => setInputType(inputType === 'text' ? 'password' : 'text')}/>
                    <Button
                    styleType="primary"
                    text="OK"
                    type="Submit"/>
            </div>
        </form>
    )
}

export default TextInputForm;