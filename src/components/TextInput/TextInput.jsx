function TextInput({label,type = "text",value,onChange}){
    return(
        <label className="block"> 
            {/* {label && <span className="block mb-2 font-medium text-gray-700">{label}</span>} */}
            <input 
                className="p-4 py-2 border border-gray-500 rounded-md w-full"
                type={type} 
                onChange={onChange}
                placeholder={label}
                value={value}
            />
        </label>
    )
}

export default TextInput;