import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/base';
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [showQuestion, setShowQuestion] = useState<boolean>(false);
  const [quesion, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const url = "https://api.com/question"

  const getQuestion = async (): Promise<void> => {
    //get question from backend
  };


  const sendAnswer = (): void => {
    //send answer to backend
  }

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <>
      {showQuestion ?
        <div className="questionBox">
          <p className="question">Please answer this question.</p>
          <TextareaAutosize className="textarea" onChange={(event) => { setAnswer(event.target.value) }} />
          <div className="confirmButtonBox">
            <Button variant="contained" color="success" onClick={sendAnswer}>Send</Button>
          </div>
        </div>
        :
        <Button variant="contained" className="button" onClick={() => setShowQuestion(true)}>Start</Button>
      }

    </>
  )
}

export default App
