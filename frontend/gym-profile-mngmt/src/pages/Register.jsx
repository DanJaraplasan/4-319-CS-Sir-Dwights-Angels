import { Link } from "react-router-dom";
import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, phone }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Registration successful!");
      } else {
        alert("Registration failed: " + data.detail || "Unknown error");
      }
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-600">
      <div className="h-screen w-screen flex items-center flex-row-reverse p-[50px]">
        <div className="">
          <div className="h-[680px] w-[680px] rounded-t border-none border-[2px] bg-gray-300">
            <div className="text-left p-10 text-9xl">Register</div>
            <form onSubmit={handleRegister} className="h-[200px] flex items-center flex-col space-y-10 justify-center">
              <div>
                <input
                  type="text"
                  className="h-[35px] w-[400px] rounded-lg pl-[10px] text-lg"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  className="h-[35px] w-[400px] rounded-lg pl-[10px] text-lg"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="h-[35px] w-[400px] rounded-lg pl-[10px] text-lg"
                  placeholder="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="w-[380px] flex flex-row-reverse items-center mt-[130px]">
                <button
                  type="submit"
                  className="bg-stone-800 hover:bg-black text-white font-bold py-2 px-4 rounded"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center p-[35px]">
              <Link to="/login" className="hover:underline">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
