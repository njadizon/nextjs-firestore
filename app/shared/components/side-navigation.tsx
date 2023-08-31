'use client'

import Link from "next/link";
import styles from './../../page.module.css';

export default function SideNavigation() {
    return (
        <div className={styles.sideNav}>

            <div className="">
                <div className="d-flex">
                    
                    <ul>
                        <li>
                            <div className="row">
                                <div className="col-4">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTNCVoIUaerC6FXHEqr7XU7oaUsLqmxEncQ&usqp=CAU"></img>
                                </div>
                                <div className="col-8">
                                    <Link href={"/"}>Home</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-4">
                                    <img src="https://thumbs.dreamstime.com/b/heart-medical-cross-vector-illustration-inside-symbol-red-sign-isolated-white-background-abstract-103990631.jpg"></img>
                                </div>
                                <div className="col-8">
                                    <Link href="/admin/">Patients</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}