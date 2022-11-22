import React from 'react';
import { Container, Row } from "react-bootstrap";
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

import "./Home.css";
const Home = () => {

  const quizData = useLoaderData();
  const {data: quizList} = quizData;
  console.log(quizList)

  

  return (
    <Container style={{padding: "80px 0"}}>

      <div className='Header-top' style={{textAlign: "center"}} >
        <h1>Welcome to Dynamic Quiz</h1>
        <p>Join To Quiz Hub Today</p>
      </div>

      <div className="topic-container mt-5">
      <Row xs={1} md={2} lg={4} className="g-4">
        {quizList.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </Row>
      </div>

    </Container>
  )
}

export default Home