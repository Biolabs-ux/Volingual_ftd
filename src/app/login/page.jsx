"use client";
import React, { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/login/', { email, password });
      if (response.status === 200) {
        const token = response.data.access_token;
        setAccessToken(token);
        localStorage.setItem('access_token', token);
        console.log(token);
        toast.success("Login successful");
        // Add your logic to handle successful login, e.g., redirect to another page
        router.push("/texttranslation"); // Redirect to a dashboard or another page
      }
    } catch (error) {
      toast.error("Invalid email or password");
      setError("Invalid email or password");
    }
  };

  return (
    <section className={style.form}>
      <div className={style.left}>
        <div className={style.content}>
          <h1>VOLINGUAL</h1>
          <p>The most popular peer to peer lending at SEA</p>
          <button>Read more</button>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.con}>
          <h2>Hello Again!</h2>
          <p>Welcome Back</p>
          <form onSubmit={handleSubmit}>
            <div className={style.inputContainer}>
              <i className="fa-regular fa-envelope" aria-hidden="true"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={style.inputContainer}>
              <i className="fa fa-lock" aria-hidden="true"></i>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i
                className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                aria-hidden="true"
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  left: '85%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#33333372',
                }}
              ></i>
            </div>
            {error && <p className={style.error}>{error}</p>}
            <button type="submit">Login</button>
          </form>
          <div className={style.forgot}>
            <Link href={"/forgotpassword"}>Forgot Password?</Link>
          </div>
          <div className={style.bot}>
            <p>Or login with</p>
            <div className={style.google}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="25"
                preserveAspectRatio="xMidYMid"
                viewBox="0 0 256 262"
                id="google"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                ></path>
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                ></path>
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                ></path>
              </svg>{" "}
            </div>
            <div className={style.exist}>
              <p>Don&#39;t have an account yet?</p>
              <Link href={"signup"}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
