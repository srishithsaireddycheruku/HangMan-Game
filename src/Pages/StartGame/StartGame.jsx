import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";
import { Link, useNavigate } from "react-router-dom";
function StartGame(){

    const navigate=useNavigate();

    function handleSubmit(value){
        console.log(value);
        navigate('/play', {state:{wordSelected:value}}); 
    }
    return(
        <div>
            <h1>Start Game</h1>
            <TextInputFormContainer onSubmit={handleSubmit}/>
            {/* <Link to="/play" > Go to Play Game</Link> */}
        </div>
    )
}

export default StartGame;