import { Link } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
function PlayGame(){
    return(
        <div>
            <h1>Play Game</h1>
            <h1>
                <MaskedText text="Humble" usedLetters={['b','e']}/>
            </h1>
            <Link to="/start" > Go to Start Game</Link>
        </div>
    )
}
export default PlayGame;