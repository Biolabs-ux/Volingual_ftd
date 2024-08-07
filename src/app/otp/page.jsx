'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Page() {
    const router = useRouter()
    const [otp, setOtp] = useState(Array(6).fill(""));
    const [error, setError] = useState("");

    const handleChange = (element, index) => {
        if (/^[0-9]$/.test(element.value)) {
            let newOtp = [...otp];
            newOtp[index] = element.value;
            setOtp(newOtp);
            setError("");
            if (element.nextSibling) {
                element.nextSibling.focus();
            }
        } else {
            setError("Please enter valid digits");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (otp.some(digit => digit === "")) {
            setError("Please fill out all fields");
            return;
        }
        const otpCode = otp.join("");
        console.log("Before", otp)
        try {
             console.log("Before", otp)
            const response = await axios.post('http://127.0.0.1:8000/api/v1/verify-email/', { otp: otpCode });
            toast.success("OTP Verified Successfully");
            // Add your logic to handle successful OTP verification
             if (response.status === 200) {
                 router.push("/login")
        }
        } catch (error) {
            toast.error("Invalid OTP");
            setError("Invalid OTP");
        }
    };

    return (
        <section className={style.form}>
            <div className={style.left}>
                <div className={style.content}>
                    <h1>VOLINGUAL</h1>
                    <p>The most popular peer to peer lending at SEA</p>
                </div>
                <div className={style.circle}></div>
                <div className={style.circle1}></div>
            </div>
            <div className={style.right}>
                <Image width={100} height={100}
                    src="/images/Open Envelope.png" alt=""
                />
                <div className={style.con}>
                    <h2>Password reset</h2>
                    <p>We sent a code to <span>johncleo@gmail.com</span></p>
                    <form onSubmit={handleSubmit}>
                        <div className={style.otpInput}>
                            {otp.map((data, index) => (
                                <input
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            ))}
                        </div>
                        {error && <p className={style.error}>{error}</p>}
                        <button type="submit">Continue</button>
                    </form>
                    <div className={style.exist}>
                        <p className={style.click}>Didn&#39;t receive the email? <Link href={""}>Click to resend</Link></p>
                        <p>Go back to <Link href={"/login"}>Sign in</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}
