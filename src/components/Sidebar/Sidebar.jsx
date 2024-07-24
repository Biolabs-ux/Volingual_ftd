"use client";
import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link';

const Sidebar = () => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <div className={styles.main1}>
            <div className={`${styles.mainLeft} ${isSidebarExpanded ? styles.expanded : ''}`}>
                <div className={styles.user}>
                    <div className={styles.title}></div>
                    {isSidebarExpanded && <h2>VOLINGUAL</h2>}
                    <div className={styles.menu} onClick={toggleSidebar}>
                        <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i>
                    </div>
                </div>
                <ul>
                    <li>
                        <i className="fa-solid fa-chess-board" style={{ color: "#ffffff" }}></i>
                        <p>Dashboard</p>
                    </li>
                    <h5>CREATIONS</h5>
                    <Link href={"/texttranslation"}>
                    <li>
                        <i className="fa-solid fa-file-lines" style={{ color: "#ffffff" }}></i>
                        <p>Text Translation</p>
                    </li>
                    </Link>
                    <li>
                        <i className="fa-solid fa-volume-high" style={{ color: "#ffffff" }}></i>
                        <p>Text to Speech</p>
                    </li>
                    <h5>PAGES</h5>
                    <li>
                        <i className="fa-solid fa-clock-rotate-left" style={{ color: "#ffffff" }}></i>
                        <p>History</p>
                    </li>
                    <li>
                        <i className="fa-regular fa-file" style={{ color: "#ffffff" }}></i>
                        <p>Documentation</p>
                    </li>
                    <h5>SETTINGS</h5>
                        <Link href={"/profilesettings"}>
                    <li>
                        <i className="fa-solid fa-user" style={{ color: "#ffffff" }}></i>
                        <p>Profile Settings</p>
                    </li>
                        </Link>
                        <Link href={"/accountsettings"}>
                    <li>
                        <i className="fa-solid fa-sliders" style={{ color: "#ffffff" }}></i>
                        <p>Account Settings</p>
                    </li>
                    </Link>
                </ul>
                <ul>
                    <li className={styles.logout}>
                        <i className="fa-solid fa-right-from-bracket" style={{ color: "#ffffff" }}></i>
                        <p>Log out</p>
                    </li>
                    <li>
                        <i className="fa-regular fa-sun" style={{ color: "#ffffff" }}></i>
                        <p>Light mode</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
