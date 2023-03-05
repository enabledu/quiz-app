import './Quiz.css'
import { Container } from 'react-bootstrap';
import React,  { useContext } from 'react';
import { QuizContext } from './QuizContext';
import Question from './Question';


const Quiz = () =>{

    const [state,dispatch] = useContext(QuizContext)

    return (

        <div className='main'>
            <Container>

                <div className='quizTitle'>
                    <h3 >Quiz Title</h3>
                </div>

                {state.showResults && (

                    <div className='results'>
                        
                        <div className="congrats">Congratulations!</div>

                        <div className="resultsInfo">

                            <div className='completed'>You have completed the quiz.</div>

                            <div className='score'>
                                Your Score is  {state.score} of {state.questions.length} .
                            </div>

                            <div className='restart' onClick={()=> dispatch({type: 'restart'})}>Restart</div>

                        </div>

                    </div>

                )}

                {!state.showResults && (

                    <div className='quiz'>

                        <p className='questionNumber'>Question {state.currentQuestion + 1 } / {state.questions.length}</p>

                        <Question/>

                        {state.currentAnswer && (
                            <div
                                className='nextQuestion'
                                onClick={()=>dispatch({type: 'next'})}
                            >
                                <button>Next Question</button>
                            </div>
                        )}

                    </div>
                )}

            </Container>
        </div>

    )
}

export default Quiz;