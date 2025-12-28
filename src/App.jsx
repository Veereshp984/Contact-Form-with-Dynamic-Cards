import React, { useState } from 'react'
import Form from './components/form'
import Card from './components/card'

const App = () => {
  const [allUsers, setallUsers] = useState([]);
  
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center gap-12 py-12">
      
      <Form allUsers={allUsers} setallUsers={setallUsers} />

      <div className="flex gap-8 flex-wrap justify-center">
        <Card allUsers={allUsers} />
      </div>

    </div>
  )
}

export default App
