'use client'

import Header from "@/components/Frontend/Header/Header";
import Footer from "@/components/Frontend/Footer/Footer"; 
import Sidebar from "@/components/Frontend/Sidebar/Sidebar";

import styles from './dashboardLayout.module.css';
import DialogueBox from "@/components/Frontend/SharedComponents/DialogueBox/DialogueBox";

export default function RootLayout({ children }) {



  return (

    <div className={`${styles.mainWrapper} `} >
      <div className={`${styles.topSection} `} >
        <Header />
      </div>
      <div className={`${styles.subSection}  `} >
        <div className={`${styles.leftSection}  `} >
          <Sidebar />
        </div>
        <div className={`${styles.rightSection} `} >
          <div className={`${styles.contentSection} `} >
            { children }
          </div>
        </div>
      </div>
    </div>  

  );
}
