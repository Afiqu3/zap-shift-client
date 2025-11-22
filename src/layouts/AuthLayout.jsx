import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png';

const AuthLayout = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="flex-1 min-h-screen p-20">
          <Logo></Logo>
          <div className="flex items-center mt-12">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="bg-[#fafdf0] flex-1 min-h-screen flex items-center">
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
