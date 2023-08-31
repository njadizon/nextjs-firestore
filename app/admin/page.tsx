'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

import "bootstrap/dist/css/bootstrap.css";
import styles from './../page.module.css';
import Loading from "../loading";
import SideNavigation from "../shared/components/side-navigation";
import SiteLogo from "../shared/components/site-logo";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page() {

    const router = useRouter();
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
      }, []);

    const createPatient = () => {
        router.push('/admin/create')
    }


    const { data, error, isLoading } = useSWR(
      "/api/patients" ,
      fetcher
    );

    if (error) return <p>Failed to fetch {error.toString()}</p>;
    if (isLoading) return <Loading></Loading>
        
    var dataList = data?.data;

    return (
        <div className={styles.pageContainer}>
            <SiteLogo></SiteLogo>
            <SideNavigation></SideNavigation>

            
            <div className={styles.pageDiv}>
            <h1>Patients List</h1>
            <h3>This the list of patients</h3>
                <table className="table table-bordered table-hover">
                    <thead className="thread-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email Address</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataList.map((data: any) => (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.lastName}, {data.firstName}</td>
                                <td>{data.email}</td>
                                <td>
                                    <Link href={`admin/${data.id}`}>View Details</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button onClick={createPatient}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Create Patient
                </button>
            </div>

        </div>
    )
}