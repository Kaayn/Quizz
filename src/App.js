import React from 'react';
import './App.css';
import Questions from './Data/Questions.json';
//const 
function App() {
  
  const activateFalse = () => {

    console.log("Faux");

  }

  const activateTrue = () => {

    console.log('Vrai');
  }


  return (

    <div className="App">
      <header className="App-header">
       <h1>Quiz</h1>
      </header>
   
    
      {Questions.map((Q1, index)=>{
        return (

      <div className="Question1">

        <p>{Q1.question}</p>
        <button onClick={activateTrue}>{Q1.correctAnswer}</button>
          
          <p>{Q1.incorrectAnswers.map((reponse,index)=>{
              return(
                <button onClick={activateFalse}>{reponse}</button>
            )
            })}</p>
      </div>
        )})}
      
    </div>
  
  );
}

export default App;
