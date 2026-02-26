import { Route,Routes } from "react-router-dom";
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
import PlayGame from "./Pages/PlayGame/PlayGame";
import StartGame from "./Pages/StartGame/StartGame";
function App(){
  return(
    // <>
    //   {/* <h1 className="font-semibold text-3xl">Welcome To HangMan</h1>
    //   <TextInputFormContainer onSubmit={(value)=> console.log('value coming from hidden form is',value)}/>
    //   {/* {test()} {10*3}   jsx-curlies*/}
    // </> 

    <Routes>

        <Route path="/" element={<StartGame />} />  {/*default route, when we open the app it will show start game page*/}
        <Route path="/play" element={<PlayGame/>} />
        <Route path="/start" element={<StartGame/>} />
        <Route path="*" element={<div>404 not found</div>} />
    </Routes>

  )
}
// function test(){
//   console.log("test", 10*3);
// }
export default App;