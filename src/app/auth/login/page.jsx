"use client";

import Header from "@/app/component/common/Header";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <div className=" font-mono text-amber-50 flex justify-center items-top pt-7 w-full h-screen bg-[#faecdc]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white-800 text-[#292929] border border-gray-300 p-7 h-100 rounded-[15px] w-100 flex justify-around flex-col  bg-[#FFF5E9]"
        >
          <h2
            className="text-3xl text-left capitalize">login</h2>
          <div
            className="text-left flex  flex-col justify-around h-20">
            <label className="font-semibold text-gray-500">Username</label>

            <input
              placeholder="username"
              className="border border-gray-400 rounded px-2 w-85  h-10 text-left font-medium capitalize bg-[#fff]"
              type="text"
              id="FirstName"
              {...register("userName", {
                required: "This field is required",
              })}
            />

            {errors.userName && (
              <p className="text-red-600 font-semibold text-7xl">{errors.userName.message}</p>
            )}
          </div>
          <div className="text-left flex  flex-col justify-around h-20">
            <label className="font-semibold text-gray-500">Password</label>
            <input
              placeholder="password"
              className="border border-gray-400 rounded px-2 w-85  h-10 text-left font-medium capitalize  bg-[#fff]"
              type="password"
              id="FirstName"
              {...register("pasword", {
                required: "This field is required",
              })}
            />

            {errors.pasword && (
              <p className="text-red-600 font-semibold">{errors.pasword.message}</p>
            )}
          </div>
          <button
            type="submit"
            className=" rounded-3xl px-2 w-85  h-10 font-semibold font-medium capitalize bg-[#50b863] text-center text-amber-50"
          >Submit</button>
          <p className="text-center text-[10px]">
            Create a new account? 
            <Link
              href="/auth/signup"
              className="text-blue-700 underline"
            >create 
            </Link>
          </p>

        </form>
      </div>
    </>
  );
};

export default Page;
