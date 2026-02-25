function getButtonStyle(styleType){
    const primary= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all border-2 border-blue-500 hover:border-blue-900";
    const secondary = "bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded transition-all border-2 border-lime-500 hover:border-lime-900";
    const danger = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all border-2 border-red-500 hover:border-red-900";

    if(styleType === "primary"){
        return primary;
    } else if(styleType === "secondary"){
        return secondary;
    } else if(styleType === "warning"){
        return danger;
    }
}
export default getButtonStyle;