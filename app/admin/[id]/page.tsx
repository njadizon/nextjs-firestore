'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

import getData from "@/firebase/firestore/getData";
import useSWR from "swr";

import "bootstrap/dist/css/bootstrap.css";
import styles from './../../page.module.css';
import { useEffect } from "react";
import Loading from "@/app/loading";
import SideNavigation from "@/app/shared/components/side-navigation";
import SiteLogo from "@/app/shared/components/site-logo";


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
    if (isLoading) return <Loading></Loading>;


    return (
        <div className={styles.pageContainer}>
            <SiteLogo></SiteLogo>
            <SideNavigation></SideNavigation>

            <div className={styles.pageDiv}>
            <h1>Patient Details</h1>
            
                <ul>
                    <li>
                        <label className="mx-2 my-2"><strong>Name:</strong></label>
                        {data.lastName}, {data.firstName}
                    </li>
                    <li>
                        <label className="mx-2 my-2"><strong>Address:</strong></label>
                        {data.address}
                    </li>
                    <li>
                        <label className="mx-2 my-2"><strong>Contact Number:</strong></label>
                        {data.contactNumber}
                    </li>
                    <li>
                        <label className="mx-2 my-2"><strong>Email Address:</strong></label>
                        {data.email}
                    </li>
                    <li>
                        <label className="mx-2 my-2"><strong>Gender:</strong></label>
                        {data.gender}
                    </li>
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