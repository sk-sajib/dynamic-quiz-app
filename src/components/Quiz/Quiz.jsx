import React from 'react'
import { Col, Card, Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {

    const { logo, name, total, id } = quiz;

  return (
    <div className='quiz'>
        <Col>
        <Card>
        <Card.Img variant="top" src={logo} style={{backgroundColor: "rgba(137, 43, 226, 0.094)"}} />
        <Card.Body>
            <Card.Title>
                <p className='text-center'>Total Quiz: {total}</p>
            </Card.Title>
            <Card.Text>
                <div className='d-flex justify-content-between align-items-center card-text'>
                <p>{name}</p>
                <Button variant="info">
                    <Link to={`/quiz/${id}`}>Join Quiz</Link>
                </Button>
                </div>
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>
    </div>
  )
}

export default Quiz