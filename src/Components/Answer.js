import './Quiz.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


const Answer = (props) =>{

    const letters = ['A','B', 'C', 'D']

    const [selectedOption, setSelectedOption] = useState(null);

    // const isCorrect = props.currentAnswer && 
    //         props.answer === props.correctAnswer

    // const isWrong =
    //         props.currentAnswer === props.answer &&
    //         props.currentAnswer !== props.correctAnswer;

    // const correctAnswer = isCorrect ? 'correctAnswer' : ''
    // const wrongAnswer = isWrong ? 'wrongAnswer' : '' 
    // const disapled = props.currentAnswer ? 'disabled' : ''


    // const handleOptionSelect = () => {
    //     props.selectAnswer(props.answer)
    // };

    return (

        <div 
            // className={`answer ${correctAnswer} ${wrongAnswer} ${disapled}`}
            className={`answer`}
            onClick = {()=>{
                props.selectAnswer(props.answer)
                // console.log(props.answer)
                // setSelectedOption(props.answer)
                }}
        >
            {/* <Form.Check type="radio" aria-label="radio 1" /> */}
            <div className='answerLetter'>
                {letters[props.index]}
            </div>
            <div className='answerText'>
                {props.answer}
            </div>
        
        </div>
       
    )
}

export default Answer;