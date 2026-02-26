import { Link } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/Letterbuttons/LetterButtons";
function PlayGame(){
    return(
        <div>
            <h1>Play Game</h1>
                <MaskedText text="Humble" usedLetters={['b','e']}/>
            <hr />
            <LetterButtons usedLetters={['b','e']}/>
            <hr />
            <Link to="/start" > Go to Start Game</Link>
        </div>
    )
}
export default PlayGame;