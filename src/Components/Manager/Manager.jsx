import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
const Manager = () => {
  const [form, setForm] = useState({ siteName: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const passwordRef = useRef();

  //saving password in localstorage
  useEffect(() => {
    let password = localStorage.getItem("password");
    if (password) {
      setPasswordArray(JSON.parse(password));
    }
  }, []);

  const savePass = () => {
    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "password",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    console.log([...passwordArray, form]);

    toast("Password saved!", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const deletePass = (id) => {
    console.log("deleting password with id : " + id);
    let confirmation = confirm("Do your really want to delete this password?");
    if (confirmation) {
      setPasswordArray(passwordArray.filter((item) => item.id != id));
      localStorage.setItem(
        "password",
        JSON.stringify(passwordArray.filter((item) => item.id != id))
      );
    }
    toast("Password deleted!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const editPass = (id) => {
    console.log("editing password with id : " + id);
    setForm(passwordArray.filter((item) => item.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id != id));
  };

  //show hidden password
  const showPass = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else if (passwordRef.current.type === "text") {
      passwordRef.current.type = "password";
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      {/* taostify container  */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* app - background  */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-pink-800 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto mt-6 sm:pt-3 sm:px-36 ">
        <div className="flex justify-center">
          <p className="sm:pb-4 sm:text-xl sm:font-bold font-medium mt-2 sm:mt-0">
            Save your password at your place
          </p>
        </div>
        <div className="flex justify-center  sm:gap-5 sm:px-2 sm:p-0 gap-2 mt-2 sm:mt-0 m-3 sm:m-5">
          <input
            value={form.siteName}
            onChange={handleChange}
            type="text"
            name="siteName"
            placeholder="enter site name"
            className="border border-pink-800 rounded-lg sm:px-2 px-1 w-32 sm:w-1/2
              focus:outline-none focus:ring-0"
          />
          <input
            ref={passwordRef}
            value={form.password}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="enter password"
            className="border border-pink-800 rounded-lg sm:px-2 px-1 w-32 sm:w-1/2
              focus:outline-none focus:ring-0"
          /> <div className="flex justify-center sm:flex-none">
          <span className="right-0 hover:cursor-pointer">
            <lord-icon
              onClick={showPass}
              src="https://cdn.lordicon.com/dicvhxpz.json"
              trigger="hover"
              colors="primary:#121331,secondary:#c7166f"
              className="h-6"
            ></lord-icon>
          </span></div>
        </div>
        <div className="flex justify-center">
          <button
            className="hover:bg-pink-500 bg-pink-600 ring-1 ring-black rounded-full px-4 w-auto flex justify-center items-center gap-1 sm:gap-2"
            onClick={savePass}
            trigger="hover"
          >
            Add Password
            <lord-icon
              className="sm:h-6 h-5"
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
              state="hover-swirl"
              colors="primary:#121331,secondary:#121331"
            ></lord-icon>
          </button>
        </div>

        {/* Displaying passwords  */}
        <div className="container flex justify-center items-center">
          <div className="mt-6 sm:mt-8">
            <h2 className="p-2 font-medium sm:font-bold sm:text-xl">Your passwords</h2>

            {passwordArray.length === 0 && <div>No passwords to show </div>}
            {passwordArray.length != 0 && (
              <table className="table-auto">
                <thead className="ring-1 ring-black rounded-2xl">
                  <tr>
                    <th className="text-left bg-pink-600 px-2 rounded-l-2xl ">
                      Site
                    </th>
                    <th className="text-left bg-pink-600">Password</th>
                    <th className="text-left bg-pink-600 rounded-r-2xl">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {passwordArray.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-left sm:w-52 w-32 p-2">{item.siteName}</td>
                        <td className="text-left sm:w-52 w-32 p-2 ">{item.password}</td>
                        <td className="text-left w-20">
                          <span
                            onClick={() => {
                              editPass(item.id);
                            }}
                          >
                            <lord-icon
                              className="h-5 cursor-pointer"
                              src="https://cdn.lordicon.com/exymduqj.json"
                              trigger="hover"
                              colors="primary:#121331,secondary:#c7166f"
                            ></lord-icon>
                          </span>
                          <span
                            onClick={() => {
                              deletePass(item.id);
                            }}
                          >
                            <lord-icon
                              className="h-5 cursor-pointer"
                              src="https://cdn.lordicon.com/jzinekkv.json"
                              trigger="hover"
                              colors="primary:#121331,secondary:#c7166f"
                              // style="width:250px;height:250px"
                            ></lord-icon>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
