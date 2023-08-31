'use client'
import Link from "next/link";

import addData from "@/firebase/firestore/addData";

import "bootstrap/dist/css/bootstrap.css";
import styles from './../../page.module.css';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SiteLogo from "@/app/shared/components/site-logo";
import SideNavigation from "@/app/shared/components/side-navigation";
import React from "react";

export default function Page() {
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [contactNumber, setContactNumber] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [gender, setGender] = React.useState('')
    
    const router = useRouter();
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
      }, []);

    const navigateToPrevious = () => {
        router.push('/admin')
    }

    const handleForm = async (event: any) => {
        console.log('event', event)
        event.preventDefault();

        await addData("/patients", Date.now().toString(), {
            firstName: firstName,
            lastName: lastName,
            address: address,
            contactNumber: contactNumber,
            email: email,
            gender: gender
        }).then((x) => {
            console.log('success')
        }, (error) => {
            console.log(error)
        });


        return router.push("/admin")
    }

    return (
        <div className={styles.pageContainer}>
            <SiteLogo></SiteLogo>
            <SideNavigation></SideNavigation>
            
            <div className={styles.pageDiv}>
                <h1 className="mb-5">Create Patient Page</h1>

                <form id="myform" onSubmit={handleForm} className="form">
                    <div className={styles.createBox}>
                        <input onChange={(e) => setFirstName(e.target.value)} required type="text" name="fn" id="fn"/>
                        <label>First Name</label>
                    </div>    
                    <div className={styles.createBox}>
                        <input onChange={(e) => setLastName(e.target.value)} required type="text" name="ln" id="ln"/>
                        <label>Last Name</label>
                    </div>      
                    <div className={styles.createBox}>
                        <input onChange={(e) => setAddress(e.target.value)} required type="text" name="adr" id="adr"/>
                        <label>Address</label>
                    </div>    
                    <div className={styles.createBox}>
                        <input onChange={(e) => setContactNumber(e.target.value)} required type="text" name="cn" id="cn"/>
                        <label>Contact Number</label>
                    </div>   
                    <div className={styles.createBox}>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email"/>
                        <label>Email Address</label>
                    </div>   
                    <div className={styles.createBox}>
                        <input onChange={(e) => setGender(e.target.value)} required type="text" name="gdr" id="gdr"/>
                        <label>Gender</label>
                    </div>            
                </form>

                <button type="submit" className="mr-5" onClick={handleForm}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Create
                </button>

                <button onClick={navigateToPrevious}>
                    {/* <span></span>
                    <span></span>
                    <span></span>
                    <span></span> */}
                    Back
                </button>
            </div>
            
        </div>
    );
}