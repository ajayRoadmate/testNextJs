'use client';

import styles from './Header.module.css';
import { FaRegBell } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';

export default function Header() {

  
  return (
    <div className={`${styles.mainWrapper} `}>
      {/* logo */}
      <div className={`${styles.LogoText}  `} >RoadMate.</div>

      {/* search */}
      <div className={`${styles.searchWrapper} `}>
        <input className={`${styles.searchInput}`} placeholder="Search..." ></input>
      </div>

      {/* right section */}
      <div className={`${styles.rightSection} ms-auto`}>
        <div className={`${styles.notificationWrapper} `} >
          <FaRegBell />
        </div>
        <div className={`ms-3 fw-bold user-select-none`}>
          Thomas
        </div>
        <div  className={`${styles.accountWrapper} ms-3`}>
          <div className={`${styles.accountImageWrapper} `} >
            T
          </div>
          <div className={`${styles.accountIconWrapper} `} >
            <FaCaretDown />
          </div>
        </div>
      </div>
    </div>
  )
}
