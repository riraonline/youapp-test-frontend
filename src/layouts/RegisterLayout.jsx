import React from "react";
import InputForm from "../components/Input/InputForm";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

const RegisterLayout = () => {
  return (
    <>
      <div className="text-white flex flex-row items-center justify-evenly w-28 h-20">
        <div className="text-4xl font-bold">&lt;</div>
        <span className="text-2xl">Back</span>
      </div>
      <div className="flex flex-col justify-evenly h-auto mt-5 mx-5">
        <h1 className="text-3xl font-bold text-white ml-5">Register</h1>
        <form className="flex flex-col justify-around mt-5 h-96">
          <InputForm type="email" name="email" title="Enter Email" />
          <InputForm type="text" name="username" title="Create Username" />
          <InputForm type="password" name="password" title="Create Password" />
          <InputForm type="password" name="password" title="Confirm Password" />
          <Button title="Register" />
        </form>
        <p className="self-center my-4 text-center text-white">
          Have an account?{" "}
          <Link to="/api/login" relative="path">
            Login here
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegisterLayout;
