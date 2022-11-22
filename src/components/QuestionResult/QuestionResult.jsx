import React from 'react'

const QuestionResult = ({rightAns, wrongAns}) => {
  return (
    <div className='question-result'>
            <p className='text-success'>
                <strong>Right Ans: {rightAns}</strong>
            </p>
            <p className='text-danger'>
                <strong>Wrong Ans: {wrongAns}</strong>
            </p>
    </div>
  )
}

export default QuestionResult