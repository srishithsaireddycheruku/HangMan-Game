


// here the 'test' is rthe word guessed and the 
// 'usedletters' are the letters that have been guessed so far
// , we will replace the letters in the test with _ if they are not in the used letters array
import { getAllCharacters } from "./MaskedTextUtility";
function MaskedText({text,usedLetters}){
    const letters=getAllCharacters(text,usedLetters).split(' ');  //splitting the string of characters into an array of characters to display them separately
    
    return(
        <>
            {letters.map((letter,idx) =>{
                return <span key={`letter-${idx}`} className="inline-block mx-1" >{letter}</span>
            })}
        </>
    )
}

export default MaskedText;

// H U N G M A N (if u and n are guessed) _ U N _ _ _N