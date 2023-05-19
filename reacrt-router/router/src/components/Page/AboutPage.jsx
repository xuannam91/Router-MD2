import React from 'react'
import { Outlet } from 'react-router-dom'

function AboutPage() {
  return (
    <div>
      {/* outlet dùng để xác định vị trí của Comp */}
      <Outlet/>
    </div>
  )
}

export default AboutPage