import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Profile2() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-600">
      <div className="h-screen w-screen flex justify-center flex-col p-[50px]">
        <div className="h-[50px] w-[1780px] rounded-t border-none border-[2px] bg-gray-300 ">
        <div className="container mx-auto flex justify-between items-center">      
                <ul className="text-2xl p-3 flex space-x-[350px]">
                    <li>Name</li>
                    <li>Date Joined</li>
                    <li>Expiry Date</li>
                    <li>Status</li>
                </ul>
            </div>
        </div>
        <div className="h-[700px] w-[1780px] bg-white rounded-b">
        <ul className="text-2xl p-3 flex space-x-[330px]">
                    <li>Jin</li>
                    <li>02/13/2024</li>
                    <li>03/13/2024</li>
                    <li>Active</li>
                   
                    <button type="button" class="btn btn-archive" onClick={() => editEmployee(item)} >Archive</button> 
                </ul>  
            </div>
        </div>
      </div>
  );
}

export default Profile2;
