"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { signUpSchema, SignUpType } from "@/lib/types";
import { signUp } from "@/apis/authAPI";
import toast, { Toaster } from "react-hot-toast";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  });

  const UserForm = () => {
    const form = useForm<SignUpType>({
      resolver: zodResolver(signUpSchema),
      mode: "onChange",
    });
  };

  const handleSignup = async (formdata: SignUpType) => {
    const res = await signUp(formdata);
    if (res?.error) {
      const notify = () => toast.error(res.error.error);
      notify();
    }
    reset();
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-20 sm:px-6 lg:px-8">
        <Toaster />
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
            Or <br />
            <a
              href="#"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              already have an account
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-20 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              onSubmit={handleSubmit((e) => handleSignup(e))}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    {...register("email")}
                    id="email"
                    name="email"
                    type="email"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your email address"
                  ></input>
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">{`${errors.email.message}`}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    {...register("password")}
                    id="password"
                    name="password"
                    type="password"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                  ></input>
                  {errors.password && (
                    <p className="text-red-500 text-xs italic">{`${errors.password.message}`}</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    {...register("confirmPassword")}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                  ></input>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs italic">{`${errors.confirmPassword.message}`}</p>
                  )}
                </div>
              </div>

              <div>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isSubmitting ? "Loading..." : "Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
