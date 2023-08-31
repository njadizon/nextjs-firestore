'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

import getData from "@/firebase/firestore/getData";
import useSWR from "swr";

import "bootstrap/dist/css/bootstrap.css";
import styles from './../../page.module.css';
import { useEffect } from "react";


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page({ params }: { params: { id: string } }) {
    const router = useRouter()
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
      }, []);
      
      const navigateToPrevious = () => {
        router.push('/admin')
      }

    const { data, error, isLoading } = useSWR(
        `/api/patients/${params.id}`,
        fetcher
    );

    if (error) return <p>Failed to fetch {error.toString()}</p>;
    if (isLoading) return <p>Loading details...</p>;


    return (
        <div className={styles.pageContainer}>
            <div className={styles.siteLogo}>
                <img src="https://getvectorlogo.com/wp-content/uploads/2019/01/metropolitan-hospital-vector-logo.png" alt="logo"></img>
            </div>


            
            <div className={styles.pageDiv}>
            <h1>Patient Details</h1>
                <ul>
                    <li>{data.firstName}</li>
                    <li>{data.lastName}</li>
                    <li>{data.address}</li>
                    <li>{data.contactNumber}</li>
                    <li>{data.email}</li>
                    {/* <li>{data.birthDate.toDateString()}</li> */}
                    <li>{data.gender}</li>
                </ul>

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