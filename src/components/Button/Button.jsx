import getButtonStyle from "../../getButtonStyle";
function button({text = "Click me",buttonType = "submit",styleType,onClickHandler}){
    return(
        <button  type={buttonType}
            onClick={onClickHandler}
            className={`${getButtonStyle(styleType)}`}
        >
            {text}
            
        </button>
    )
}

export default button;