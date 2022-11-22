import React from 'react'
import { FaEye } from "react-icons/fa";
import { Container, Card, Button, Row } from 'react-bootstrap';
import QuestionOption from '../QuestionOption/QuestionOption';
import toast, { Toaster } from 'react-hot-toast';

const Quesion = ({questionProps, index, setRightAns, setWrongAns, rightAns, wrongAns}) => {
console.log(questionProps)
const { question, options, correctAnswer } = questionProps;

const handleAnswer = (selectedOption) => {
    if(selectedOption === correctAnswer ) {
     setRightAns(rightAns+1);
    toast.success('Correct Anser')
     return
    }
    else {
     setWrongAns(wrongAns+1)
  
     toast.error('Wrong Answer')
        
     return
    }
 }

 const seeCorrectAnswer = () => {

    toast.success(`Correct answer is: ${correctAnswer}`, {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });

 }

  return (
    <div>

    <Toaster
     position="top-center"
     reverseOrder={false}
    />
        <Container>
            <div className="question-container">
                <Card>
                <Card.Header>
                    <div className="question-no">
                        <p>Question no: {index + 1}</p>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="card-top-container d-flex  justify-content-between align-items-center mb-2">
                        <Card.Title>{question}</Card.Title>
                        <FaEye  onClick={seeCorrectAnswer} style={{cursor: "pointer"}}></FaEye>
                    </div>
                </Card.Body>
                </Card>
            </div>

            <div className="option-container">
            <Row xs={1} md={1} lg={1} className="g-4">
                {options.map((option, idx) => (
                <QuestionOption
                    index={index}
                    key={idx}
                    option={option}
                    handleAnswer={handleAnswer}
                ></QuestionOption>
                ))}
            </Row>
            </div>
        </Container>
    </div>
  )
}

export default Quesion