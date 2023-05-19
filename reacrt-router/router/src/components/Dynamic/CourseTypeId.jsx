import React from 'react'
import { useParams } from 'react-router-dom'

function CourseTypeId() {
    const param = useParams();
  return (
    <div>
        <h2>Chi tiết khoá học: </h2>
        <p>Khoá học có ID: {param.id} - Có type là: {param.type}</p>
    </div>
  )
}

export default CourseTypeId