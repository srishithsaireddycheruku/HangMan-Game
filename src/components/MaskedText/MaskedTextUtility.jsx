export function getAllCharacters(word,usedLetters=[]){
    //this fn will return an array of characters and _ based on the used letters and the word to guess
    usedLetters=usedLetters.map(Letter=>Letter.toUpperCase())  //converting all the used letters to uppercase to match with the word which is in uppercase
    const guessedLetters=new Set(usedLetters);  //creating a set of used letters for faster lookup, as sets have O(1) time complexity for lookup, while arrays have O(n) time complexity
    
    const chars=word.toUpperCase().split('').map(char=>{  
        if(guessedLetters.has(char)){
            return char;
        }
        else return '_';
    });
    return chars.join(' ');  //joining the array of characters with space in between to display it properly
}