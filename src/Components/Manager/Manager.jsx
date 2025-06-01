import React, { useEffect, useState } from "react";

const Manager = () => {
  const [form, setForm] = useState({ siteName: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([])
  
  //saving password in localstorage
    useEffect(() =>{
        let password = localStorage.getItem("password");
    // let passwordArray;
    if(password){
        setPasswordArray(JSON.parse(password))
    }
    // else{
        
    // }
    }, [])

    const savePass = () => { 
      setPasswordArray([...passwordArray, form])
      localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
      console.log([...passwordArray, form])
      
  };

  //show hidden password
  const showPass = () => {
    alert("show the password");
  };


  const handleChange = (e) =>{
        setForm({...form, [e.target.name] : e.target.value})
  }
  return (
    <>
      {/* app - background  */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-pink-800 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto pt-3 px-36 ">
        <div className="flex justify-center">
          <p className="pb-4">Save your password at your place</p>
        </div>
        <div className="flex gap-5 pb-4">
          <input
            value={form.siteName}
            onChange={handleChange}
            type="text"
            name="siteName"
            placeholder="enter site name"
            className=" border border-pink-800 rounded-lg px-2 w-1/2
              focus:outline-none focus:ring-0"
          />
          <input
            value={form.password}
            onChange={handleChange}
            type="text"
            name="password"
            placeholder="enter passowrd"
            className="border border-pink-800 rounded-lg px-2 text-sm w-1/2
              focus:outline-none focus:ring-0"
          />
          <span className="right-0 hover:cursor-pointer">
            <lord-icon
              src="https://cdn.lordicon.com/dicvhxpz.json"
              trigger="hover"
              colors="primary:#121331,secondary:#c7166f"
              className="h-6"
            ></lord-icon>
          </span>
        </div>
        <div className="flex justify-center">
          <button
            className="hover:bg-pink-500 bg-pink-600 border border-pink-800 rounded-full px-2 w-36"
            onClick={savePass}
          >
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
