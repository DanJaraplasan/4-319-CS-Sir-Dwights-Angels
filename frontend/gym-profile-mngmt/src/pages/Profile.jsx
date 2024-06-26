import React from "react";

function Profile() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-600">
      <div className="h-screen w-screen flex justify-center flex-col p-[50px]">
        <div className="h-[200px] w-[1780px] rounded-t border-none border-[2px] bg-gray-300">
          <div className="text-center p-10 text-9xl">
            WELCOME, JIN
          </div>
        </div>
        <div className="h-[700px] w-[1780px] bg-white rounded-b">
          <div className="text-left p-10 text-7xl">
            Date Joined: 05/18/2024
          </div>
          <div className="text-left p-10 text-7xl">
            Membership Status: 1 month
          </div>
          <div className="text-left p-10 text-7xl">
            Expiry Date: 06/18/2024
          </div>
          <div className="text-left p-10 text-7xl">
            Balance: Php 1500.00
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;