"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Image from 'next/image';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("ENGLISH");
  const [targetLang, setTargetLang] = useState("NWEH");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleTranslate = async () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      toast.error("No access token found. Please log in.");
      router.push("/login");
      return;
    }

    if (!inputText.trim()) {
      setError("Please enter text to translate.");
      return;
    }
    setError("");

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/translate/',
        {
          input_text: inputText,
          // source_language: sourceLang,
          // target_language: targetLang,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        setTranslatedText(response.data.translated_text);
        // toast.success("Translation successful");
      } else {
        toast.error("Translation failed");
      }
    } catch (error) {
      toast.error("An error occurred while translating");
      setError("An error occurred while translating");
    }
  };

  if (loading) {
    return <p>Loading...</p>; // You can customize the loading indicator as needed
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.active : ''}`}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <div className={styles.topnav}>
          <div className={styles.left}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
          <div className={styles.right}>
            <i className="fa-regular fa-bell"></i>
            <div className={styles.profile}>
              <Image width={1000} height={1000} src="/images/image.png" alt="Profile" />
            </div>
            <div className={styles.hamburgerMenu} onClick={toggleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <nav className={styles.nav}>
          <h1>Volingual Translate</h1>
        </nav>
        <div className={styles.container1}>
          <header className={styles.header1}>
            <div className={styles.languageSelector}>
              <select className={styles.dropdown} value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
                <option>ENGLISH</option>
                <option>NWEH</option>
              </select>
              <div className={styles.exchange}><i className="fa-solid fa-arrow-right-arrow-left" style={{color: "#000000" }}></i></div>
              <select className={styles.dropdown} value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
                <option>NWEH</option>
                <option>ENGLISH</option>
              </select>
            </div>
          </header>
          <div className={styles.maincontent}>
            <div className={styles.content}>
              <textarea
                className={styles.textArea}
                placeholder="Enter text..........."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              ></textarea>
              {error && <p className={styles.error}>{error}</p>}
            </div>
            <button className={styles.translateButton1} onClick={handleTranslate}>Translate</button>
            <div className={styles.outputContainer}>
              <textarea
                className={styles.textArea}
                value={translatedText}
                readOnly
              ></textarea>
              <button className={styles.copyButton} onClick={() => navigator.clipboard.writeText(translatedText)}>Copy</button>
            </div>
          </div>
          <button className={styles.translateButton} onClick={handleTranslate}>Translate</button>
        </div>
        <div className={styles.icons}>
          <i className="fa-regular fa-copy" style={{color: "#000000" }}></i>
          <i className="fa-solid fa-share-nodes" style={{color: "#000000" }}></i>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
