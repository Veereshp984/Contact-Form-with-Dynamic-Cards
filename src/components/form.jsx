import React, { useState } from "react";

const Form = ({allUsers , setallUsers}) => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    setallUsers([...allUsers , {name, email, phone}])
    setname("");
    setemail("");
    setphone("");
    
  };
  return (
    <div>
      <form
        className="bg-white border border-slate-300 rounded-md shadow-sm p-6 w-95"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1 className="text-center text-slate-800 text-lg font-semibold mb-5">
          Contact Form
        </h1>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full border border-slate-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-slate-500"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">Email</label>
            <input
              type="text"
              placeholder="Enter email"
              className="w-full border border-slate-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-slate-500"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="block text-sm text-slate-600 mb-1">
              Phone No
            </label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full border border-slate-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-slate-500"
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
            />
          </div>
        </div>

        <button
          className="mt-6 w-full bg-slate-800 text-white py-2 text-sm rounded-sm"
          onClick={() => {}}
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Form;
