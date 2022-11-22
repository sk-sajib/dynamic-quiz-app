import React from 'react'
import { Col } from 'react-bootstrap'

const QuestionOption = ({option, index, handleAnswer}) => {
  return (
    <Col>
    <div className="form-check" >
         <input style={{cursor:'pointer'}} onClick={() => handleAnswer(option)} className="form-check-input" type="radio" name="flexRadioDefault"  value={option}/>
         <label style={{cursor:'pointer'}} className="form-check-label" htmlFor={option}>
            {option}
         </label>
     </div>
 </Col>
  )
}

export default QuestionOption