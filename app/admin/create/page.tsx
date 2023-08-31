'use client'
import Link from "next/link";

import addData from "@/firebase/firestore/addData";

import "bootstrap/dist/css/bootstrap.css";
import styles from './../../page.module.css';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    
    const router = useRouter();
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
      }, []);

    const navigateToPrevious = () => {
        router.push('/admin')
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.siteLogo}>
                <img src="https://getvectorlogo.com/wp-content/uploads/2019/01/metropolitan-hospital-vector-logo.png" alt="logo"></img>
            </div>
            
            <div className={styles.pageDiv}>
                <h1>Create Patient Page</h1>
                <button onClick={navigateToPrevious}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Back
                </button>
            </div>
            
        </div>
    );
}