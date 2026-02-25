import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
function App(){
  return(
    <>
      <h1 className="font-semibold text-3xl">Welcome To HangMan</h1>
      <TextInputFormContainer onSubmit={(value)=> console.log('value coming from hidden form is',value)}/>
      {/* {test()} {10*3}   jsx-curlies*/}
    </>
  )
}
// function test(){
//   console.log("test", 10*3);
// }
export default App;