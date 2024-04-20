import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Register() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-600">
      <div className="h-screen w-screen flex items-center flex-row-reverse p-[50px]">
        <div className="">
          <div className="h-[680px] w-[680px] rounded-t border-none border-[2px] bg-gray-300">
            <div className="text-left p-10 text-9xl">Register</div> 
            <div className="h-[200px] flex items-center flex-col space-y-10 justify-center">
              <div>
                <input type="text" className="h-[35px] w-[400px] rounded-lg pl-[10px] text-lg" placeholder="username" />
              </div>
              <div>
                <input type="password" className="h-[35px] w-[400px] rounded-lg pl-[10px] text-lg" placeholder="password" />
              </div>
              <div>
                <input type="text" className="h-[35px] w-[400px] rounded-lg pl-[10px] text-lg" placeholder="phone" />
              </div>
            </div>
            <div className="w-[380px] flex flex-row-reverse items-center mt-[130px]">
              <button className="bg-stone-800 hover:bg-black text-white font-bold py-2 px-4 rounded">
                Register
              </button>
            </div>
            <div className="flex justify-center items-center p-[35px]">
              <Link to="/login" className=" hover:underline">
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
