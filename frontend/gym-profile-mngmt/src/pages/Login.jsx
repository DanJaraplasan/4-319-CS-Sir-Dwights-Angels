import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "jinpogi123" && password === "password1234") {
      navigate("/profile");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-600">
      <div className="h-screen w-screen flex justify-center flex-col p-[50px]">
        <div className="h-[580px] w-[680px] rounded-t border-none border-[2px] bg-gray-300">
          <div className="text-left p-10 text-9xl">
            LOGIN
          </div>
          <div className="h-[200px] flex items-center flex-col space-y-10 justify-center">
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
          </div>
          <div className="w-[540px] flex flex-row-reverse items-center">
            <button
              className="bg-stone-800 hover:bg-black text-white font-bold py-2 px-4 rounded"
              onClick={handleLogin}
            >
              login
            </button>
          </div>
        </div>
        <div className="h-[100px] w-[680px] bg-white rounded-b">
          <div className="flex justify-center p-[35px]">
            <div className="flex justify-center pb-[35px]">
              <Link to="/register" className="hover:underline">
                Don't have an Account?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;