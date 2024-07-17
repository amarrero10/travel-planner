import React, { useState } from "react";
import * as sessionActions from "../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import logo from "../assets/logo.png";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password })).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  const handleDemoLogin = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential: "DemoUser", password: "password" })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img alt="Your Company" src={logo} className="mx-auto h-10 xl:h-20 w-auto" />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-steelblue">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-steelblue">
                Email address or Username
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-steelblue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-steelblue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-steelblue"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-steelblue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-steelblue sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-skyblue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-steelblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steelblue"
              >
                Sign in
              </button>
            </div>
            <div>
              <button
                onClick={handleDemoLogin}
                className="flex w-full justify-center rounded-md bg-skyblue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-steelblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steelblue"
              >
                Demo Login
              </button>
            </div>
            {errors.credential && <p>{errors.credential}</p>}
          </form>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link to="/signup" className="font-semibold leading-6 text-rose hover:text-indigo-500">
            Register now!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginFormPage;
