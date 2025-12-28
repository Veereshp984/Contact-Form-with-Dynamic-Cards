import React from 'react'

const Card = ({allUsers}) => {
  return (
    <>
    {allUsers.map((user,idx)=>{
      return  <div key={idx} className="bg-white border border-slate-300 rounded-md shadow-sm p-5 w-65 text-slate-700 text-sm">
      
      <h1 className="text-slate-800 font-semibold mb-3 border-b border-slate-300 pb-1">
        Contact Details
      </h1>

      <p className="mb-1"><span className="font-medium">Name:</span>{user.name}</p>
      <p className="mb-1"><span className="font-medium">Email:</span> {user.email} </p>
      <p><span className="font-medium">Phone:</span> {user.phone} </p>

    </div>
    })}
    </>
   
  )
}

export default Card
