'use client'
import signIn from "@/firebase/auth/signin";
import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import styles from './../page.module.css';

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const router = useRouter()

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
      }, []);

    const handleForm = async (event: any) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)

        return router.push("/admin")
    }
    return (
        <div className={styles.authContainer}>
            <div className={styles.authLogo}>
                <img src="https://getvectorlogo.com/wp-content/uploads/2019/01/metropolitan-hospital-vector-logo.png" alt="logo"></img>
            </div>
            <div className={styles.loginBox}>
            <h2>Login</h2>
            <form id="myform" onSubmit={handleForm} className="form">

                <div className={styles.userBox}>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email"/>
                    <label>Username</label>
                </div>

                <div className={styles.userBox}>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password"/>
                    <label>Password</label>
                </div>

                <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Sign In
                </button>

            </form>
        </div>
        </div>
        
    );
}

export default Page;