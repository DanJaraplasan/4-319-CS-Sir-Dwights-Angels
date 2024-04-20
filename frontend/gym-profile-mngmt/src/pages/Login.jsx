
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Login() {
  return (
    <div class="bg-gradient-to-r from-gray-900 to-gray-600">
      <div class="h-screen w-screen flex justify-center flex-col p-[50px]">
        <div class="h-[580px] w-[680px] rounded-t border-none border-[2px] bg-gray-300 ">
          <div class="text-left p-10 text-9xl">
            LOGIN
          </div> 
          <div class="h-[200px] flex items-center flex-col space-y-10 justify-center">
            <div class="">
              <input type="password" class="h-[35px] w-[400px] rounded-lg pl-[10px] text-lg" placeholder="username"></input>
            </div>
            <div class="">
              <input type="text" class="h-[35px] w-[400px] rounded-lg pl-[10px] text-lg" placeholder="password"></input>
            </div>
          </div>
          <div class="w-[540px] flex flex-row-reverse items-center">
            <button class="bg-stone-800 hover:bg-black text-white font-bold py-2 px-4 rounded">
              login
            </button>
          </div>
        </div>
        <div class="h-[100px] w-[680px] bg-white rounded-b">
          <div class="flex justify-center p-[35px]">
            <button class="">
            </button>
            <div className="flex justify-center pb-[35px]">
              <Link to="/register" className=" hover:underline">
                Don't have an account?
              </Link>
          </div>
          
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login