import button from "../Button/Button";

const alphabets=new Array(26).fill('').map((e,idx)=>String.fromCharCode(65+idx)); 
function LetterButtons({usedLetters,onLetterClick}){    //taking the usesd letters to block tehm from using another time

    const usedLettersSet=new Set(usedLetters.join('').toUpperCase().split(''));  //creating a set of used letters for faster lookup, as sets have O(1) time complexity for lookup, while arrays have O(n) time complexity

    const buttonStyle=function(letter){
        if(usedLettersSet.has(letter)){
            return "bg-red-400 text-whitefont-bold py-2 px-4 rounded cursor-not-allowed";
        }        else{
            return "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all border-2 border-blue-500 hover:border-blue-900";
        }
    };

    const handleClick=function(event){
        const character=event.target.value;  //getting the value of the button clicked, which is the letter
        onLetterClick?.(character);
    }
    const buttons=alphabets.map(letter=>{
        return(
            <button 
                value={letter}
                disabled={usedLettersSet.has(letter)}  //disabling the button if the letter is already used
                className={`h-12 w-12 m-1 ${buttonStyle(letter)} rounded-md transition-all border-2 border-blue-500 hover:border-blue-900`}
                key={`letter-button-${letter}`}
                onClick={handleClick} >
                    {letter}
            </button>
        )
    })
    return(
        <>
            {buttons}
        </>
    )
}
export default LetterButtons;