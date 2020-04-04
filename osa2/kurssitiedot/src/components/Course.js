import React from 'react'

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Total = ({ parts }) => {
  const reducer = (sum, current) => (sum + current.exercises)
  return (
    <div>
      <b>Total of {parts.reduce(reducer, 0)} exercises</b>
    </div>
  )
}

const Part = ({ part }) => {

  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
}

export default Course