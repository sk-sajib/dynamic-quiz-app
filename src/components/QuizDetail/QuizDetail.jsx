import React from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from "react-router-dom";
import Quesion from '../Quesion/Quesion';

const QuizDetail = () => {
    const quizDetails = useLoaderData();
    const { name, questions } = quizDetails?.data;

    const [rightAns, setRightAns] = useState(0);
    const [wrongAns, setWrongAns] = useState(0);

    console.log(quizDetails)
  return (
    <Container>
      
       <h1 className="mt-4">Questions of {name}</h1>
          <Row xs={1} md={1} lg={1} className="g-4">
            {questions.map((question, index) => (
              <Quesion
                index={index}
                key={question.id}
                setRightAns={setRightAns}
                setWrongAns={setWrongAns}
                rightAns={rightAns}
                wrongAns={wrongAns}
                questionProps={question}
              ></Quesion>
            ))}
          </Row>
      
    </Container>
  )
}

export default QuizDetail